import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'libs/firebase';
import {AppBar} from '../../components/appbar'
import {PageNotFoundStyles, PageHeader, PageImage} from './styles'
import logo from '../../static/404-image.png'

function PageNotFound(props) {
    const [isUser, setIsUser] = useState(false)
    
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setIsUser(true)
        }else{
            setIsUser(false)
        }
    })
    return (
        <>
            <AppBar/>
            <PageNotFoundStyles>
                <header>
                    <PageImage src={logo} alt="404 Image"/>
                    <PageHeader>Well, this is embarassing.</PageHeader>
                    <p>Looks like that page doesn't exist.</p>
                </header>
                <>
                    {
                        isUser? <Link to="/dashboard">Return to Dashboard</Link> : <Link to="/">Return</Link>
                    }
                </>
            </PageNotFoundStyles>
        </>
    );
}

export default PageNotFound;