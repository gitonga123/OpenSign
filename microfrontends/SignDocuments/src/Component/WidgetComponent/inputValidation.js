import React, { useEffect } from "react";
import { themeColor } from "../../utils/ThemeColor/backColor";
import ModalUi from "../../premitives/ModalUi";

function InputValidation(props) {
  const options = ["email", "number", "text"];
  useEffect(() => {
    if (
      props.currWidgetsDetails?.options?.validation?.pattern ||
      props.currWidgetsDetails.options?.validation?.type
    ) {
      props.setHint(props.currWidgetsDetails?.options?.hint || "");
      if (props.currWidgetsDetails.options?.validation.type === "regex") {
        props.setTextValidate(
          props.currWidgetsDetails.options?.validation?.pattern || "text"
        );
      } else {
        props.setTextValidate(
          props.currWidgetsDetails.options?.validation?.type || "text"
        );
      }
    }
  }, [props.currWidgetsDetails]);
  return (
    <ModalUi
      isOpen={props.isValidate}
      handleClose={() => {
        props.setIsValidate(false);
      }}
      title={"Validation"}
    >
      <div style={{ height: "100%", padding: "10px 20px" }}>
        <div className="validateText">
          <label
            style={{
              marginRight: "5px",
              fontSize: "14px",
              fontWeight: "500"
            }}
          >
            Hint:
          </label>
          <div style={{ position: "relative" }}>
            <input
              value={props.hint}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                padding: 10
              }}
              placeholder="Enter hint"
              className="drodown-input validateInputText"
              onChange={(e) => props.setHint(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={{ height: "100%", padding: 20 }}>
        <div className="validateText">
          <label
            style={{
              marginRight: "5px",
              fontSize: "14px",
              fontWeight: "500"
            }}
          >
            Regular expression:
          </label>
          <div style={{ position: "relative" }}>
            <input
              value={props.textValidate}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%"
              }}
              placeholder="Enter custom regular expression"
              className="drodown-input validateInputText"
              onChange={(e) => props.setTextValidate(e.target.value)}
            />
            <select
              value=""
              className="regxSelect"
              onChange={(e) => props.setTextValidate(e.target.value)}
            >
              <option style={{ fontSize: "13px" }} value="">
                Select...
              </option>
              {options.map((data, ind) => {
                return (
                  <option style={{ fontSize: "13px" }} key={ind} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "#9f9f9f",
            width: "100%",
            marginTop: "15px",
            marginBottom: "15px"
          }}
        ></div>
        <button
          onClick={() => {
            props.handleValidateInput();
            props.setHint("");
            props.setTextValidate("");
          }}
          style={{
            background: themeColor()
          }}
          type="button"
          // disabled={!selectCopyType}
          className="finishBtn"
        >
          Apply
        </button>
      </div>
    </ModalUi>
  );
}

export default InputValidation;
