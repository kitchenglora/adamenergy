import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const CompanyInformation = ({
  RegisteredCompanyName,
  CorporateDomainName,
  ParentCompany,
  EmailAddress,
  CompanyWebsite,
  CompanyRegisteredAddress,
  handleChange,
  RegisteredCompanyNameError,
  EmailError,
  ParentCompanyError,
  CorporateDomainNameError,
  CompanyWebsiteError,
  CompanyRegisteredAddressError,
}) => {
  const [Contact, setContact] = useState();
  // console.log("errors", errors);

  return (
    <div className="form-container">
      <h2>COMPANY INFORMATION</h2>

      <div className="compnayInfo-leftSide">
        <div>
          <label>Registered Company Name</label>
          <input
            type="text"
            className="text compInfoText"
            name="RegisteredCompanyName"
            onChange={handleChange}
            value={RegisteredCompanyName}
            required
          ></input>
          <p className="error">{RegisteredCompanyNameError}</p>

          <label>Company Registered Address</label>
          <textarea
            rows="10"
            cols="60"
            name="CompanyRegisteredAddress"
            required
            onChange={handleChange}
            value={CompanyRegisteredAddress}
          ></textarea>
          <p className="error">{CompanyRegisteredAddressError}</p>
          <label>Corporate Domain Name</label>
          <input
            type="text"
            className="text compInfoText"
            name="CorporateDomainName"
            required
            onChange={handleChange}
            value={CorporateDomainName}
          ></input>
          <p className="error">{CorporateDomainNameError}</p>
        </div>

        <div className="compnayInfo-rightSide">
          <label>Parent Company / Group Company</label>
          <input
            type="text"
            className="text compInfoRightText"
            name="ParentCompany"
            required
            onChange={handleChange}
            value={ParentCompany}
          ></input>
          <p className="error">{ParentCompanyError}</p>
          <label>Contact Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={Contact}
            onChange={setContact}
            className="phone"
            required
          ></PhoneInput>
          <label>Email Address</label>
          <input
            type="email"
            className="text compInfoRightText"
            name="EmailAddress"
            required
            onChange={handleChange}
            value={EmailAddress}
          ></input>
          <p className="error">{EmailError}</p>
          <label>Company Website</label>
          <input
            type="text"
            className="text compInfoRightText"
            name="CompanyWebsite"
            required
            onChange={handleChange}
            value={CompanyWebsite}
          ></input>
          <p className="error">{CompanyWebsiteError}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
