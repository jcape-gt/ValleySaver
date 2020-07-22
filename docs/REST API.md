# REST API

Seems like their should be 2 APIs; One for public access for the apps, and one for clients to access in their management applications.
- Maybe this could be where the keys come in. The app has a key for all viewing and accessing, and the individual management apps have keys associated with the users, so they only see the data they own.ca

## Architecture
- API Gateway REST API
- Backend lambda functions for database access

## Todo
- Enable request valiation for models
  - May have to use custom validation, as POST shouldn't include the model's primary key (id)

## Authorization

### Example Auth Flows
- User preforming GET request on any resource: ALLOW
- Client performing GET request on any resource: ALLOW
- Client performing a modify request on resource they own: ALLOW
- Client performing a modify request on resource they don't own: DENY
- Client performing a GET request on resource they don't own: DENY
- Client performing a GET request on resource they do own: ALLOW



## Endpoints

### Clients
This will be internal, most likely. Might provide a way for clients to update their information.
```
/clients/
  - GET
    - Params
      - filterEnabled=[true|false]
```

### Categorys
List of categories
```
/categories/
  - GET
    - Params
      - clientID=[client_id]
      - filterActive=[true|false]
```

Individual Category
- Note: Maybe don't allow customers to manage their own categories
```
/categories/[category_id]
  - GET
    - Params
      - clientID=[client_id]
  - PUT
    - Auth
      - IAM 
    - Data
      [Category]
  - UPDATE
    - Auth
      - IAM 
    - Data
      [Category]
  - DELETE
    - Auth
      - IAM 
```

### Customers
List of customers
```
/customers/
  - GET
    - Params
      - clientID=[client_id]
      - filterActive=[true|false] - With active deals
      - filterEnabled=[true|false] - Current customers
```

Individual customer
```
/customers/[customer_id]
  - GET
  - PUT
    - Auth
      - IAM 
    - Data
      [Customer]
  - UPDATE
    - Auth
      - IAM 
    - Data
      [Customer]
  - DELETE
    - Auth
      - IAM 
```

### Deals
List of deals
```
/deals/
  - GET
    - Params
      - clientID=[client_id]
      - categoryID=[category_id]
      - filterActive=[true|false]
```

Individual Deal
```
/deals/[deal_id]
  - GET
  - PUT
    - Auth
      - IAM 
    - Data
      [Deal]
  - UPDATE
    - Auth
      - IAM 
    - Data
      [Deal]
  - DELETE
    - Auth
      - IAM 
```

## Authentication
