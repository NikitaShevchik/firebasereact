import Form from 'components/UI/Form/Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                navigate('/')
            })
            .catch(() => alert('Invalid user'))
    }
    return (
        <div>
            <Form title="Sign In" handleClick={handleLogin} />
        </div>
    )
}

export default Login