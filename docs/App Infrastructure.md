# App Infrastructure

## Definitions
- User: an end user (someone who would consume the coupons)
- Tenant: a client who has data on our system
- Client: a tenant's customer (local businesses, etc..)

## Client Specific Resource Access
- Any deals should be viewable, but each app will have an id specific to the client so their users will only see deals for that client
  - Example: Valley Saver has id 1, and only those deals show up for the Valley Saver version of the app. This should be a query parameter instead of any kind of security measure
    - URL: `https://[domain]/[resourceurl]/q?client=1` or should it be?
    - This makes sense for list results, but not single item results. 
    - This is fine, the query param doesn't have to be universal.
  - Or should it be a param? Each resource url will implicitly belong to a certain client. It could be a route in the API
    - URL: `https://[domain]/client/1/[resourceurl]`

- The lists results should be specific to the clients, but the individual results shouldn't be.
  - `https://[domain]/deals/q?client=[client_id]` should be valid and only return the deals for that specific client
  - `https://[domain]/deals/ab345c4` shouldn't have a query parameter; it is a unique deal. This is fine, because the only way a customer accesses it is by going through the list of deals that are already filterd for the client. 
  - Benefits of this, is that leaving of the client ID can result in all deals coming back. Since the clients don't "pair up", it shouldn't be the case where multiple clients share a single deal. 


## Authorization and Access Control

### Attribute Based Access Control
- An authorizing strategy that defines permissions based on attributes called tags.
- Tags can be attached to IAM principals and AWS resources

#### Policies
- Desitned to allow operations when the principal's tag matches the resource tag.
- Can have a single ABAC policy or small set of policies for the IAM principals.

## Authentication


### What are we doing?
- Clients need to be able to authenticate in order to make modifications to their resources (deals, customers, categories, etc..)
- This is not the same as viewing access to those deals. 


## Resource Access
Token based authentication seems to be the way to go, even with the additional cons. 

### URL-Based Access
Example: `https://[domain]/[userid]/[resourceurl]`
or `https://[domain]/[userid]/[resourceurl]`

Pros: Simple. Each full URL is unique and stateless in a global sense. 
Cons: Pollutes the URL. What if a resource can be shared by multiple users? Does it exist for multiple locations, or only under once specific user? What about shared resources? 

### Token-Based Access
Example: `https://[domain]/[resourceurl]`. (Token provides access)

Pros: 
- Cleaner. Tokens will need to be used either way, and this eliminates the userid field from the request.
Cons: 
- Not globally stateless. Two seperate accounts looking at the same endpoint would see two different thigs. This shouldn't be an issue though. 
- Since all resources will exist under the same endpoints, additional authentication steps will be necessary to only return those the use can access.


## Data Storage

### Datastore
DynamoDB will be used as a datastore. The reasoning is as follows:
- Cheaper than RDS tables
- Partition and sort keys provide simple authorization policy checks for tenant-based access 

#### Partition and Sort Keys
A partition key logically groups records into a partition. The sort key then allows for finer-grained access; identifying a smaller number or unique records within that partition. 

Using the tenant's identify information as a sort key will reduce latency and cost usage, since each tenant's associated app should only pull in resources for that tenant. Similarly, each tenant can only access and modify their own resources. 

The key portion of a schema associated with a table which contains tenant-specific data is as follows:
- The partition key is a tag associated with the tenant's IAM
  - The reasoning for not directly using identity information associated with the IAM (such as UUID) is that it would require IAM identity information be loaded directly into the client's app itself. Additionally, if a client requires additional IAMs, or needs a new IAM, the tag can be added directly to those IAMs, and the app won't require an update with the new UUID added. 
- The sort key is a unique identifier for the record in the context of the entire table. 
- Possibly use a composite sort key with territory-specific information
  - The first portion of the key is a location value - City, zip code, etc... The second portion is a unique ID for the resource. This allows for `begins_with` range expressions to further group data by location for a tenant (Valley Saver has Columbus and Auburn clients, and only one set of results should be returned based on which location to which the user is nearest.)
  - See https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/

### Authorization Policy

Two classifications of authorization policies exist: public-based and tenant-based. 

#### Public Authorization Policy
To limit unexpected access to the API, public authorization is limited to an IAM user with information that will be loaded in the apps themselves. This will limit intentional or unintentional denial of service attacks from alternate sources. 

- Policy:
  - GET resources of all tenants: ALLOW
  - MODIFY resources of all tenants: DENY
  - GET shared resources: ALLOW
  - MODIFY shared resources: DENY

#### Tenant Authorization Policy
Since tenant's data is shared in tables, record-level Attribute Based Access Control (ABAC) policies are used to restrict a tenant's access to only information they.

- Policy 
  - GET resources of tenant (via either tag or tenant UUID check): ALLOW
  - GET resources of other tenants: DENY
  - MODIFY resources of tenant: ALLOW
  - MODIFY resoruces of other tenants: DENY
  - GET shared resources: ALLOW
  - MODIFY shared resources: DENY

#### Resources
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys

https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_rows.html

https://docs.amazonaws.cn/en_us/IAM/latest/UserGuide/list_amazondynamodb.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/api-permissions-reference.html

https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/




### Inactive Records
Need a plan around storing inactive records, as filtering these out in production queries is more costly. E.g. just having a boolean 'inactive' column is not sufficient. 

## Access
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html

Grant permissions based on the leading key (dynamodb:LeadingKeys) 


The API uses a tag 

- Single instance tables using DyanamoDB
- Restrict access using an IAM ID as the sort key and add policy restrictions for the specific operations
- IAM for public access (through app) and an IAM for each tenent
- Public Access (assume deny):
  - GET (everything): ALLOW
- Tenent-specific access:
  - GET (Categories): ALLOW
  - GET (Customers with 