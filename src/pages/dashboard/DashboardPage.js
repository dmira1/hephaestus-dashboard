import React from 'react';
import {AppBar} from '../../components/appbar'
import { SideBar } from '../../components/sidebar';
import { Panels } from '../../components/panels';
import '../../styles/DashboardStyles.scss'

function DashboardPage(props) {
    return ( 
        <>
            <AppBar/>
            <div className='dashboardContents'>
                <SideBar/>
                <Panels/>
            </div>
        </>
    );
}

export default DashboardPage;