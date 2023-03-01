import React from "react";

const BankDetails = ({
  BankName,
  BankNameError,
  BankBranchAddress,
  BankBranchAddressError,
  AccountName,
  AccountNameError,
  AccountNumber,
  AccountNumberError,
  BankManagerName,
  BankManagerNameError,
  CorospondentBankName,
  CorospondentBankNameError,
  BankCountry,
  BankCountryError,
  handleChange,
  SwiftCode,
  SwiftCodeError,
  AccountCurrency,
  AccountCurrencyError,
  IBANaba,
  IBANabaError,
  BankManagerContactDetails,
  BankManagerContactDetailsError,
  CorrospondentBankSwiftCode,
  CorrospondentBankSwiftCodeError,
}) => {
  return (
    <div className="form-container">
      <h2>Bank Details</h2>

      <div className="compnayInfo-leftSide">
        <div>
          <label>Bank Name</label>
          <input
            type="text"
            className="text leftSideBankDetails"
            name="BankName"
            onChange={handleChange}
            value={BankName}
          ></input>
          <p className="error">{BankNameError}</p>
          <label>Bank Branch Address</label>
          <input
            type="text"
            className="text leftSideBankDetails"
            name="BankBranchAddress"
            onChange={handleChange}
            value={BankBranchAddress}
          ></input>
          <p className="error">{BankBranchAddressError}</p>
          <label>Account Name</label>

          <input
            type="text"
            className="text leftSideBankDetails"
            name="AccountName"
            value={AccountName}
            onChange={handleChange}
          ></input>
          <p className="error">{AccountNameError}</p>
          <label>Account Number</label>

          <input
            type="number"
            className="text leftSideBankDetails"
            name="AccountNumber"
            value={AccountNumber}
            onChange={handleChange}
          ></input>
          <p className="error">{AccountNumberError}</p>
          <label>Bank Account Manager's Name</label>

          <input
            type="text"
            className="text leftSideBankDetails"
            name="BankManagerName"
            value={BankManagerName}
            onChange={handleChange}
          ></input>
          <p className="error">{BankManagerNameError}</p>
          <label>Correspondent Bank Name*</label>

          <input
            type="text"
            className="text leftSideBankDetails"
            name="CorospondentBankName"
            value={CorospondentBankName}
            onChange={handleChange}
          ></input>

          <p className="error">{CorospondentBankNameError}</p>
        </div>

        <div className="bankDetails-rightSide">
          <label>Bank Country</label>
          <input
            type="text"
            className="text rightSideBankDetails"
            name="BankCountry"
            value={BankCountry}
            onChange={handleChange}
          ></input>
          <p className="error">{BankCountryError}</p>
          <label>Swift Code</label>
          <input
            type="number"
            className="text rightSideBankDetails number"
            name="SwiftCode"
            value={SwiftCode}
            onChange={handleChange}
          ></input>
          <p className="error">{SwiftCodeError}</p>
          <label>Account Currency</label>
          <input
            type="text"
            className="text rightSideBankDetails"
            name="AccountCurrency"
            value={AccountCurrency}
            onChange={handleChange}
          ></input>
          <p className="error">{AccountCurrencyError}</p>
          <label>IBAN/ABA</label>
          <input
            type="number"
            className="text rightSideBankDetails number"
            name="IBANaba"
            value={IBANaba}
            onChange={handleChange}
          ></input>
          <p className="error">{IBANabaError}</p>
          <label>Bank Account Manager's Contact Details</label>
          <input
            type="number"
            className="text rightSideBankDetails number"
            name="BankManagerContactDetails"
            value={BankManagerContactDetails}
            onChange={handleChange}
          ></input>
          <p className="error">{BankManagerContactDetailsError}</p>
          <label>Correspondent Bank SWIFT Code</label>
          <input
            type="number"
            className="text rightSideBankDetails number"
            name="CorrospondentBankSwiftCode"
            value={CorrospondentBankSwiftCode}
            onChange={handleChange}
          ></input>
          <p className="error">{CorrospondentBankSwiftCodeError}</p>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
