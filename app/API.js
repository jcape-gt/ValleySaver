/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {|
  id?: ?string,
  name: string,
  order: number,
  description: string,
|};

export type ModelCategoryConditionInput = {|
  name?: ?ModelStringInput,
  order?: ?ModelIntInput,
  description?: ?ModelStringInput,
  and?: ?Array< ?ModelCategoryConditionInput >,
  or?: ?Array< ?ModelCategoryConditionInput >,
  not?: ?ModelCategoryConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelIntInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type UpdateCategoryInput = {|
  id: string,
  name?: ?string,
  order?: ?number,
  description?: ?string,
|};

export type DeleteCategoryInput = {|
  id?: ?string,
|};

export type CreateCategoryDisplayInput = {|
  id?: ?string,
  categoryID: string,
  order: number,
  icon: string,
|};

export type ModelCategoryDisplayConditionInput = {|
  categoryID?: ?ModelIDInput,
  order?: ?ModelIntInput,
  icon?: ?ModelStringInput,
  and?: ?Array< ?ModelCategoryDisplayConditionInput >,
  or?: ?Array< ?ModelCategoryDisplayConditionInput >,
  not?: ?ModelCategoryDisplayConditionInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type UpdateCategoryDisplayInput = {|
  id: string,
  categoryID?: ?string,
  order?: ?number,
  icon?: ?string,
|};

export type DeleteCategoryDisplayInput = {|
  id?: ?string,
|};

export type CreateDealInput = {|
  id?: ?string,
  title: string,
  categoryID: string,
  customerID: string,
  startDateTime: any,
  endDateTime: any,
|};

export type ModelDealConditionInput = {|
  title?: ?ModelStringInput,
  categoryID?: ?ModelIDInput,
  customerID?: ?ModelIDInput,
  startDateTime?: ?ModelStringInput,
  endDateTime?: ?ModelStringInput,
  and?: ?Array< ?ModelDealConditionInput >,
  or?: ?Array< ?ModelDealConditionInput >,
  not?: ?ModelDealConditionInput,
|};

export type UpdateDealInput = {|
  id: string,
  title?: ?string,
  categoryID?: ?string,
  customerID?: ?string,
  startDateTime?: ?any,
  endDateTime?: ?any,
|};

export type DeleteDealInput = {|
  id?: ?string,
|};

export type CreateCustomerInput = {|
  id?: ?string,
  name: string,
  address: string,
|};

export type ModelCustomerConditionInput = {|
  name?: ?ModelStringInput,
  address?: ?ModelStringInput,
  and?: ?Array< ?ModelCustomerConditionInput >,
  or?: ?Array< ?ModelCustomerConditionInput >,
  not?: ?ModelCustomerConditionInput,
|};

export type UpdateCustomerInput = {|
  id: string,
  name?: ?string,
  address?: ?string,
|};

export type DeleteCustomerInput = {|
  id?: ?string,
|};

export type ModelCategoryFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  order?: ?ModelIntInput,
  description?: ?ModelStringInput,
  and?: ?Array< ?ModelCategoryFilterInput >,
  or?: ?Array< ?ModelCategoryFilterInput >,
  not?: ?ModelCategoryFilterInput,
|};

export type ModelCategoryDisplayFilterInput = {|
  id?: ?ModelIDInput,
  categoryID?: ?ModelIDInput,
  order?: ?ModelIntInput,
  icon?: ?ModelStringInput,
  and?: ?Array< ?ModelCategoryDisplayFilterInput >,
  or?: ?Array< ?ModelCategoryDisplayFilterInput >,
  not?: ?ModelCategoryDisplayFilterInput,
|};

export type ModelDealFilterInput = {|
  id?: ?ModelIDInput,
  title?: ?ModelStringInput,
  categoryID?: ?ModelIDInput,
  customerID?: ?ModelIDInput,
  startDateTime?: ?ModelStringInput,
  endDateTime?: ?ModelStringInput,
  and?: ?Array< ?ModelDealFilterInput >,
  or?: ?Array< ?ModelDealFilterInput >,
  not?: ?ModelDealFilterInput,
|};

export type ModelCustomerFilterInput = {|
  id?: ?ModelIDInput,
  name?: ?ModelStringInput,
  address?: ?ModelStringInput,
  and?: ?Array< ?ModelCustomerFilterInput >,
  or?: ?Array< ?ModelCustomerFilterInput >,
  not?: ?ModelCustomerFilterInput,
|};

export type CreateCategoryMutationVariables = {|
  input: CreateCategoryInput,
  condition?: ?ModelCategoryConditionInput,
|};

export type CreateCategoryMutation = {|
  createCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateCategoryMutationVariables = {|
  input: UpdateCategoryInput,
  condition?: ?ModelCategoryConditionInput,
|};

export type UpdateCategoryMutation = {|
  updateCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteCategoryMutationVariables = {|
  input: DeleteCategoryInput,
  condition?: ?ModelCategoryConditionInput,
|};

export type DeleteCategoryMutation = {|
  deleteCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateCategoryDisplayMutationVariables = {|
  input: CreateCategoryDisplayInput,
  condition?: ?ModelCategoryDisplayConditionInput,
|};

export type CreateCategoryDisplayMutation = {|
  createCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateCategoryDisplayMutationVariables = {|
  input: UpdateCategoryDisplayInput,
  condition?: ?ModelCategoryDisplayConditionInput,
|};

export type UpdateCategoryDisplayMutation = {|
  updateCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteCategoryDisplayMutationVariables = {|
  input: DeleteCategoryDisplayInput,
  condition?: ?ModelCategoryDisplayConditionInput,
|};

export type DeleteCategoryDisplayMutation = {|
  deleteCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateDealMutationVariables = {|
  input: CreateDealInput,
  condition?: ?ModelDealConditionInput,
|};

export type CreateDealMutation = {|
  createDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateDealMutationVariables = {|
  input: UpdateDealInput,
  condition?: ?ModelDealConditionInput,
|};

export type UpdateDealMutation = {|
  updateDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteDealMutationVariables = {|
  input: DeleteDealInput,
  condition?: ?ModelDealConditionInput,
|};

export type DeleteDealMutation = {|
  deleteDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateCustomerMutationVariables = {|
  input: CreateCustomerInput,
  condition?: ?ModelCustomerConditionInput,
|};

export type CreateCustomerMutation = {|
  createCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateCustomerMutationVariables = {|
  input: UpdateCustomerInput,
  condition?: ?ModelCustomerConditionInput,
|};

export type UpdateCustomerMutation = {|
  updateCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteCustomerMutationVariables = {|
  input: DeleteCustomerInput,
  condition?: ?ModelCustomerConditionInput,
|};

export type DeleteCustomerMutation = {|
  deleteCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetCategoryQueryVariables = {|
  id: string,
|};

export type GetCategoryQuery = {|
  getCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListCategorysQueryVariables = {|
  filter?: ?ModelCategoryFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCategorysQuery = {|
  listCategorys: ? {|
    __typename: "ModelCategoryConnection",
    items: ? Array<? {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCategoryDisplayQueryVariables = {|
  id: string,
|};

export type GetCategoryDisplayQuery = {|
  getCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListCategoryDisplaysQueryVariables = {|
  filter?: ?ModelCategoryDisplayFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCategoryDisplaysQuery = {|
  listCategoryDisplays: ? {|
    __typename: "ModelCategoryDisplayConnection",
    items: ? Array<? {|
      __typename: "CategoryDisplay",
      id: string,
      categoryID: string,
      category: {|
        __typename: "Category",
        id: string,
        name: string,
        order: number,
        description: string,
        createdAt: any,
        updatedAt: any,
      |},
      order: number,
      icon: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetDealQueryVariables = {|
  id: string,
|};

export type GetDealQuery = {|
  getDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListDealsQueryVariables = {|
  filter?: ?ModelDealFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListDealsQuery = {|
  listDeals: ? {|
    __typename: "ModelDealConnection",
    items: ? Array<? {|
      __typename: "Deal",
      id: string,
      title: string,
      categoryID: string,
      category: {|
        __typename: "Category",
        id: string,
        name: string,
        order: number,
        description: string,
        createdAt: any,
        updatedAt: any,
      |},
      customerID: string,
      customer: {|
        __typename: "Customer",
        id: string,
        name: string,
        address: string,
        createdAt: any,
        updatedAt: any,
      |},
      startDateTime: any,
      endDateTime: any,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCustomerQueryVariables = {|
  id: string,
|};

export type GetCustomerQuery = {|
  getCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListCustomersQueryVariables = {|
  filter?: ?ModelCustomerFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCustomersQuery = {|
  listCustomers: ? {|
    __typename: "ModelCustomerConnection",
    items: ? Array<? {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateCategorySubscription = {|
  onCreateCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateCategorySubscription = {|
  onUpdateCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteCategorySubscription = {|
  onDeleteCategory: ? {|
    __typename: "Category",
    id: string,
    name: string,
    order: number,
    description: string,
    deals: ? {|
      __typename: "ModelDealConnection",
      items: ? Array<? {|
        __typename: "Deal",
        id: string,
        title: string,
        categoryID: string,
        customerID: string,
        startDateTime: any,
        endDateTime: any,
        createdAt: any,
        updatedAt: any,
      |} >,
      nextToken: ?string,
    |},
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateCategoryDisplaySubscription = {|
  onCreateCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateCategoryDisplaySubscription = {|
  onUpdateCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteCategoryDisplaySubscription = {|
  onDeleteCategoryDisplay: ? {|
    __typename: "CategoryDisplay",
    id: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    order: number,
    icon: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateDealSubscription = {|
  onCreateDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateDealSubscription = {|
  onUpdateDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteDealSubscription = {|
  onDeleteDeal: ? {|
    __typename: "Deal",
    id: string,
    title: string,
    categoryID: string,
    category: {|
      __typename: "Category",
      id: string,
      name: string,
      order: number,
      description: string,
      deals: ? {|
        __typename: "ModelDealConnection",
        nextToken: ?string,
      |},
      createdAt: any,
      updatedAt: any,
    |},
    customerID: string,
    customer: {|
      __typename: "Customer",
      id: string,
      name: string,
      address: string,
      createdAt: any,
      updatedAt: any,
    |},
    startDateTime: any,
    endDateTime: any,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateCustomerSubscription = {|
  onCreateCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateCustomerSubscription = {|
  onUpdateCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteCustomerSubscription = {|
  onDeleteCustomer: ? {|
    __typename: "Customer",
    id: string,
    name: string,
    address: string,
    createdAt: any,
    updatedAt: any,
  |},
|};