// @flow
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateCategoryDisplay = /* GraphQL */ `
  subscription OnCreateCategoryDisplay {
    onCreateCategoryDisplay {
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
export const onUpdateCategoryDisplay = /* GraphQL */ `
  subscription OnUpdateCategoryDisplay {
    onUpdateCategoryDisplay {
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
export const onDeleteCategoryDisplay = /* GraphQL */ `
  subscription OnDeleteCategoryDisplay {
    onDeleteCategoryDisplay {
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
export const onCreateDeal = /* GraphQL */ `
  subscription OnCreateDeal {
    onCreateDeal {
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
export const onUpdateDeal = /* GraphQL */ `
  subscription OnUpdateDeal {
    onUpdateDeal {
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
export const onDeleteDeal = /* GraphQL */ `
  subscription OnDeleteDeal {
    onDeleteDeal {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
      id
      name
      address
      createdAt
      updatedAt
    }
  }
`;
