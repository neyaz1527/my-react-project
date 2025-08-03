import React, {useState, useEffect, useRef} from 'react'

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log(email);
        console.log(password);
    });

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log({email: email, password: password} );
        setEmail('')    
        setPassword('');
    }

  return (
    <div className='container'>
        <h1>Login form</h1>
        <form className='form' onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label htmlFor='password'>password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='btn-submit' type submit>Login</button>
        </form>
    </div>
  )
}
