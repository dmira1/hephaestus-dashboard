import React from 'react';
import { Link } from 'react-router-dom';
import {MdSpaceDashboard, MdDesktopWindows, MdContacts} from 'react-icons/md'
import {HiDesktopComputer} from 'react-icons/hi'
import {IoDesktop, IoCube, IoBuild, IoLogoWebComponent, IoInformationCircle, IoLogOutOutline} from 'react-icons/io5'
import {GiComputerFan, GiLightningArc} from 'react-icons/gi';
import {IconButton, IconLabel} from '../../ui/buttons'

import {SideBarStyles, SideBarItems, SideBarItemGroup, SideBarItem} from './styles'

function SideBar(props) {
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
                            <IconLabel>Budget Grade</IconLabel>
                        </IconButton>
                        <IconButton><MdDesktopWindows size="1.5rem"/>Middle Grade</IconButton>
                        <IconButton><IoDesktop size="1.5rem"/>Enthusiast Grade</IconButton>
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
                        <Link to="/"><IconButton><IoLogOutOutline size="1.5rem"/>Sign Out</IconButton></Link>
                    </SideBarItem>
                </SideBarItemGroup>
            </SideBarItems>
        </SideBarStyles>
    );
}

export default SideBar;