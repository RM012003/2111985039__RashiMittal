import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../actions/authActions';

const AuthForm = ({ isRegister }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formData;

    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            dispatch(register({ name, email, password }));
        } else {
            dispatch(login({ email, password }));
        }
    };

    return (
        <form onSubmit={onSubmit}>
            {isRegister && <input type="text" name="name" value={name} onChange={onChange} required />}
            <input type="email" name="email" value={email} onChange={onChange} required />
            <input type="password" name="password" value={password} onChange={onChange} required />
            <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default AuthForm;
