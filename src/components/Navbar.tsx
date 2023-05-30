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
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, onValue, push, child, off, update } from "firebase/database";

export default function Navbar({ isDarkMode, setIsDarkMode, isFormOpen }:any) {
    const navigate = useNavigate()

    const firebaseConfig = {
        apiKey: "AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",
        authDomain: "invoice-app-b1eb0.firebaseapp.com",
        databaseURL: "https://invoice-app-b1eb0-default-rtdb.firebaseio.com",
        projectId: "invoice-app-b1eb0",
        storageBucket: "invoice-app-b1eb0.appspot.com",
        messagingSenderId: "730679038015",
        appId: "1:730679038015:web:57b0f244fffde30b77e88a",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function handleChangeTheme(){
        if(!isAuthenticated){
            setIsDarkMode((prevDarkMode: boolean) => !prevDarkMode)
            const colorScheme = !isDarkMode
            localStorage.setItem('colorscheme', colorScheme as unknown as string)
        } else if(isAuthenticated && user?.email){
            setIsDarkMode((prevDarkMode: boolean) => !prevDarkMode)
            const colorScheme = {
                isDarkMode: !isDarkMode
            }
            const replacedEmail = user?.email.replace(".", ",");
            const colorSchemeRef = ref(
                database,
                `users/${replacedEmail}`
            );
            update(colorSchemeRef, colorScheme)
        }
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
    return (
        <ThemeProvider theme={isFormOpen ? open : closed}>
            <StyledNav>
                <LogoContainer>
                    <StyledLogo src="\assets\logo.svg" />
                </LogoContainer>
                <ColorThemeSwitchContainer>
                    {isDarkMode ? 
                        <ThemeSwitchIcon role="theme-change-button" onClick={handleChangeTheme} src="\assets\icon-moon.svg" /> :
                        <ThemeSwitchIcon role="theme-change-button" onClick={handleChangeTheme} src="\assets\icon-sun.svg" /> 
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
