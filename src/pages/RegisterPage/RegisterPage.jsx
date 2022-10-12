import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
    )
}

export default RegisterPage;