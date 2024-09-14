type Option = {
  label: string;
  value: string;
};

type Site = {
  name: string;
  parentName: string;
  vsaId: number;
  parentVSAId: number;
  autoTaskId: number;
  sophosTenantId: string;
}

// =============== AutoTask ===============

type AutoTaskTicket = {
  id: number;
  apiVendorID: number;
  assignedResourceID: number;
  assignedResourceRoleID: number;
  billingCodeID: number;
  changeApprovalBoard: number;
  changeApprovalStatus: number;
  changeApprovalType: number;
  changeInfoField1: string;
  changeInfoField2: string;
  changeInfoField3: string;
  changeInfoField4: string;
  changeInfoField5: string;
  companyID: number;
  companyLocationID: number;
  completedByResourceID: number;
  completedDate: string;
  configurationItemID: number;
  contactID: number;
  contractID: number;
  contractServiceBundleID: number;
  contractServiceID: number;
  createDate: string;
  createdByContactID: number;
  creatorResourceID: number;
  creatorType: number;
  currentServiceThermometerRating: number;
  description: string;
  dueDateTime: string;
  estimatedHours: number;
  externalID: string;
  firstResponseAssignedResourceID: number;
  firstResponseDateTime: string;
  firstResponseDueDateTime: string;
  firstResponseInitiatingResourceID: number;
  hoursToBeScheduled: number;
  impersonatorCreatorResourceID: number;
  isAssignedToComanaged: boolean;
  issueType: number;
  isVisibleToComanaged: boolean;
  lastActivityDate: string;
  lastActivityPersonType: number;
  lastActivityResourceID: number;
  lastCustomerNotificationDateTime: string;
  lastCustomerVisibleActivityDateTime: string;
  lastTrackedModificationDateTime: string;
  monitorID: number;
  monitorTypeID: number;
  opportunityID: number;
  organizationalLevelAssociationID: number;
  previousServiceThermometerRating: number;
  priority: number;
  problemTicketId: number;
  projectID: number;
  purchaseOrderNumber: string;
  queueID: number;
  resolution: string;
  resolutionPlanDateTime: string;
  resolutionPlanDueDateTime: string;
  resolvedDateTime: string;
  resolvedDueDateTime: string;
  rmaStatus: number;
  rmaType: number;
  rmmAlertID: string;
  serviceLevelAgreementHasBeenMet: boolean;
  serviceLevelAgreementID: number;
  serviceLevelAgreementPausedNextEventHours: number;
  serviceThermometerTemperature: number;
  source: number;
  status: number;
  subIssueType: number;
  ticketCategory: number;
  ticketNumber: string;
  ticketType: number;
  title: string;
  userDefinedFields: {
    name: string;
    value: string;
  }[];
}

type AutoTaskCompany = {
  id: number;
  additionalAddressInformation: string;
  address1: string;
  address2: string;
  alternatePhone1: string;
  alternatePhone2: string;
  apiVendorID: number | null;
  assetValue: number | null;
  billToCompanyLocationID: number | null;
  billToAdditionalAddressInformation: string;
  billingAddress1: string;
  billingAddress2: string;
  billToAddressToUse: number;
  billToAttention: string;
  billToCity: string;
  billToCountryID: number;
  billToState: string;
  billToZipCode: string;
  city: string;
  classification: number | null;
  companyCategoryID: number;
  companyName: string;
  companyNumber: string;
  companyType: number;
  competitorID: number;
  countryID: number;
  createDate: string;
  createdByResourceID: number;
  currencyID: number;
  fax: string;
  impersonatorCreatorResourceID: number | null;
  invoiceEmailMessageID: number;
  invoiceMethod: number;
  invoiceNonContractItemsToParentCompany: boolean;
  invoiceTemplateID: number;
  isActive: boolean;
  isClientPortalActive: boolean;
  isEnabledForComanaged: boolean;
  isTaskFireActive: boolean;
  isTaxExempt: boolean;
  lastActivityDate: string;
  lastTrackedModifiedDateTime: string;
  marketSegmentID: number;
  ownerResourceID: number;
  parentCompanyID: number | null;
  phone: string;
  postalCode: string;
  purchaseOrderTemplateID: number | null;
  quoteEmailMessageID: number;
  quoteTemplateID: number;
  sicCode: string;
  state: string;
  stockMarket: string;
  stockSymbol: string;
  surveyCompanyRating: number | null;
  taxID: string;
  taxRegionID: number;
  territoryID: number;
  webAddress: string | null;
  userDefinedFields: {
    name: string;
    value: string;
  }[];
};

type AutoTaskFieldInfo = {
  name: string;
  dataType: string;
  length: number;
  isRequired: boolean;
  isReadOnly: boolean;
  isQueryable: boolean;
  isReference: boolean;
  referenceEntityType: string;
  isPickList: boolean;
  picklistValues: AutoTaskFieldValue[];
  picklistParentValueField: string;
  isSupportedWebhookField: boolean;
}

type AutoTaskFieldValue = {
  value: string;
  label: string;
  isDefaultValue: boolean;
  sortOrder: number;
  parentValue: string;
  isActive: boolean;
  isSystem: boolean;
}