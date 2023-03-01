import React, { useState, useEffect } from "react";
import BankDetails from "./BankDetails";
import CompanyInformation from "./CompanyInformation";
import CompanyStructure from "./CompanyStructure";
import ShareHolders from "./ShareHolders";
import CompanyContactDetail from "./CompanyContactDetail";
import TradeReference from "./TradeReference";
import UploadKYC from "./UploadKYC";
import SubmitButton from "./SubmitButton";
const AllForm = () => {


  const [companyInfo, setCompanyInfo] = useState({
    RegisteredCompanyName: "",
    CorporateDomainName: "",
    ParentCompany: "",
    EmailAddress: "",
    CompanyWebsite: "",
    CompanyRegisteredAddress: "",
    compnayMobileNo: "",
    BusinessStructure: "",
    NatureOfBusiness: "",
    CountryOfIncorporation: "",
    CompanyRegistrationNum: "",
    TradeLicenseExpiryDate: "",
    OtherStructure: "",
    OtherBusiness: "",
    DateOfIncorporation: "",
    TradeLicenseNum: "",
    VatTba: "",
    BankName: "",
    BankBranchAddress: "",
    AccountName: "",
    AccountNumber: "",
    BankManagerName: "",
    CorospondentBankName: "",
    BankCountry: "",
    SwiftCode: "",
    AccountCurrency: "",
    IBANaba: "",
    BankManagerContactDetails: "",
    CorrospondentBankSwiftCode: "",
    shareHolders1: "",
    shareHolders1per: "",
    shareHolders1Nation: "",
    shareHolders2: "",
    shareHolders2per: "",
    shareHolders2Nation: "",
    shareHolders3: "",
    shareHolders3per: "",
    shareHolders3Nation: "",
    shareHolders4: "",
    shareHolders4per: "",
    shareHolders4Nation: "",
    primaryName: "",
    primaryDesignation: "",
    primaryPhone: "",
    primaryEmail: "",
    operationDeptName: "",
    operationDeptDesignation: "",
    operationDeptPhone: "",
    operationDeptEmail: "",
    financeContactName: "",
    financeContactDesignation: "",
    financeContactNum: "",
    financeContactEmail: "",
    accountDptName: "",
    accountDptDesignation: "",
    accountDptPhone: "",
    accountDptEmail: "",
    proposedBusiness: "",
    contactPersonAtAdamEnergy: "",
    TradeReference1: "",
    TradeReference1Contact: "",
    TradeReference2: "",
    TradeReference2Contact: "",
    TradeReference3: "",
    TradeReference3Contact: "",
    TradeReference4: "",
    TradeReference4Contact: "",
    checkbox: ""
    
  });
  const [errors, setErrors] = useState({});
  const [Issubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const Inputvalue = e.target.value;
     console.log(Inputvalue);
    const InputName = e.target.name;

    const newInputValue = { ...companyInfo, [InputName]: Inputvalue };
    setCompanyInfo(newInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(companyInfo).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      //  console.log(companyInfo);
    }
    setErrors(validate(companyInfo));
    setIsSubmit(true);
    // {Object.keys(errors).length === 0 && Issubmit ?
  };

  useEffect(() => {
    // console.log(errors);
    if (Object.keys(errors).length === 0 && Issubmit) {
      console.log(companyInfo);
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!values.RegisteredCompanyName) {
      errors.RegisteredCompanyName = "Required";
    }
    if (!values.EmailAddress) {
      errors.EmailAddress = "Required";
    } else if (!regex.test(values.EmailAddress)) {
      errors.EmailAddress = "Enter a valid Email";
    }
    if (!values.ParentCompany) {
      errors.ParentCompany = "Required";
    }
    if (!values.CorporateDomainName) {
      errors.CorporateDomainName = "Required";
    }
    if (!values.CompanyWebsite) {
      errors.CompanyWebsite = "Required";
    }
    if (!values.CompanyRegisteredAddress) {
      errors.CompanyRegisteredAddress = "Required";
    }
    if (!values.BusinessStructure) {
      errors.BusinessStructure = "Required";
    }
    if (!values.NatureOfBusiness) {
      errors.NatureOfBusiness = "Required";
    }
    if (!values.CountryOfIncorporation) {
      errors.CountryOfIncorporation = "Required";
    }
    if (!values.CompanyRegistrationNum) {
      errors.CompanyRegistrationNum = "Required";
    }
    if (!values.TradeLicenseExpiryDate) {
      errors.TradeLicenseExpiryDate = "Required";
    }
    if (!values.OtherStructure) {
      errors.OtherStructure = "Required";
    }
    if (!values.OtherBusiness) {
      errors.OtherBusiness = "Required";
    }
    if (!values.DateOfIncorporation) {
      errors.DateOfIncorporation = "Required";
    }
    if (!values.TradeLicenseNum) {
      errors.TradeLicenseNum = "Required";
    }
    if (!values.VatTba) {
      errors.VatTba = "Required";
    }
    if (!values.BankName) {
      errors.BankName = "Required";
    }
    if (!values.BankBranchAddress) {
      errors.BankBranchAddress = "Required";
    }
    if (!values.AccountName) {
      errors.AccountName = "Required";
    }
    if (!values.AccountNumber) {
      errors.AccountNumber = "Required";
    }
    if (!values.BankManagerName) {
      errors.BankManagerName = "Required";
    }
    if (!values.CorospondentBankName) {
      errors.CorospondentBankName = "Required";
    }
    if (!values.BankCountry) {
      errors.BankCountry = "Required";
    }
    if (!values.SwiftCode) {
      errors.SwiftCode = "Required";
    }
    if (!values.AccountCurrency) {
      errors.AccountCurrency = "Required";
    }
    if (!values.IBANaba) {
      errors.IBANaba = "Required";
    }
    if (!values.BankManagerContactDetails) {
      errors.BankManagerContactDetails = "Required";
    }
    if (!values.CorrospondentBankSwiftCode) {
      errors.CorrospondentBankSwiftCode = "Required";
    }
    if (!values.shareHolders1) {
      errors.shareHolders1 = "Required";
    }
    if (!values.shareHolders1per) {
      errors.shareHolders1per = "Invalid";
    } else if(values.shareHolders1per.length > 2){
      errors.shareHolders1per = "Invalid"
    }
    if (!values.shareHolders1Nation) {
      errors.shareHolders1Nation = "Required";
    }
    if (!values.primaryName) {
      errors.primaryName = "Required";
    }
    if (!values.primaryDesignation) {
      errors.primaryDesignation = "Required";
    }
    if (!values.primaryPhone) {
      errors.primaryPhone = "Required";
    }
    if (!values.primaryEmail) {
      errors.primaryEmail = "Required";
    } else if (!regex.test(values.primaryEmail)) {
      errors.primaryEmail = "Enter a valid Email";
    }
    if (!values.operationDeptName) {
      errors.operationDeptName = "Required";
    }
    if (!values.operationDeptDesignation) {
      errors.operationDeptDesignation = "Required";
    }
    if (!values.operationDeptPhone) {
      errors.operationDeptPhone = "Required";
    }
    if (!values.operationDeptEmail) {
      errors.operationDeptEmail = "Required";
    } else if (!regex.test(values.operationDeptEmail)) {
      errors.operationDeptEmail = "Enter a valid Email";
    }
    if (!values.financeContactName) {
      errors.financeContactName = "Required";
    }
    if (!values.financeContactDesignation) {
      errors.financeContactDesignation = "Required";
    }
    if (!values.financeContactNum) {
      errors.financeContactNum = "Required";
    }
    if (!values.financeContactEmail) {
      errors.financeContactEmail = "Required";
    } else if (!regex.test(values.financeContactEmail)) {
      errors.financeContactEmail = "Enter a valid Email";
    }
    if (!values.accountDptName) {
      errors.accountDptName = "Required";
    }
    if (!values.accountDptDesignation) {
      errors.accountDptDesignation = "Required";
    }
    if (!values.accountDptPhone) {
      errors.accountDptPhone = "Required";
    }
    if (!values.accountDptEmail) {
      errors.accountDptEmail = "Required";
    } else if (!regex.test(values.accountDptEmail)) {
      errors.accountDptEmail = "Enter a valid Email";
    }
    if (!values.proposedBusiness) {
      errors.proposedBusiness = "Required";
    }
    if (!values.contactPersonAtAdamEnergy) {
      errors.contactPersonAtAdamEnergy = "Required";
    }
    if(!values.TradeReference1){
      errors.TradeReference1 = "Required"
    }
    if(!values.TradeReference1Contact){
      errors.TradeReference1Contact = "Required"
    }
    if(!values.TradeReference2){
      errors.TradeReference2 = "Required"
    }
    if(!values.TradeReference2Contact){
      errors.TradeReference2Contact = "Required"
    }
   
   

    return errors;
  };

  return (
    <>
      <form >
        <CompanyInformation
          RegisteredCompanyName={companyInfo.RegisteredCompanyName}
          RegisteredCompanyNameError={errors.RegisteredCompanyName}
          CorporateDomainName={companyInfo.CorporateDomainName}
          CorporateDomainNameError={errors.CorporateDomainName}
          ParentCompany={companyInfo.ParentCompany}
          ParentCompanyError={errors.ParentCompany}
          EmailAddress={companyInfo.EmailAddress}
          EmailError={errors.EmailAddress}
          CompanyWebsite={companyInfo.CompanyWebsite}
          CompanyWebsiteError={errors.CompanyWebsite}
          CompanyRegisteredAddress={companyInfo.CompanyRegisteredAddress}
          CompanyRegisteredAddressError={errors.CompanyRegisteredAddress}
          compnayMobileNo={companyInfo.compnayMobileNo}
          handleChange={handleChange}
        />
        <CompanyStructure
          BusinessStructure={companyInfo.BusinessStructure}
          BusinessStructureError={errors.BusinessStructure}
          NatureOfBusiness={companyInfo.NatureOfBusiness}
          NatureOfBusinessError={errors.NatureOfBusiness}
          CountryOfIncorporation={companyInfo.CountryOfIncorporation}
          CountryOfIncorporationError={errors.CountryOfIncorporation}
          CompanyRegistrationNum={companyInfo.CompanyRegistrationNum}
          CompanyRegistrationNumErrors={errors.CompanyRegistrationNum}
          TradeLicenseExpiryDate={companyInfo.TradeLicenseExpiryDate}
          TradeLicenseExpiryDateErrors={errors.TradeLicenseExpiryDate}
          OtherStructure={companyInfo.OtherStructure}
          OtherStructureError={errors.OtherStructure}
          OtherBusiness={companyInfo.OtherBusiness}
          OtherBusinessError={errors.OtherBusiness}
          DateOfIncorporation={companyInfo.DateOfIncorporation}
          DateOfIncorporationError={errors.DateOfIncorporation}
          TradeLicenseNum={companyInfo.TradeLicenseNum}
          TradeLicenseNumError={errors.TradeLicenseNum}
          VatTba={companyInfo.VatTba}
          VatTbaError={errors.VatTba}
          handleChange={handleChange}
        />
        <BankDetails
          BankName={companyInfo.BankName}
          BankNameError={errors.BankName}
          BankBranchAddress={companyInfo.BankBranchAddress}
          BankBranchAddressError={errors.BankBranchAddress}
          AccountName={companyInfo.AccountName}
          AccountNameError={errors.AccountName}
          AccountNumber={companyInfo.AccountNumber}
          AccountNumberError={errors.AccountNumber}
          BankManagerName={companyInfo.BankManagerName}
          BankManagerNameError={errors.BankManagerName}
          CorospondentBankName={companyInfo.CorospondentBankName}
          CorospondentBankNameError={errors.CorospondentBankName}
          BankCountry={companyInfo.BankCountry}
          BankCountryError={errors.BankCountry}
          SwiftCode={companyInfo.SwiftCode}
          SwiftCodeError={errors.SwiftCode}
          AccountCurrency={companyInfo.AccountCurrency}
          AccountCurrencyError={errors.AccountCurrency}
          IBANaba={companyInfo.IBANaba}
          IBANabaError={errors.IBANaba}
          BankManagerContactDetails={companyInfo.BankManagerContactDetails}
          BankManagerContactDetailsError={errors.BankManagerContactDetails}
          CorrospondentBankSwiftCode={companyInfo.CorrospondentBankSwiftCode}
          CorrospondentBankSwiftCodeError={errors.CorrospondentBankSwiftCode}
          handleChange={handleChange}
        />
        <ShareHolders
          shareHolders1={companyInfo.shareHolders1}
          shareHolders1Error={errors.shareHolders1}
          shareHolders1per={companyInfo.shareHolders1per}
          shareHolders1perError={errors.shareHolders1per}
          shareHolders1Nation={companyInfo.shareHolders1Nation}
          shareHolders1NationError={errors.shareHolders1Nation}
          shareHolders2={companyInfo.shareHolders2}
          shareHolders2per={companyInfo.shareHolders2per}
          shareHolders2Nation={companyInfo.shareHolders2Nation}
          shareHolders3={companyInfo.shareHolders3}
          shareHolders3per={companyInfo.shareHolders3per}
          shareHolders3Nation={companyInfo.shareHolders3Nation}
          shareHolders4={companyInfo.shareHolders4}
          shareHolders4per={companyInfo.shareHolders4per}
          shareHolders4Nation={companyInfo.shareHolders4Nation}
          handleChange={handleChange}
        />
        <CompanyContactDetail
          primaryName={companyInfo.primaryName}
          primaryNameError={errors.primaryName}
          primaryDesignation={companyInfo.primaryDesignation}
          primaryDesignationError={errors.primaryDesignation}
          primaryPhone={companyInfo.primaryPhone}
          primePhoneError={errors.primaryPhone}
          primaryEmail={companyInfo.primaryEmail}
          primaryEmailError={errors.primaryEmail}
          operationDeptName={companyInfo.operationDeptName}
          operationDeptNameError={errors.operationDeptName}
          operationDeptDesignation={companyInfo.operationDeptDesignation}
          operationDeptDesignationError={errors.operationDeptDesignation}
          operationDeptPhone={companyInfo.operationDeptPhone}
          operationDeptPhoneError={errors.operationDeptPhone}
          operationDeptEmail={companyInfo.operationDeptEmail}
          operationDeptEmailError={errors.operationDeptEmail}
          financeContactName={companyInfo.financeContactName}
          financeContactNameError={errors.financeContactName}
          financeContactDesignation={companyInfo.financeContactDesignation}
          financeContactDesignationError={errors.financeContactDesignation}
          financeContactNum={companyInfo.financeContactNum}
          financeContactNumError={errors.financeContactNum}
          financeContactEmail={companyInfo.financeContactEmail}
          financeContactEmailError={errors.financeContactEmail}
          accountDptName={companyInfo.accountDptName}
          accountDptNameError={errors.accountDptName}
          accountDptDesignation={companyInfo.accountDptDesignation}
          accountDptDesignationError={errors.accountDptDesignation}
          accountDptPhone={companyInfo.accountDptPhone}
          accountDptPhoneError={errors.accountDptPhone}
          accountDptEmail={companyInfo.accountDptEmail}
          accountDptEmailError={errors.accountDptEmail}
          proposedBusiness={companyInfo.proposedBusiness}
          proposedBusinessError={errors.proposedBusiness}
          contactPersonAtAdamEnergy={companyInfo.contactPersonAtAdamEnergy}
          contactPersonAtAdamEnergyError={errors.contactPersonAtAdamEnergy}
          handleChange={handleChange}
        />
        <TradeReference 
         handleChange={handleChange}
         TradeReference1 = {companyInfo.TradeReference1}
         TradeReference1Error = {errors.TradeReference1}
         TradeReference1Contact = {companyInfo.TradeReference1Contact}
         TradeReference1ContactError = {errors.TradeReference1Contact}
         TradeReference2 = {companyInfo.TradeReference2}
         TradeReference2Error = {errors.TradeReference2}
         TradeReference2Contact = {companyInfo.TradeReference2Contact}
         TradeReference2ContactError = {errors.TradeReference2Contact}
         TradeReference3 = {companyInfo.TradeReference3}
        
         TradeReference3Contact = {companyInfo.TradeReference3Contact}
      
         TradeReference4 = {companyInfo.TradeReference4}
         TradeReference4Contact = {companyInfo.TradeReference4Contact}
    
        
        />
        <UploadKYC handleSubmit = {handleSubmit}
         handleChange={handleChange}
       
        />
       
        {Object.keys(errors).length === 0 && Issubmit ?  (
          <p>Form Submitted</p>
        ) : (
          <p>Please Complete all the fields</p>
        )}
      </form>
    </>
  );
};

export default AllForm;
