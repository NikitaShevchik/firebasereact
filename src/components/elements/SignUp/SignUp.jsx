import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'components/UI/Form/Form';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice';


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSignUp = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <div>
            <Form title="Sign up" handleClick={handleSignUp} />
        </div>
    )
}

export default SignUp