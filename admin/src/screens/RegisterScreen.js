import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const RegisterScreen = props => {
    const { signup, state } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password2, setPassword2] = useState('');
    const [password2Error, setPassword2Error] = useState('');
    const validate = () => {
        if (username.length < 3) {
            setUsernameError('Username must be at least 3 characters');
            return false;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            return false;
        }
        if (password !== password2) {
            setPassword2Error('Passwords do not match');
            return false;
        }
        return true;
    };
    const handleChange = e => {
        switch (e.target.name) {
            case 'username':
                setUsername(e.target.value);
                setUsernameError('');
                break;
            case 'password':
                setPassword(e.target.value);
                setPasswordError('');
                break;
            case 'password2':
                setPassword2(e.target.value);
                setPassword2Error('');
                break;
            default:
        }
    };
    const onSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            signup({ username, password });
            Promise.resolve()
        } else {
            return;
        }
    };
    return (
        <div className="container" style={{ maxWidth: 600 }}>
            <div className="card card-body mt-5">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                        <p className="text-danger">{usernameError}</p>
                        <p className="text-danger">{state.errorMessage}</p>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            className="form-control"
                            name="password"
                            value={password}
                            type="password"
                            onChange={handleChange}
                        />
                        <p className="text-danger">{passwordError}</p>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            className="form-control"
                            name="password2"
                            value={password2}
                            type="password"
                            onChange={handleChange}
                        />
                        <p className="text-danger">{password2Error}</p>
                    </div>
                    <button className="btn btn-dark btn-block">Register</button>
                </form>
                <p>
                    Already have an account?{' '}
                    <span>
                        <Link to="/login">Sign in</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterScreen;
