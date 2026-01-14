import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const Input = (props) => {
  const { type, placeholder, name, onChange, value } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative w-full">
      <input
        type={type === "password" && showPassword ? "text" : type}
        className="
          flex h-12 px-4 py-3 items-center gap-2.5 self-stretch 
          text-[16px] border border-[#D7D7D7] rounded-lg w-full 
          text-[#151515] 
          placeholder:text-[#969696] placeholder:opacity-50 
          focus:outline-none focus:border-[#1C6EA4] 
          transition-all
        "
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          onChange={onChange}
        >
          {showPassword ? (
            <EyeOffIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;

// const Input = (props) => {
//   const {type, placeholder, name} = props;
//   return (
//       <input
//       type={type}
//       className="flex h-12 px-4 py-3 text-[16px] border-[#D7D7D7] rounded-lg w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
//       placeholder={placeholder}
//       name = {name}
//       id = {name}
//     />
//   );
// }

// export default Input;
