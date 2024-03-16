import toggleButtonStyle from "./Styles/ToggleButton.jsx";

const ToggleButton = ({ children, buttonName }) => {
  return (
    <>
      <section className={toggleButtonStyle.toggleDetails}>
        <button>
          {/* Add material symbols*/}
          <span class="material-symbols-outlined">add</span>
          {buttonName}
        </button>
      </section>
    </>
  );
};

export default ToggleButton;
