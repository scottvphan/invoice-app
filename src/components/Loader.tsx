import { RadarSpinner } from 'react-epic-spinners'
import styled, { ThemeProvider } from 'styled-components'
const LoaderContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-100;
`
const LoadingHeading = styled.h1`
    font-size:40px;
    color:${(theme) => theme.theme.loadingColor};
`
export default function Loader({isDarkMode}:any){
    const DarkTheme = {
        loadingColor: "white"
    }
    const LightTheme = {
        loadingColor: "black"
    }
    return(
        <ThemeProvider theme = {isDarkMode ? DarkTheme : LightTheme}>
            <LoaderContainer role='loader'>
                <RadarSpinner color="#9277FF"/>
                <LoadingHeading>Loading...</LoadingHeading>
            </LoaderContainer> 
        </ThemeProvider>
    )
}