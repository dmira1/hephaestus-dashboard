import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar';
import {AllProductsPanel, AddProductsPanel} from 'components/panels';
import {Panels} from 'components/panels'
import { DashboardPageStyles } from './styles';
import '../../styles/DashboardStyles.scss'


function DashboardPage(props) {
    const [isUser, setIsUser] = useState(false)
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user)=>{
        if (user) {
            setIsUser(true)
        }else{
            setIsUser(false)
            navigator('/')
        }
    });

    if(isUser){
        return ( 
            <>
                <AppBar/>
                <div className='dashboardContents'>
                <DashboardPageStyles>
                    <SideBar/>
                    <AllProductsPanel/>
                </DashboardPageStyles>
                </div>
            </>
        );
    }else{
        return null
    }

}

export default DashboardPage;