import AuthLayout from "../components/Layout/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister/>
        </AuthLayout>
    );
}

export default RegisterPage;