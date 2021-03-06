import React from 'react';
import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from 'libs/firebase';

import {MdSpaceDashboard} from 'react-icons/md'
import {IoLogOutOutline} from 'react-icons/io5'

import ProductOptions from './ProductOptions';

import {IconButton, IconLabel} from '../../ui/buttons'
import {SideBarStyles, SideBarItemGroup, SideBarItem, SideBarLogOut} from './styles'

function SideBar(props) {
    function onLogoutRequest(e){
        signOut(auth)
    }

    return (
        <SideBarStyles>
            <SideBarItemGroup>
                <SideBarItem>
                    <MdSpaceDashboard size="1.5rem"/>
                    <IconLabel>Dashboard</IconLabel>
                </SideBarItem>

                <ProductOptions/>
                
                <SideBarLogOut>
                    <Link to="/"><IconButton onClick={onLogoutRequest}><IoLogOutOutline size="1.5rem"/>Sign Out</IconButton></Link>
                </SideBarLogOut>
            </SideBarItemGroup>
        </SideBarStyles>
    );
}

export default SideBar;