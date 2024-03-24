import InputFieldstyle from "../Components/Styles/inputFormStyle.module.css";

const InputField = ({ lableName, inputType, placeholder, isRequired }) => {
  return (
    <p>
      <label className={InputFieldstyle.InputField}>
        {lableName}
        <input
          type={inputType}
          placeholder={placeholder}
          required={isRequired ? true : false}
        />
      </label>
    </p>
  );
};
export default InputField;
