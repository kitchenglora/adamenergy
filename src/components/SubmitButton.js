import React from "react";

const SubmitButton = ({ handleSubmit }) => {
  return (
    <div className="submit-but-container">
      <button type="submit" onClick={handleSubmit} className='submit-but' >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
