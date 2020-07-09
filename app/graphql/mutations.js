// @flow
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createCategoryDisplay = /* GraphQL */ `
  mutation CreateCategoryDisplay(
    $input: CreateCategoryDisplayInput!
    $condition: ModelCategoryDisplayConditionInput
  ) {
    createCategoryDisplay(input: $input, condition: $condition) {
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
export const updateCategoryDisplay = /* GraphQL */ `
  mutation UpdateCategoryDisplay(
    $input: UpdateCategoryDisplayInput!
    $condition: ModelCategoryDisplayConditionInput
  ) {
    updateCategoryDisplay(input: $input, condition: $condition) {
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
export const deleteCategoryDisplay = /* GraphQL */ `
  mutation DeleteCategoryDisplay(
    $input: DeleteCategoryDisplayInput!
    $condition: ModelCategoryDisplayConditionInput
  ) {
    deleteCategoryDisplay(input: $input, condition: $condition) {
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
export const createDeal = /* GraphQL */ `
  mutation CreateDeal(
    $input: CreateDealInput!
    $condition: ModelDealConditionInput
  ) {
    createDeal(input: $input, condition: $condition) {
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
export const updateDeal = /* GraphQL */ `
  mutation UpdateDeal(
    $input: UpdateDealInput!
    $condition: ModelDealConditionInput
  ) {
    updateDeal(input: $input, condition: $condition) {
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
export const deleteDeal = /* GraphQL */ `
  mutation DeleteDeal(
    $input: DeleteDealInput!
    $condition: ModelDealConditionInput
  ) {
    deleteDeal(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
