import React, { Component } from 'react'

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email' 
                        value={this.state.email}
                        handleChange ={this.handleChange}
                        label = 'Email'
                        required
                    />
                    <FormInput 
                        label='Password'
                        name='password'
                        type='password' 
                        value={this.state.password}
                        handleChange ={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isgooglesignin>Sign in with Google</CustomButton>
                    </div>
                    </form>
            </div>
        )
    }
}
