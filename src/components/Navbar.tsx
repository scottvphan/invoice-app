import { ThemeProvider } from "styled-components"
import { 
    StyledNav,
    StyledAvatar,
    LogoContainer,
    StyledLogo,
    AvatarContainer,
    ThemeSwitchIcon,
    ColorThemeSwitchContainer, 
} from "./Navbar.styled"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export default function Navbar(props:any) {
    const navigate = useNavigate()
    function handleChangeTheme(){
        props.setIsDarkMode((prevDarkMode: boolean) => !prevDarkMode)
        const colorScheme = !props.isDarkMode
        localStorage.setItem('colorscheme', colorScheme as unknown as string)
    }
    const open = {
        borderRadius: "0px",
        logoRadius: "0px",
    }
    const closed = {
        borderRadius: "0px 20px 20px 0px",
        logoRadius: "24px",
    }
    const { isAuthenticated, user } = useAuth0();
    const userData = user
    return (
        <ThemeProvider theme={props.isFormOpen ? open : closed}>
            <StyledNav>
                <LogoContainer>
                    <StyledLogo src="\assets\logo.svg" />
                </LogoContainer>
                <ColorThemeSwitchContainer>
                    {props.isDarkMode ? 
                        <ThemeSwitchIcon onClick={handleChangeTheme} src="\assets\icon-moon.svg" /> :
                        <ThemeSwitchIcon onClick={handleChangeTheme} src="\assets\icon-sun.svg" /> 
                    }
                </ColorThemeSwitchContainer>
                <AvatarContainer>
                    {user?.picture ?
                    <StyledAvatar src={user?.picture} />
                    :
                    <StyledAvatar src="\assets\image-avatar.jpg" />
                    }
                </AvatarContainer>
            </StyledNav>
        </ThemeProvider>
    );
}
