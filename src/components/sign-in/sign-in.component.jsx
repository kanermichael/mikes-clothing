import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

const SignIn = (props) => {

    const [info, setInfo] = useState({ email: '', password: '' });

    const handleSubmit = event => {
        event.preventDefault();
        setInfo({ email: '', password: '' })
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setInfo({...info, [name]: value})
    }

    return (
        <div className="sign-in">
                <h2>I have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>

                    <FormInput 
                        type='email' 
                        name='email' 
                        value={info.email}
                        handleChange={handleChange} 
                        label='email'
                        required />
                    <FormInput  
                        type='password' 
                        name='password' 
                        value={info.password} 
                        handleChange={handleChange}
                        label='password'
                        required />
                    <div className="buttons">
                    <CustomButton type="submit">
                    Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign In
                    </CustomButton>
                    </div>
                   

                </form>
            </div>
    )
}

export default SignIn;