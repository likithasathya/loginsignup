// pages/signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await axios.post('/api/signup', { email, password });
            console.log("Signup Done");
            //Please Redirect to login page
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
