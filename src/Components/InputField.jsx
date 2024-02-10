import InputFieldstyle from "../Components/Styles/inputFormStyle.module.css";

const InputField = ({ lableName, inputType }) => {
  return (
    <p>
      <label className={InputFieldstyle.InputField}>
        {lableName}
        <input type={inputType} />
      </label>
    </p>
  );
};
export default InputField;
