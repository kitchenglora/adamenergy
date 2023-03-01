import React from "react";

const TradeReference = ({handleChange,TradeReference1,TradeReference1Error,TradeReference1Contact,TradeReference1ContactError,TradeReference2,TradeReference2Error,TradeReference2Contact,TradeReference2ContactError,TradeReference3,TradeReference3Contact,TradeReference4Contact,TradeReference4,}) => {
  return (
    <div className="form-container">
      <h2>Trade Reference</h2>
      <p>Please provide Trade Reference details:</p>

      <div className="tradeRefernce-leftSide">
        <div>
          <h2>Name</h2>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference1" value={TradeReference1}
          ></input>
          <p>{TradeReference1Error}</p>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference2" value={TradeReference2}
          ></input>
          <p>{TradeReference2Error}</p>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable" name="TradeReference3" value={TradeReference3}
            onChange={handleChange}
          ></input>
       
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable" name="TradeReference4" value={TradeReference4}
            onChange={handleChange}
          ></input>
        </div>

        <div className="tradeRefernce-Rightcontainer">
          <h2>Phone no./Email id</h2>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference1Contact" value={TradeReference1Contact}
          ></input>
          <p>{TradeReference1ContactError}</p>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference2Contact" value={TradeReference2Contact}
          ></input>
          <p>{TradeReference2ContactError}</p>
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference3Contact" value={TradeReference3Contact}
          ></input>
         
          <input
            type="text"
            className="text"
            placeholder="Please put n/a if not applicable"
            onChange={handleChange} name = "TradeReference4Contact" value={TradeReference4Contact}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default TradeReference;
