import Login from "components/elements/Login/Login";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                or <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default LoginPage;