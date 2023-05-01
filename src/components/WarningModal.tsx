import styled, { ThemeProvider } from "styled-components"
import { MainHeading, DeleteButton, EditButton  } from "./StyledComponents"
import { json, useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const WarningModalContainer = styled.div`
    width:40vw;
    background: ${(theme) => theme.theme.modalBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding:20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:10;
    display:flex;
    flex-direction:column;
    @media screen and (max-width:768px) {
        width:75vw;
    }
    transition: ease-in 0.3s;
`
const WarningMessage = styled.p`
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: ${(theme) => theme.theme.warningColor};
    @media screen and (min-width:768px) {
        font-size:20px;
    }
`
const Backdrop = styled.div`
    background: rgba(0, 0, 0, 0.65);
    height:100%;
    width:100%;
    position:fixed;
    z-index:5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ButtonContainer = styled.div`
    display:flex;
    justify-content:flex-end;
`
const CancelButton = styled(EditButton)`
    background-color:${(theme) => theme.theme.cancelBtnBg};
    color:${(theme) => theme.theme.cancelBtnColor};
    &:hover{
        background-color:${(theme) => theme.theme.cancelBgHover};
    }
`
export default function WarningModal(props:any){
    const navigate = useNavigate()
    const { isAuthenticated, user} = useAuth0()
    function handleDelete(){
        if(!isAuthenticated){
            const filteredData = props.data.filter((data:any) =>{
                if(data.id !== props.invoiceData.id){
                    return data
                }
            })
            props.setData(filteredData)
            localStorage.setItem('data', JSON.stringify(filteredData))
        } else if(isAuthenticated){
            const filteredData = props.data.filter((data:any) =>{
                if(data.id !== props.invoiceData.id){
                    return data
                }
            })
            props.setData(filteredData)
            localStorage.setItem(`${user?.email}`, JSON.stringify(filteredData))
        }
        navigate('..')
    }

    const DarkTheme = {
        modalBg: "#1E2139",
        cancelBtnColor: "#DFE3FA",
        cancelBtnBg: "#252945",
        cancelBgHover:"#2b2e47",
        cancelColor:"#DFE3FA",
        warningColor:"#DFE3FA",
}
    const LightTheme = {
        modalBg: "#FFF",
        cancelBtnBg: "#DFE3FA",
        cancelBtnColor: "#7E88C3",
        cancelBgHover:"#F9FAFE",
        cancelColor:"#7E88C3",
        warningColor:"#7E88C3",
    }

    return(
        <ThemeProvider theme = {props.isDarkMode ? DarkTheme : LightTheme}>
            <Backdrop>
                <WarningModalContainer>
                    <MainHeading>Confirm Deletion</MainHeading>
                    <WarningMessage>Are you sure you want to delete invoice #{props.invoiceData.id}? This action cannot be undone.</WarningMessage>
                    <ButtonContainer>
                        <CancelButton onClick={props.handleWarning}>Cancel</CancelButton>
                        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
                    </ButtonContainer>
                </WarningModalContainer>
            </Backdrop>
        </ThemeProvider>
    )
}