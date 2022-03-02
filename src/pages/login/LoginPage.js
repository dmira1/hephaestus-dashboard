import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../styles/LoginStyles.scss';
import {IoPerson} from 'react-icons/io5'
import {GiAnvilImpact} from 'react-icons/gi'

function LoginPage(props) {
    const navigation = useNavigate();
    function onSubmitHandler(e){
        e.preventDefault();
        navigation('/dashboard')
    }
    return (
        <div className='loginContainer'>
            <div className='loginForm'>
            <GiAnvilImpact size="2rem"/>
                <h1>Hephaestus PC</h1>
                <h2><IoPerson/> Sign-In</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className='formInput'>
                        <label for='username'>Username</label>
                        <input type="text" name="username" placeholder='Type your username'/>
                    </div>

                    <div className='formInput'>
                        <label for='password'>Password</label>
                        <input type="password" name="password" placeholder='Type your password'/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>

            <div className='loginWelcome'>
                <h1>Flame-forged Custom PC and Parts</h1>
                <p>Curated for you and delivered to your door.</p>
            </div>
        </div>
    );
}

export default LoginPage;