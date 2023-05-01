import styled from "styled-components";

export const StyledNav = styled.nav`
    display:flex;
    background: #1E2139;
    flex-direction: column;
    border-radius: ${(theme) => theme.theme.borderRadius};
    justify-content: center;
    align-items: center;
    z-index:5;
    @media screen and (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        border-radius:0;
        position:static;
    }
`;
    
export const StyledAvatar = styled.img`
    width: 75%;
    @media screen and (max-width:1024px) {
        width: 50%;
    }
    border-radius: 50%;
    border-top: 1px solid #494E6E;
    background-color: black;
    opacity:1;
    transition:0.5s;
    user-select: none;
    &:hover{
        cursor:pointer;
        opacity:0.5;
        transition:0.5s;
    }
`

export const LogoContainer = styled.div`
    background:#7C5DFA;
    flex-grow:0;
    @media screen and (max-width: 768px) {
        height:100%;
        width:15%;
        display:flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: ${(theme) => theme.theme.logoRadius};
        border-bottom-right-radius: ${(theme) => theme.theme.logoRadius};
    }
    @media screen and (max-width: 1024px) {
        width:10%;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:20px;
        border-top-right-radius:20px;
        border-bottom-right-radius:20px;
    }
        height:10%;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: ${(theme) => theme.theme.logoRadius};
        border-bottom-right-radius: ${(theme) => theme.theme.logoRadius};
`

export const StyledLogo = styled.img`
    height:50%;
`

export const AvatarContainer = styled.div`
    flex-grow:0;
    display:flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1024px) {
        padding:0px 20px;
        border-left:1px solid #494E6E;
        height:100%;
    }
    @media screen and (min-width: 1025px) {
        border-top:1px solid #494E6E;
        width:100%;
        padding:20px 0px;
    }
    
`

export const ThemeSwitchIcon = styled.img`
    height:30px;
    transition:0.4s;
    transform: scale(1);
    user-select: none;
    @media screen and (max-width:1024px){
        height:20px;
    }
    &:hover{
        cursor:pointer;
        transform: scale(1.3);
        transition:0.4s;
    }
`

export const ColorThemeSwitchContainer = styled.div`
    display:flex;
    margin-bottom:10px;
    flex-grow:2;
    align-items: flex-end;
    justify-content:center;
    @media screen and (max-width:1024px){
        margin-right:10px;
        flex-grow:1;
        align-items: flex-start;
        margin-bottom:0;
        justify-content: flex-end;
    }
`