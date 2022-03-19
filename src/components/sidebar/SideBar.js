import React from 'react';
import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from 'libs/firebase';

import {MdSpaceDashboard} from 'react-icons/md'
import {IoLogOutOutline} from 'react-icons/io5'

/* import {ProductOptions} from './ProductOptions'; */

import {IconButton, IconLabel} from '../../ui/buttons'
import {SideBarStyles, SideBarItems, SideBarItemGroup, SideBarItem} from './styles'

function SideBar(props) {
    function onLogoutRequest(e){
        signOut(auth)
    }

    return (
        <SideBarStyles>
            <SideBarItems>
                <SideBarItemGroup>
                    <IconButton>
                        <MdSpaceDashboard size="1.5rem"/>
                        <IconLabel>Dashboard</IconLabel>
                    </IconButton>
                </SideBarItemGroup>

                <SideBarItemGroup>
                    {/* <ProductOptions/> */}
                </SideBarItemGroup>

                <SideBarItemGroup>
                    <SideBarItem>
                        <Link to="/"><IconButton onClick={onLogoutRequest}><IoLogOutOutline size="1.5rem"/>Sign Out</IconButton></Link>
                    </SideBarItem>
                </SideBarItemGroup>
            </SideBarItems>
        </SideBarStyles>
    );
}

export default SideBar;