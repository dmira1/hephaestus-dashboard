import styled from 'styled-components';

const ProductCardStyles = styled.aside`
    max-width: 320px;
    background-color: #f8fafc;
    height: 340px;
    padding: 1rem;
    margin: 0.5rem;
    justify-content:space-evenly;
    `

const ProductCardImage = styled.img`
    width: 320px;
    height: 200px;
    object-fit: cover;
`
const ProductCardName = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: -0.5px;
    color: #808080;
    word-wrap: break-word;
`;

const ProductCardPrice = styled.p`
    font-size: 1.25rem;
    font-weight: 100;
    letter-spacing: -1px;
    color: #64748b;
    margin-top: -0.3rem;
    margin-bottom: 0.25rem;
`;

const ProductCardDescription = styled.p`
    font-size: 13px;
    color: #94a3b8;
    word-wrap: break-word;
`
export {ProductCardStyles, ProductCardDescription, ProductCardName, ProductCardPrice, ProductCardImage}