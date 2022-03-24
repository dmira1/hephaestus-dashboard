import styled from 'styled-components';

const SideBarStyles = styled.section`
    width: 289px;
    padding: 1rem;
    background: rgba(130,0,0,1);
`;

const SideBarItemGroup = styled.ul`
    padding: 0.5rem 0;
    
`;

const SideBarItem = styled.li`
    list-style: none;
    color: white;
    display: flex;
    gap: 0.75rem;

    border: none;
    background-color: transparent;
    width: 100%;
    padding: 1rem;
`;

const SideBarLogOut = styled.li`
    list-style: none;
`

export {SideBarStyles, SideBarItemGroup, SideBarItem, SideBarLogOut}