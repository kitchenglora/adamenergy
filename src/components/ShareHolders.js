import React from "react";

const ShareHolders = ({
  handleChange,
  shareHolders1,
  shareHolders1Error,
  shareHolders1per,
  shareHolders1perError,
  shareHolders2,
  shareHolders2per,
  shareHolders2Nation,
  shareHolders3,
  shareHolders3per,
  shareHolders3Nation,
  shareHolders4,
  shareHolders1Nation,
  shareHolders1NationError,
  shareHolders4per,
  shareHolders4Nation,
}) => {
  return (
    <div className="form-container">
      <h2>Share Holders</h2>
      <p>
        Please list all the Share holder of the company with share owning more
        than 10 %
      </p>

      <div className="shareHolder-leftSide">
        <div>
          <h2>Name</h2>
          <input
            type="text"
            className="text"
            name="shareHolders1"
            value={shareHolders1}
            onChange={handleChange}
            placeholder="Please put NA if not available"
          ></input>
          <p className="error">{shareHolders1Error}</p>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders2"
            value={shareHolders2}
          ></input>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders3"
            value={shareHolders3}
          ></input>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders4"
            value={shareHolders4}
          ></input>
        </div>
        <div className="shareHolder-Middlecontainer">
          <h2>%</h2>
          <input
            type="text"
            className="sh-number"
            onChange={handleChange}
            placeholder="NA"
            name="shareHolders1per"
            value={shareHolders1per}
          ></input>
          <p className="error">{shareHolders1perError}</p>
          <input
            type="text"
            className="sh-number"
            onChange={handleChange}
            name="shareHolders2per"
            value={shareHolders2per}
          ></input>
          <input
            type="text"
            className="sh-number"
            name="shareHolders3per"
            value={shareHolders3per}
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="sh-number"
            name="shareHolders4per"
            value={shareHolders4per}
            onChange={handleChange}
          ></input>
        </div>

        <div className="shareHolder-Rightcontainer">
          <h2>Nationality</h2>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            placeholder="Please put NA if not available"
            name="shareHolders1Nation"
            value={shareHolders1Nation}
          ></input>
          <p className="error">{shareHolders1NationError}</p>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders2Nation"
            value={shareHolders2Nation}
          ></input>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders3Nation"
            value={shareHolders3Nation}
          ></input>
          <input
            type="text"
            className="text"
            onChange={handleChange}
            name="shareHolders4Nation"
            value={shareHolders4Nation}
          ></input>
        </div>
      </div>

      <p>
        Please confirm who is the Ultimate Beneficial Owner and specify share
        percentage
      </p>
    </div>
  );
};

export default ShareHolders;
