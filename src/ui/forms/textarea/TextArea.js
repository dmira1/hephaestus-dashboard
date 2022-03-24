import styled from 'styled-components';

const TextArea = styled.textarea`
    width: ${props => props.width || "100%"};
    font-size: ${props => props.fs || '14px'};
    color: ${props => props.color || "#475569" };
    padding: ${props => props.padding || '5px'};
    margin: ${props => props.margin || '0'};
    border:${props => props.border || "none"};;
    border-radius: ${props => props.radius || "3px"};;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.19);
`;

export default TextArea;