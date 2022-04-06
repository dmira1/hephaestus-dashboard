import styled from 'styled-components';

const PanelStyles = styled.section`
    flex: 1;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
    background: rgba(255,255,255,1);
    border-radius: 3px;
    margin: 1rem;
`;

const PanelHeader = styled.header`
    h2 {
        background-color: #A3A3A3;
        padding: 0.5rem;
        border-radius: 3px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: #3f3f3f;
        font-weight: 700;
    }
`;

const PanelContent = styled.div`
    margin: ${props => props.margin || "2rem"};
`

const PanelContentAll = styled.div`
    margin: ${props => props.margin || "0.5rem"};
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`



export {PanelStyles, PanelHeader, PanelContent, PanelContentAll}