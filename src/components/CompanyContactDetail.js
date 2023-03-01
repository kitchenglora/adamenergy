import React from "react";

const companyContactDetail = ({
  handleChange,
  primaryName,
  primaryNameError,
  primaryDesignation,
  primaryDesignationError,
  primaryPhone,
  primePhoneError,
  primaryEmail,
  primaryEmailError,
  operationDeptName,
  operationDeptNameError,
  operationDeptDesignation,
  operationDeptDesignationError,
  operationDeptPhone,
  operationDeptPhoneError,
  operationDeptEmail,
  operationDeptEmailError,
  financeContactName,
  financeContactNameError,
  financeContactDesignation,
  financeContactDesignationError,
  financeContactNum,
  financeContactNumError,
  financeContactEmail,
  financeContactEmailError,
  accountDptName,
  accountDptNameError,
  accountDptDesignation,
  accountDptDesignationError,
  accountDptPhone,
  accountDptPhoneError,
  accountDptEmail,
  accountDptEmailError,
  proposedBusiness,
  proposedBusinessError,
  contactPersonAtAdamEnergy,
  contactPersonAtAdamEnergyError,
}) => {
  return (
    <div className="form-container">
      <h2>COMPNAY CONTACT DETAILS</h2>

      <div className="compnayContactDetails-leftSide">
        <div>
          <h4>Primary Contact Details</h4>
          <label>Name</label>
          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="primaryName"
            value={primaryName}
          ></input>
          <p className="error">{primaryNameError}</p>
          <label>Designation</label>
          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="primaryDesignation"
            value={primaryDesignation}
          ></input>
          <p className="error">{primaryDesignationError}</p>

          <label>Phone</label>

          <input
            type="phone"
            className="text leftcompStructText"
            onChange={handleChange}
            name="primaryPhone"
            value={primaryPhone}
          ></input>
          <p className="error">{primePhoneError}</p>
          <label>Email Address</label>

          <input
            type="email"
            className="text leftcompStructText"
            onChange={handleChange}
            name="primaryEmail"
            value={primaryEmail}
          ></input>
          <p className="error">{primaryEmailError}</p>
          <h4>Credit/Finance Contact Details</h4>
          <label>Name</label>

          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="financeContactName"
            value={financeContactName}
          ></input>
          <p className="error">{financeContactNameError}</p>
          <label>Designation</label>

          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="financeContactDesignation"
            value={financeContactDesignation}
          ></input>
          <p className="error">{financeContactDesignationError}</p>
          <label>Phone</label>

          <input
            type="phone"
            className="text leftcompStructText"
            onChange={handleChange}
            name="financeContactNum"
            value={financeContactNum}
          ></input>
          <p className="error">{financeContactNumError}</p>
          <label>Email Address</label>

          <input
            type="email"
            className="text leftcompStructText"
            onChange={handleChange}
            name="financeContactEmail"
            value={financeContactEmail}
          ></input>
          <p className="error">{financeContactEmailError}</p>
        </div>

        <div className="compnayContactDetails-rightSide">
          <h4>Operations Department Contact Details</h4>
          <label>Name</label>
          <input
            type="text"
            className="text compnayContactDetails-rightText"
            onChange={handleChange}
            name="operationDeptName"
            value={operationDeptName}
          ></input>
          <p className="error">{operationDeptNameError}</p>
          <label>Designation</label>
          <input
            type="text"
            className="text compnayContactDetails-rightText number"
            name="operationDeptDesignation"
            value={operationDeptDesignation}
            onChange={handleChange}
          ></input>
          <p className="error">{operationDeptDesignationError}</p>
          <label>Phone</label>
          <input
            type="number"
            className="text compnayContactDetails-rightText"
            onChange={handleChange}
            name="operationDeptPhone"
            value={operationDeptPhone}
          ></input>
          <p className="error">{operationDeptPhoneError}</p>
          <label>Email Address</label>
          <input
            type="email"
            className="text compnayContactDetails-rightText number"
            onChange={handleChange}
            name="operationDeptEmail"
            value={operationDeptEmail}
          ></input>
          <p className="error">{operationDeptEmailError}</p>
          <h4>Accounting Department Contact Details</h4>

          <label>Name</label>
          <input
            type="text"
            className="text compnayContactDetails-rightText number"
            onChange={handleChange}
            name="accountDptName"
            value={accountDptName}
          ></input>
          <p className="error">{accountDptNameError}</p>
          <label>Designation</label>
          <input
            type="text"
            className="text compnayContactDetails-rightText number"
            onChange={handleChange}
            name="accountDptDesignation"
            value={accountDptDesignation}
          ></input>
          <p className="error">{accountDptDesignationError}</p>
          <label>Phone</label>
          <input
            type="phone"
            className="text compnayContactDetails-rightText number"
            onChange={handleChange}
            name="accountDptPhone"
            value={accountDptPhone}
          ></input>
          <p className="error">{accountDptPhoneError}</p>
          <label>Email Address</label>
          <input
            type="email"
            className="text compnayContactDetails-rightText number"
            onChange={handleChange}
            name="accountDptEmail"
            value={accountDptEmail}
          ></input>

          <p className="error">{accountDptEmailError}</p>
        </div>
      </div>

      <label>What is the proposed business with Adam Energy FZE?</label>
      <input
        type="text"
        className="text "
        name="proposedBusiness"
        value={proposedBusiness}
        onChange={handleChange}
      ></input>
      <p className="error">{proposedBusinessError}</p>
      <label>Who is your Contact Person in Adam Energy FZE?</label>
      <input
        type="text"
        className="text "
        name="contactPersonAtAdamEnergy"
        value={contactPersonAtAdamEnergy}
        onChange={handleChange}
      ></input>
      <p className="error">{contactPersonAtAdamEnergyError}</p>
    </div>
  );
};

export default companyContactDetail;
