import styled from 'styled-components';

const PanelStyles = styled.section`
    flex: 1;
    height: 100vh;
    background: rgba(255,255,255,1);
    padding: 1rem;
`;

const PanelHeading = styled.header`
    h2 {
        background-color: #f8f8f8;
        padding: 0.5rem;
        border-radius: 3px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: #3f3f3f;
    }
`;

const PanelContent = styled.div`
    margin: ${props => props.margin || "0rem"};
`;

const ProductContainer = styled.ul`

`;

const Product = styled.li`

`;


export {PanelStyles, PanelHeading, PanelContent, ProductContainer, Product}