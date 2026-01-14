import Label from "./label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder, onChange } = props; // Tambahkan onChange
  return (
    <div className="flex flex-col gap-2 self-stretch items-start">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} onChange={onChange} /> 
    </div>
  );
};

export default InputForm;
