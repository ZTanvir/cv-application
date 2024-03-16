import { useState } from "react";
import toggleInfoStyle from "./Styles/toggleInfoSection.module.css";

const ToggleInfoSection = ({ children, icon, sectionName }) => {
  const [showDetails, setshowDetails] = useState(false);

  const expandOrHideCard = (event) => {
    // show or hide additional information about this section
    setshowDetails(!showDetails);
  };

  return (
    <section className={sectionName}>
      <h3 onClick={expandOrHideCard} className={toggleInfoStyle.sectionDetails}>
        <span>
          <span className="material-symbols-outlined">{icon}</span>
          {sectionName}
        </span>
        {/* expand_less */}
        <span className="material-symbols-outlined">
          {showDetails ? "expand_less" : "expand_more"}
        </span>
      </h3>
      {/* this div will be show or hide */}
      <div
        className={
          showDetails
            ? toggleInfoStyle.showSection
            : toggleInfoStyle.hideSection
        }
      >
        {children}
      </div>
    </section>
  );
};

export default ToggleInfoSection;
