import styled from "styled-components"
import { LargeHeading, MainButton, SmallParagraph } from '../components/StyledComponents'
import { ThemeProvider } from "styled-components"
const EmptyContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    text-align: center;
`
const EmptyImg = styled.img`
    width:40%;
    @media screen and (max-width:1440px) {
        width:50%
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`
const TextContainer = styled.div`
    width:30%;
    text-align: center;
    @media screen and (max-width:1440px) {
        width:50%
    }
    @media screen and (max-width:1024px) {
        width:40%;
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`
const StyledParagraph = styled(SmallParagraph)`
    font-family: League Spartan;
    font-size:28px;
    text-align:center;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
    color: ${({theme}) => theme.paragraphText};
    @media screen and (max-width:768px) {
        font-size:20px
    }
`
const StyledHeading = styled(LargeHeading)`
    font-size:40px;
    @media screen and (max-width:768px) {
        font-size:30px
    }
`
const StyledSpan = styled.span`
    font-weight:700;
`

export default function EmptyInvoices({isDarkMode}:any){
    
    const DarkTheme = {
        paragraphText: "#DFE3FA"
    }

    const LightTheme = {
        paragraphText: "#888EB0"
    }
    
    return(
        <ThemeProvider theme = {isDarkMode ? DarkTheme : LightTheme}>
            <EmptyContainer>
                <EmptyImg src='\assets\illustration-empty.svg' />
                <TextContainer>
                    <StyledHeading>There is nothing here</StyledHeading>
                    <StyledParagraph>
                        Create an invoice by clicking the <StyledSpan>New Invoice </StyledSpan> 
                        button and get started
                    </StyledParagraph>
                </TextContainer>
            </EmptyContainer>
        </ThemeProvider>
    )
}