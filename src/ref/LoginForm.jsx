import React, {useRef} from 'react'

export default function LoginForm() {

    const refEmail = useRef();
    const refPassword = useRef();

    // Removed the useEffect hook as it's not needed for this functionality
 
    const handleLogin = (e) =>{
        e.preventDefault();
        const emailAddress = refEmail.current.value;
        const password = refPassword.current.value;

        // Create a data object to send
        const loginData = {
            email: emailAddress, 
            password: password
        };
        
        // Use the fetch API to send a POST request to your server
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // You can add logic here to handle the server's response
        })
        .catch((error) => {
            console.error('Error:', error);
        });

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
                <button className='btn-submit' type="submit">Login</button>
            </form>
        </div>
    )
}