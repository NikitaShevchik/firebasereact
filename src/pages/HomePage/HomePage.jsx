import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            HomePage
            <Navigate to="/login" />
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')} > Register</button>
        </div >
    )
}

export default HomePage;
