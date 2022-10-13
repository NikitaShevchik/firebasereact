import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from 'hooks/use-auth';
import { removeUser } from "store/slices/userSlice";

const HomePage = () => {
    const { isAuth, email } = useAuth();
    const dispatch = useDispatch()

    const navigate = useNavigate()
    return isAuth ?
        (
            <div>
                <h1>
                    HomePage
                </h1>
                <button onClick={() => dispatch(removeUser(email))}>
                    Log out from {email}
                </button>
            </div>
        )
        : (
            <div>
                HomePage
                <Navigate to="/login" />
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')} > Register</button>
            </div >
        )
}

export default HomePage;
