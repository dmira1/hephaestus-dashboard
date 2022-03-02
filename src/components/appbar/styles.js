import styled from 'styled-components';

const AppBarStyles = styled.nav`
    border-bottom: 1px solid grey;
    padding: 0.3125rem 1rem;
    color: white;
    background: rgba(139,0,0,1);
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
`;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.25rem;
    align-items: center;
    
`;

const AppBarItem = styled.li`
`;

const AppBarTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
`;


export {AppBarStyles, AppBarItems, AppBarItemGroup, AppBarItem, AppBarTitle}
