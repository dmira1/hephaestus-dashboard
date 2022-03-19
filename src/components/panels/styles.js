import styled from 'styled-components';

const PanelStyles = styled.section`
    flex:1;
    height: 100vh;
    background: rgba(255,255,255,1);
    margin: 1.5rem;
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

const PanelContent = styled.p`
    margin: ${props => props.margin || "3rem"};
`;

const ProductContainer = styled.ul`

`;

const Product = styled.li`

`;

export {PanelStyles, PanelHeading, PanelContent, ProductContainer, Product}