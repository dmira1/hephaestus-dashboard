import styled from 'styled-components';

const LoginFormStyles = styled.section`
    max-width: 800px;
    margin: 5rem auto 0;
    h2 {
        text-align: center;
        font-size: 2.5rem;
    }
    .Toastify__toast {
    border: 1px solid black;
    color: black;
    }
    .Toastify__toast-icon {
        border: 1px solid black;
        border-radius: 50%;
    }
`;

const Form = styled.form`
    width: 50%;
`
const FormControl = styled.div`
    margin-bottom: 1.5rem;
`
const LoginBackground = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 2px 2px grey;
`;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
`

const WelcomeMessageContainer = styled.div`
    text-align: center;
    width: 50%;
    padding: 0.25rem;
`

const WelcomeMessage = styled.h3`
    font-size: 2rem;
    font-weight: 600;
`

export {LoginFormStyles, Form, FormControl, LoginBackground, WelcomeMessageContainer, WelcomeMessage, LoginContainer}