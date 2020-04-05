import React, { useState, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import RegisterScreen from './RegisterScreen';

const LoginScreen = props => {
    const { signin, state } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const validate = () => {
        if (username.length < 3) {
            setUsernameError('Username must be at least 3 characters');
            return false;
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
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
            default:
                break;
        }
    };
    const onSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            signin({ username, password });
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
                        <p className="text-danger">{state.errorMessage}</p>
                        <p className="text-danger">{usernameError}</p>
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
                    <button className="btn btn-dark btn-block">Login</button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <span>
                        <Link to="/register">Sign up</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginScreen;
