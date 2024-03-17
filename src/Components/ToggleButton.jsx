import { useState } from "react";
import toggleButtonStyle from "./Styles/toggleButton.module.css";

const ToggleButton = ({ children, buttonName, addInfoBtnOnlick }) => {
  return (
    <>
      <section className={toggleButtonStyle.toggleDetails}>
        <section className={toggleButtonStyle.btnSection}>
          <button
            onClick={addInfoBtnOnlick}
            className={toggleButtonStyle.addBtn}
          >
            {/* Add material symbols*/}
            <span className="material-symbols-outlined">add</span>
            {buttonName}
          </button>
        </section>
        <section className={toggleButtonStyle.btnChildSection}>
          {children}
        </section>
      </section>
    </>
  );
};

export default ToggleButton;
