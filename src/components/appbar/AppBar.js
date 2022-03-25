import React from 'react';
import {GiAnvilImpact} from 'react-icons/gi'
import {IoPersonOutline, IoSettingsOutline, IoMailOutline} from 'react-icons/io5'
import {IconButton} from '../../ui/buttons'
import {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup, AppBarTitle} from './styles'

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItemGroup>
                    <GiAnvilImpact size="2rem" />
                    <AppBarTitle>Hephaestus PC</AppBarTitle>
                </AppBarItemGroup>
                <AppBarItemGroup>
                    <AppBarItem>
                        <IconButton>
                            <IoMailOutline size="1.5rem" color='white'/>
                        </IconButton>
                    </AppBarItem>
                    <AppBarItem>
                        <IconButton>
                            <IoPersonOutline size="1.5rem" color='white'/>
                        </IconButton>
                    </AppBarItem>
                    <AppBarItem>
                        <IconButton>
                            <IoSettingsOutline size="1.5rem" color='white'/>
                        </IconButton>
                    </AppBarItem>
                </AppBarItemGroup>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;