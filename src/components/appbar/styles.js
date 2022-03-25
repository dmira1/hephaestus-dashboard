import styled from 'styled-components';

const AppBarStyles = styled.nav`
    width: 100vw;
    position: relative;
    color: white;
    padding: 0.5rem;
    background: rgba(139,0,0,1);
    z-index: 1;
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li`
    :last-of-type {
        margin-right: 1rem;
    }
`;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.25rem;
    align-items: center;
`

const AppBarTitle = styled.h1`
    font-weight: 600;
    font-size: 1.5rem;
`;


export {AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup, AppBarTitle}
