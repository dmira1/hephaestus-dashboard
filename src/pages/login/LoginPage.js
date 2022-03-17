import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import {useNavigate} from 'react-router-dom';
import { auth } from '../../libs/firebase';
import image from '../../static/hephaestus-login-bg.jpg'

import {IoPerson} from 'react-icons/io5'
import {GiAnvilImpact} from 'react-icons/gi'

import {LoginFormStyles, Form, FormControl, LoginBackground, WelcomeMessageContainer, WelcomeMessage, LoginContainer} from './styles'
import {Label} from "../../ui/label";
import {Input} from "../../ui/input";
import {SubmitButton} from "../../ui/buttons";



function LoginPage(props) {
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const notify = (error) => toast.error(error.code, {
        position: "bottom-center",
        autoClose: 1800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    function onLoginRequest(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigation('/dashboard')
            
        })
        .catch(error=>{
            notify(error)
        })
    }

    return (
        <LoginFormStyles>
            <ToastContainer/>
            <LoginBackground>
                <LoginContainer>
                    <Form onSubmit={onLoginRequest}>
                        <h2><IoPerson/> Sign-In</h2>
                        <FormControl>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="text" placeholder="janedoe@webmail.com"
                                onChange={(e) => setEmail(e.target.value)}/>
                        </FormControl>

                        <FormControl>
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </FormControl>
                        <FormControl>
                            <SubmitButton type="submit" padding="0.8rem 0" margin="1.5rem 0 0 0" bgcolor="red">Dashboard Sign In</SubmitButton>
                        </FormControl>
                    </Form>
                    <WelcomeMessageContainer>
                        <GiAnvilImpact size={100}/>
                        <WelcomeMessage>Flame-forged Custom PC and Parts</WelcomeMessage>
                        <p>Curated for you and delivered to your door.</p>
                    </WelcomeMessageContainer>
                </LoginContainer>
            </LoginBackground>
        </LoginFormStyles>
    );
}

export default LoginPage;