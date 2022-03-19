import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {HiDesktopComputer} from 'react-icons/hi';
import {MdDesktopWindows} from 'react-icons/md';
import {GiComputerFan, GiLightningArc} from 'react-icons/gi';
import {IoCube, IoLogoWebComponent} from 'react-icons/io5';

import {IconButton} from '../../ui/buttons';


const ProductOptionStyles = styled.ul`

`;

function ProductOptions(props) {
    return ( 
        <ProductOptionStyles>
            <li>
                <Link to="/dashboard"><IconButton><HiDesktopComputer size="1.5rem"/>All Products</IconButton></Link>
            </li>
            <IconButton><IoCube size="1.5rem"/>Chassis</IconButton>
            <IconButton><GiComputerFan size="1.5rem"/>Cooling</IconButton>
            <IconButton><IoLogoWebComponent size="1.5rem"/>Other Components</IconButton>
            <IconButton><GiLightningArc size="1.5rem"/>Lighting</IconButton>
            <li>
                <Link to="add"><IconButton><MdDesktopWindows size="1.5rem"/>Add Product</IconButton></Link>
            </li>
        </ProductOptionStyles>
    );
}

export default ProductOptions;