import InputFieldstyle from "../Components/Styles/inputFormStyle.module.css";

const InputField = ({
  lableName,
  inputType,
  placeholder,
  formValue,
  formOnchange,
  isRequired,
}) => {
  return (
    <p>
      <label className={InputFieldstyle.InputField}>
        {lableName}
        <input
          type={inputType}
          placeholder={placeholder}
          value={formValue}
          onChange={(e) => formOnchange(e.target.value)}
          required={isRequired ? true : false}
        />
      </label>
    </p>
  );
};
export default InputField;
