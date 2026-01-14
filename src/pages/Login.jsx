import AuthLayout from "../components/Layout/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";


const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin/>
        </AuthLayout>
    );
}

export default LoginPage;