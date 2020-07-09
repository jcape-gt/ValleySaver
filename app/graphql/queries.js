// @flow
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      order
      description
      deals {
        items {
          id
          title
          categoryID
          customerID
          startDateTime
          endDateTime
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        order
        description
        deals {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategoryDisplay = /* GraphQL */ `
  query GetCategoryDisplay($id: ID!) {
    getCategoryDisplay(id: $id) {
      id
      categoryID
      category {
        id
        name
        order
        description
        deals {
          nextToken
        }
        createdAt
        updatedAt
      }
      order
      icon
      createdAt
      updatedAt
    }
  }
`;
export const listCategoryDisplays = /* GraphQL */ `
  query ListCategoryDisplays(
    $filter: ModelCategoryDisplayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryDisplays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryID
        category {
          id
          name
          order
          description
          createdAt
          updatedAt
        }
        order
        icon
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeal = /* GraphQL */ `
  query GetDeal($id: ID!) {
    getDeal(id: $id) {
      id
      title
      categoryID
      category {
        id
        name
        order
        description
        deals {
          nextToken
        }
        createdAt
        updatedAt
      }
      customerID
      customer {
        id
        name
        address
        createdAt
        updatedAt
      }
      startDateTime
      endDateTime
      createdAt
      updatedAt
    }
  }
`;
export const listDeals = /* GraphQL */ `
  query ListDeals(
    $filter: ModelDealFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        categoryID
        category {
          id
          name
          order
          description
          createdAt
          updatedAt
        }
        customerID
        customer {
          id
          name
          address
          createdAt
          updatedAt
        }
        startDateTime
        endDateTime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
