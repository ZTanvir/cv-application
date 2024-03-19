import addInfoButtonStyle from "./Styles/addInfoButtonStyle.module.css";

const AddInfoButton = ({ buttonName, addInfoBtnOnlick }) => {
  return (
    <>
      <section className={addInfoButtonStyle.toggleDetails}>
        <section className={addInfoButtonStyle.btnSection}>
          <button
            onClick={addInfoBtnOnlick}
            className={addInfoButtonStyle.addBtn}
          >
            {/* Add material symbols*/}
            <span className="material-symbols-outlined">add</span>
            {buttonName}
          </button>
        </section>
      </section>
    </>
  );
};

export default AddInfoButton;
