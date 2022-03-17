import React from 'react';
import {Link} from 'react-router-dom';

import {signOut} from 'firebase/auth';
import {auth} from 'libs/firebase';

import {MdSpaceDashboard, MdDesktopWindows, MdContacts} from 'react-icons/md'
import {HiDesktopComputer} from 'react-icons/hi'
import {IoCube, IoBuild, IoLogoWebComponent, IoInformationCircle, IoLogOutOutline} from 'react-icons/io5'
import {GiComputerFan, GiLightningArc} from 'react-icons/gi';

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
                    <SideBarItem>
                        <IconButton>
                            <HiDesktopComputer size="1.5rem"/>
                            <IconLabel><Link to="/dashboard">All Products</Link></IconLabel>
                        </IconButton>
                        <IconButton>
                            <MdDesktopWindows size="1.5rem"/>
                            <IconLabel><Link to="add">Add Products</Link></IconLabel>
                        </IconButton>
                    </SideBarItem>
                </SideBarItemGroup>

                <SideBarItemGroup>
                    <SideBarItem>
                        <IconButton><IoCube size="1.5rem"/>Chassis</IconButton>
                        <IconButton><GiComputerFan size="1.5rem"/>Cooling</IconButton>
                        <IconButton><IoLogoWebComponent size="1.5rem"/>Other Components</IconButton>
                        <IconButton><GiLightningArc size="1.5rem"/>Lighting</IconButton>
                        <IconButton><IoBuild size="1.5rem"/>Create Your Own</IconButton>
                    </SideBarItem>
                </SideBarItemGroup>

                <SideBarItemGroup>
                    <SideBarItem>
                        <IconButton><IoInformationCircle size="1.5rem"/>About</IconButton>
                        <IconButton><MdContacts size="1.5rem"/>Contact Us</IconButton>
                    </SideBarItem>
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