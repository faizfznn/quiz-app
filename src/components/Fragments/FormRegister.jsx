import { useState } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Inputs";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    fullname: "", // Sesuai dengan name="fullname"
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Menyimpan data ke localStorage agar bisa dibaca oleh FormLogin
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    
    // Opsional: arahkan ke halaman login setelah daftar
    window.location.href = "/"; 
  };

  // Pastikan semua field sudah diisi
  const isFormValid = 
    formData.fullname.length > 0 && 
    formData.email.length > 0 && 
    formData.password.length > 0 && 
    formData.confirmPassword.length > 0;

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-5">
      <InputForm 
        label="Fullname" 
        type="text" 
        placeholder="John Doe" 
        name="fullname" 
        onChange={handleInputChange} 
      />
      <InputForm 
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" 
        onChange={handleInputChange} 
      />
      <InputForm 
        label="Password" 
        type="password" 
        placeholder="*******" 
        name="password" 
        onChange={handleInputChange} 
      />
      <InputForm 
        label="Confirm Password" 
        type="password" 
        placeholder="*******" 
        name="confirmPassword" 
        onChange={handleInputChange} 
      />
      <Button 
        className="w-full" 
        type="submit" 
        disabled={!isFormValid}
      >
        Register
      </Button>
    </form>
  );
};

export default FormRegister;