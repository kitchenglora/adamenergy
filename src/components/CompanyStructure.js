import React from "react";

const CompanyStructure = ({
  BusinessStructure,
  NatureOfBusiness,
  CountryOfIncorporation,
  CompanyRegistrationNum,
  TradeLicenseExpiryDate,
  OtherStructure,
  OtherBusiness,
  DateOfIncorporation,
  TradeLicenseNum,
  VatTba,
  BusinessStructureError,
  NatureOfBusinessError,
  CountryOfIncorporationError,
  TradeLicenseExpiryDateErrors,
  CompanyRegistrationNumErrors,
  OtherStructureError,
  OtherBusinessError,
  DateOfIncorporationError,
  TradeLicenseNumError,
  VatTbaError,
  handleChange,
}) => {
  return (
    <div className="form-container">
      <h2>COMPANY STRUCTURE</h2>

      <div className="compnayInfo-leftSide">
        <div>
          <label>Business Structure</label>

          <select
            className="text leftcompStructText"
            onChange={handleChange}
            name="BusinessStructure"
            value={BusinessStructure}
          >
            <option>Public Company</option>
            <option>Partnership</option>
            <option>Private Company</option>
            <option>Sole Propiretorship</option>
            <option>Government Entity</option>
            <option>Others</option>
          </select>
          <p className="error">{BusinessStructureError}</p>
          <label>Nature of Business</label>
          <select
            className="text leftcompStructText"
            onChange={handleChange}
            name="NatureOfBusiness"
            value={NatureOfBusiness}
          >
            <option>Refining</option>
            <option>Trading</option>
            <option>Shiping</option>
            <option>Distribution</option>
            <option>Storage</option>
            <option>Others</option>
          </select>
          <p className="error">{NatureOfBusinessError}</p>
          <label>Country of Incorporation</label>

          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="CountryOfIncorporation"
            value={CountryOfIncorporation}
          ></input>
          <p className="error">{CountryOfIncorporationError}</p>
          <label>Company Registration No</label>

          <input
            type="text"
            className="text leftcompStructText"
            onChange={handleChange}
            name="CompanyRegistrationNum"
            value={CompanyRegistrationNum}
          ></input>
          <p className="error">{CompanyRegistrationNumErrors}</p>
          <label>Trade License Expiry Date</label>

          <input
            type="date"
            className="text leftcompStructText"
            onChange={handleChange}
            name="TradeLicenseExpiryDate"
            value={TradeLicenseExpiryDate}
          ></input>
          <p className="error">{TradeLicenseExpiryDateErrors}</p>
        </div>

        <div className="compnayStruct-rightSide">
          <label>If Other Structure (please specify)</label>
          <input
            type="text"
            className="text rightcompStructText"
            onChange={handleChange}
            name="OtherStructure"
            value={OtherStructure}
          ></input>
          <p className="error">{OtherStructureError}</p>
          <label>If Other Business (please specify)</label>
          <input
            type="text"
            className="text rightcompStructText number"
            onChange={handleChange}
            name="OtherBusiness"
            value={OtherBusiness}
          ></input>
          <p className="error">{OtherBusinessError}</p>
          <label>Date of Incorporation</label>
          <input
            type="date"
            className="text rightcompStructText"
            onChange={handleChange}
            name="DateOfIncorporation"
            value={DateOfIncorporation}
          ></input>
          <p className="error">{DateOfIncorporationError}</p>
          <label>Trade License Number</label>
          <input
            type="number"
            className="text rightcompStructText number"
            onChange={handleChange}
            name="TradeLicenseNum"
            value={TradeLicenseNum}
          ></input>
          <p className="error">{TradeLicenseNumError}</p>
          <label>VAT/TBANumber</label>
          <input
            type="number"
            className="text rightcompStructText number"
            onChange={handleChange}
            name="VatTba"
            value={VatTba}
          ></input>
          <p className="error">{VatTbaError}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyStructure;
