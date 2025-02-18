type Option = {
  label: string;
  value: string;
};

type URLParams = {
  params: {
    [key: string]: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

// =============== DATABASE ===============
type UserDocument = {
  userId: string;
  ticketViews: string[];
}

// =============== AutoTask ===============

type AutoTaskUDF = {
  name: string;
  value: string;
}

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
  userDefinedFields: AutoTaskUDF[];
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
  userDefinedFields: AutoTaskUDF[];
};

type AutoTaskCompanyLocation = {
  id: number;
  address1: string;
  address2: string;
  alternatePhone1: string;
  alternatePhone2: string;
  city: string;
  companyID: number;
  countryID: number;
  description: string;
  fax: string;
  isActive: boolean;
  isPrimary: boolean;
  isTaxExempt: boolean;
  overrideCompanyTaxSettings: boolean;
  name: string;
  phone: string;
  postalCode: string;
  roundtripDistance: number;
  state: string;
  taxRegionID: number;
  userDefinedFields: AutoTaskUDF[];
}

type AutoTaskCompanyConfigurations = {
  id: number;
  companyID: number;
  locationName: string;
  userDefinedFields: AutoTaskUDF[];
}

type AutoTaskContact = {
  id: number;
  additionalAddressInformation: string;
  addressLine: string;
  addressLine1: string;
  alternatePhone: string;
  apiVendorID: number | null;
  bulkEmailOptOutTime: string | null;
  city: string;
  companyID: number;
  companyLocationID: number;
  countryID: number;
  createDate: string;
  emailAddress: string;
  emailAddress2: string | null;
  emailAddress3: string | null;
  extension: string;
  externalID: string;
  facebookUrl: string;
  faxNumber: string;
  firstName: string;
  impersonatorCreatorResourceID: number | null;
  isActive: boolean;
  isOptedOutFromBulkEmail: boolean;
  lastActivityDate: string;
  lastModifiedDate: string;
  lastName: string;
  linkedInUrl: string;
  middleInitial: string | null;
  mobilePhone: string;
  namePrefix: string | null;
  nameSuffix: string | null;
  note: string;
  receivesEmailNotifications: boolean;
  phone: string;
  primaryContact: boolean;
  roomNumber: string;
  solicitationOptOut: boolean;
  solicitationOptOutTime: string | null;
  state: string;
  surveyOptOut: boolean;
  title: string;
  twitterUrl: string;
  zipCode: string;
  userDefinedFields: AutoTaskUDF[];
}

type AutoTaskResource = {
  id: number;
  accountingReferenceID: string;
  dateFormat: string;
  defaultServiceDeskRoleID: number | null;
  email: string;
  email2: string;
  email3: string;
  emailTypeCode: string;
  emailTypeCode2: string | null;
  emailTypeCode3: string | null;
  firstName: string;
  gender: string | null;
  greeting: string | null;
  hireDate: string;
  homePhone: string;
  initials: string;
  internalCost: number;
  isActive: boolean;
  lastName: string;
  licenseType: number;
  locationID: number;
  middleName: string;
  mobilePhone: string;
  numberFormat: string;
  officeExtension: string;
  officePhone: string;
  payrollIdentifier: string;
  payrollType: number;
  resourceType: string;
  suffix: string | null;
  surveyResourceRating: number | null;
  timeFormat: string;
  title: string;
  travelAvailabilityPct: number | null;
  userName: string;
  userType: number;
}

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

type TicketParams = {
  includeCompleted?: boolean;
  ticketNumber?: string;
  title?: string;
  companyID?: number[];
  queueID?: number[];
  assignedResourceID?: number[];
  status?: number[];
  priority?: number[];
  lastActivityDate?: Date;
}

// =============== VSAX ===============

type VSAXSite = {
  Id: number;
  Name: string;
  ParentId: number;
  ParentName: string;
  PsaMappingId: number;
  PsaIntegrationType: string;
  HasCustomFields: boolean;
  sophosTenantId?: string;
}

type VSAXDevice = {
  Identifier: string;
  Name: string;
  GroupName: string;
  Description: string;
  Tags: string[];
  Type: string;
  ClientVersion: string;
  LastSeenOnline: string;
  ExternalUrl: string;
  CpuUsage: number;
  MemoryUsage: number;
  MemoryTotal: number;
  FirewallEnabled: boolean;
  AntivirusEnabled: string;
  AntivirusUpToDate: string;
  UacEnabled: boolean;
  EventLogs: any;
  Updates: {
    Critical: number;
    Important: number;
    Unspecified: number;
  };
  AssetInfo: any[];
  PublicIpAddress: string;
  IpAddresses: any[];
  Disks: any[];
  InstalledSoftware: any[];
  ComputerId: number;
  OrganizationId: number;
  SiteId: number;
  LocalIpAddresses: {
    Name: string;
    PhysicalAddress: string;
    DhcpEnabled: boolean;
    Gateways: string[];
    DnsServers: string[];
    SubnetMask: string;
    IpV4: string;
    IpV6: string;
  }[];
}

// =============== Sophos ===============

type SophosDevice = {
  id: string;
  type: string;
  tenant: {
    id: string;
  };
  hostname: string;
  health: {
    overall: string;
    threats: any;
    services: any;
  };
  os: {
    isServer: boolean;
    platform: string;
    name: string;
    majorVersion: number;
    minorVersion: number;
    build: number;
  };
  ipv4Addresses: string[];
  macAddresses: string[];
  associatedPerson: {
    name: string;
    viaLogin: string;
    id: string;
  };
  tamperProtectionEnabled: boolean;
  assignedProducts: any[];
  lastSeenAt: string;
  isolation: {
    status: string;
    adminIsolated: boolean;
    selfIsolated: boolean;
  };
}