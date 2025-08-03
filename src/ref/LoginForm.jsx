import React, {useState, useEffect, useRef} from 'react'

export default function LoginForm() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const refEmail = useRef();
    const refPassword = useRef();

    useEffect(() => {
        console.log(refEmail);
        console.log(refPassword);
    });
 
    const handleLogin = (e) =>{
        e.preventDefault();
        const emailAddress = refEmail.current.value;
        const password = refPassword.current.value;
        console.log({email:emailAddress, password: password} );
        refEmail.current.value = '';
        refPassword.current.value = '';
    }

  return (
    <div className='container'>
        <h1>Login form</h1>
        <form className='form' onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input type='email' ref={refEmail}></input>
            <label htmlFor='password'>password</label>
            <input type='password' ref={refPassword}></input>
            <button className='btn-submit' type submit>Login</button>
        </form>
    </div>
  )
}
