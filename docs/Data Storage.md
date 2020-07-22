# Data Storage

## Datastore
DynamoDB will be used as a datastore. The reasoning is as follows:
- Cheaper than RDS tables
- Partition and sort keys provide simple authorization policy checks for tenant-based access 

### Partition and Sort Keys
A partition key logically groups records into a partition. The sort key then allows for finer-grained access; identifying a smaller number or unique records within that partition. 

Using the tenant's identify information as a sort key will reduce latency and cost usage, since each tenant's associated app should only pull in resources for that tenant. Similarly, each tenant can only access and modify their own resources. 

The key portion of a schema associated with a table which contains tenant-specific data is as follows:
- The partition key is a tag associated with the tenant's IAM
  - The reasoning for not directly using identity information associated with the IAM (such as UUID) is that it would require IAM identity information be loaded directly into the client's app itself. Additionally, if a client requires additional IAMs, or needs a new IAM, the tag can be added directly to those IAMs, and the app won't require an update with the new UUID added. 
- The sort key is a unique identifier for the record in the context of the entire table. 
- Possibly use a composite sort key with territory-specific information
  - The first portion of the key is a location value - City, zip code, etc... The second portion is a unique ID for the resource. This allows for `begins_with` range expressions to further group data by location for a tenant (Valley Saver has Columbus and Auburn clients, and only one set of results should be returned based on which location to which the user is nearest.)
  - See https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/

## Security

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

## Resources
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html#FGAC_DDB.ConditionKeys

https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html

https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_rows.html

https://docs.amazonaws.cn/en_us/IAM/latest/UserGuide/list_amazondynamodb.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/specifying-conditions.html

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/api-permissions-reference.html

https://aws.amazon.com/blogs/database/using-sort-keys-to-organize-data-in-amazon-dynamodb/