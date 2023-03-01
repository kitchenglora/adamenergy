import React, { useState } from "react";
import upload from "../Assets/upload.png";
import SubmitButton from "./SubmitButton";
const UploadKYC = ({handleSubmit}) => {

  const [checked,setChecked] = useState(false)

  function handleChecked(e){
    
  }
  return (
    <div className="form-container">
      <h2>UPLOAD KYC DOCUMENTS</h2>

      <div className="docs-container">
        <p className="head-docsContainer">1.Certificate of Incorporation</p>
        <label className="kycFile">
          <span>
            <img src={upload} />
          </span>
          Upload File
          <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
        </label>
      </div>
      <div className="docs-container">
        <p className="head-docsContainer">
          2.Memorandum/Article of Association and Shareholding Structure
          (Evidencing Ultimate Business Owners) signed by company authorized
          signatory, stamped. and documents supporting UBO's.
        </p>
        <label className="kycFile">
          <span>
            <img src={upload} />
          </span>
          Upload File
          <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
        </label>
      </div>
      <div className="trade-and-reg">
        <div className="docs-container">
          <p className="head-docsContainer">3.Trade License</p>
          <label className="kycFile">
            <span>
              <img src={upload} />
            </span>
            Upload File
            <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
          </label>
        </div>

        <div className="docs-container">
          <p className="head-docsContainer">4.Tax Registration Certificate</p>
          <label className="kycFile">
            <span>
              <img src={upload} />
            </span>
            Upload File
            <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
          </label>
        </div>
      </div>
      <div className="websiteURL-container">
        <div className="docs-container">
          <p className="head-docsContainer">5.Website or Company Profile</p>
          <label className="kycFile">
            <span>
              <img src={upload} />
            </span>
            Upload File
            <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
          </label>
        </div>
        &emsp;
        {/* <div className='or-container'>
            <h2> OR</h2>
          </div> */}
        <div className="webURL">
          <input
            type="text"
            placeholder="Enter Website URL or Please put n/a if not applicable"
          />
        </div>
      </div>
      <div className="docs-container">
        <p className="head-docsContainer">
          6.Bank Reference Letter ( Upon Trade or Request)
        </p>
        <label className="kycFile">
          <span>
            <img src={upload} />
          </span>
          Upload File
          <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
        </label>
      </div>
      <div className="docs-container">
        <p className="head-docsContainer">
          7.Passport Copies of the Ultimate Beneficial Owners and Authorized
          Signatory*
        </p>
        <label className="kycFile">
          <span>
            <img src={upload} />
          </span>
          Upload File
          <input type="file" accept=".jpg, .jpeg, .png ,.doc,.pdf" />
        </label>
      </div>

      <div className="declaration-container">
        <h2>Declaration</h2>
        <input type="checkbox" onChange={handleChecked}  />
        <span>
        {" "}
          I DECLARE THAT: - This application form was completed by me, a
          representative authorized to submit this form on behalf of the
          registered company. I do hereby declare that the information provided
          herein above and, in the documents, appended herewith is true and
          correct to the best of my knowledge and belief and nothing has been
          falsely stated or concealed therein. I understand that if the said
          information as given by me is proved to be false, then I will be held
          liable under the provisions of the applicable UAE Law."
        </span>
        
      </div>
   
      <div className="signature-container">
        <input type="text" />
        <h4>Authorized Signature</h4>
      </div>
      <SubmitButton handleSubmit={handleSubmit}  />
    </div>
  );
};

export default UploadKYC;
