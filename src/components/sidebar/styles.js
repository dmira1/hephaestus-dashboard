import styled from 'styled-components';

const SideBarStyles = styled.nav`
    width: 20vw;
    height: 100vh;
    border-right: 1px solid grey;
    background: rgba(139,0,0,1);
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