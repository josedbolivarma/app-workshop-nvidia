import styled from "styled-components";

export const InputSearch = styled.input`
    padding: .8rem;
    border-radius: 20px;
    width: 100%;
    border: 1px solid #CCC;
    color: #444;
`;

export const BackButton = styled.button`
border: 2px solid #76b900;
color: #76b900;
padding: 12px 15px 10px 10px;
background: #fff;
font-family: DINPro !important;
font-weight: bold !important;
text-transform: uppercase;
width: ${props => props.width};
textAlign: center;
cursor: pointer;
`;