import React from 'react';
import {GiAnvilImpact} from 'react-icons/gi'
import {IoPersonOutline, IoSettingsOutline, IoCartOutline, IoMailOutline} from 'react-icons/io5'
import {IconButton} from '../../ui/buttons'
import {AppBarStyles, AppBarItem, AppBarItems, AppBarItemGroup, AppBarTitle} from './styles'

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItemGroup>
                    <AppBarItem><GiAnvilImpact size="2rem" /></AppBarItem>
                    <AppBarItem><AppBarTitle>Hephaestus PC</AppBarTitle></AppBarItem>
                </AppBarItemGroup>
                <AppBarItemGroup>
                    <IconButton>
                        <IoMailOutline size="1.5rem" color='white'/>
                    </IconButton>
                    <IconButton>
                        <IoPersonOutline size="1.5rem" color='white'/>
                    </IconButton>
                    <IconButton>
                        <IoCartOutline size="1.5rem" color='white'/>
                    </IconButton>
                    <IconButton>
                        <IoSettingsOutline size="1.5rem" color='white'/>
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;