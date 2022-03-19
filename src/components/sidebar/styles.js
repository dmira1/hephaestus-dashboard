import styled from 'styled-components';

const SideBarStyles = styled.nav`
    
    height: 100vh;
    background: rgba(139,0,0,1);
    box-shadow: 2px 0 4px -2px grey;
`;

const SideBarItems = styled.ul`
`;

const SideBarItemGroup = styled.li`
    border-bottom: 1px solid grey;
    gap: 0.5rem;
    padding: 0.5rem 0;
`;

const SideBarItem = styled.li`
`;

export {SideBarStyles, SideBarItems, SideBarItemGroup, SideBarItem}