import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder, onChange } = props;
  return (
    <div className="flex flex-col gap-2 self-stretch items-start">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} id={name} type={type} placeholder={placeholder} onChange={onChange} /> 
    </div>
  );
};

export default InputForm;
