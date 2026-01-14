import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Inputs";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product";
  }
  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-5">
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
      />
      <Button className="box-border w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
