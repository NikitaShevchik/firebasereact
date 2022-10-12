import Form from 'components/UI/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {

    }
    return (
        <div>
            <Form title="Log In" />
        </div>
    )
}

export default Login