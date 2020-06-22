import styled from "styled-components"

export const HamburgerIcon = styled.div`
display: block;
width: 30px;
z-index: 1000;
cursor: pointer;

:after,
:before,
div {
    background-color: ${props => props.theme.colors.textDrak};
    border-radius: 2px;
    content: '';
    display: block;
    height: 4px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
}
`