import { Link } from "react-router-dom"
import styled from "styled-components"

const NotFoundContainer = styled.div`
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    gap:20px;
`
const StyledLink = styled(Link)`
    background-color: #7C5DFA;
    border-radius: 24px;
    padding:20px;
    text-decoration: none;
    color:white;
    width:40%;
    &:hover{
        background-color:#9277FF;
    }
`
export default function NotFound() {
    return (
        <NotFoundContainer>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <StyledLink to="/">Return to Home</StyledLink>
        </NotFoundContainer>
    )
}