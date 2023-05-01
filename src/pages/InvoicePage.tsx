import styled, { ThemeProvider } from "styled-components"
import { EditButton, DeleteButton, MainButton, Paragraph, StyledLink } from "../components/StyledComponents"
import SVG from 'react-inlinesvg'
import InvoiceInfoHeader from "../components/InvoiceInfoHeader"
import InvoiceInfoComponent from "../components/InvoiceInfoComponent"
// import InvoiceInfoComponent from "../components/InvoiceInfoComponentBackup"
import InvoiceBilling from "../components/InvoiceBilling"
import { useState, useEffect } from 'react';
import WarningModal from "../components/WarningModal"
import { useLayoutContext } from "../components/Layout"
import { useLocation, useNavigate } from "react-router-dom"

const InvoiceInfoPageContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media screen and (max-width:425px) {
    }
    @media screen and (max-width: 768px){
    }
    @media screen and (max-width: 1024px){
        margin-top:50px;
    }
`

const LeftArrow = styled(SVG)`
`

const InvoiceGoBackContainer = styled.div`
`

const InvoiceGoBack = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 60vw;
    padding: 20px 50px;
    @media screen and (max-width:1024px){
        padding: 10px;
    }
    @media screen and (max-width:700px){
        width: 90vw;
    }
    @media screen and (max-width:425px){
        padding: 5px;
    }
`

const InvoiceMobileBtnContainer = styled.div`
    display: none;
    width: 100vw;
    @media screen and (max-width:425px) {
        background: ${({ theme }) => theme.invoiceBg};
        display: flex;
        padding: 10px 0;
        justify-content: space-around;    
    }
    transition: 0.4s;
`

const buttonStyles = `
    padding: 10px;
    font-size: 12px;
    @media screen and (max-width: 270px) {
        padding: 10px;
        font-size: 12px;
    }
`

const EditBtn = styled(EditButton)`
    ${buttonStyles}
`

const DeleteBtn = styled(DeleteButton)`
    ${buttonStyles}
`

const MainBtn = styled(MainButton)`
    white-space: nowrap;
    ${buttonStyles}
`

const InvoiceInfoComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.invoiceBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`

const InvoiceHeaderContainer = styled.div`
    flex-direction: column;
    background: ${({ theme }) => theme.invoiceHeaderBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`

const EditedLink = styled(StyledLink)`
    color:inherit;
    text-decoration:none;
    display:flex;
    align-items: center;
    width:10%;
    gap:5px;
    flex-wrap:nowrap;
    @media screen and (max-width:1024px) {
        width:30%;
    }
`

const StyledEditBtn = styled(EditBtn)`
    background: ${({ theme }) => theme.editBtnBg};
    color: ${({theme}) => theme.editBtnColor};
    &:hover{
        background: ${({ theme }) => theme.editBtnBgHover};
        color: ${({theme}) => theme.editBtnColorHover};
    }
`

export default function Invoice(props:any){
    const [isWarning, setIsWarning] = useState(false)
    const { isDarkMode, setIsFormEdit, setIsFormOpen, setInvoiceData, invoiceData } = useLayoutContext() 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dataParam = queryParams.get("data");
    const data = dataParam ? JSON.parse(dataParam) : null;
    const invoicedata = data
    const navigate = useNavigate()

    useEffect(() =>{
        setInvoiceData(data)
    }, [])
    
    function handleWarning(){
        setIsWarning(isWarning => !isWarning)
    }

    const DarkTheme = {
        invoiceBg: "#1E2139",
        editBtnBg: "#252945",
        editBtnBgHover: "#252945",
        editBtnColor:"#DFE3FA",
        editBtnColorHover:"#7E88C3",
    }

    const LightTheme = {
        invoiceBg: "#FFF",
        editBtnBg: "#F9FAFE",
        editBtnBgHover: "#FFFFFF",
        editBtnColor:"#7E88C3",
        editBtnColorHover:"#DFE3FA",
    }

    function handleEdit(){
        setIsFormEdit(true)
        setIsFormOpen(true)
    }

    function handleStatus(){
        const filteredData = props.data.filter((invoiceData:any) => {
            if(!invoiceData.id.includes(data.id)){
                return invoiceData
            }
        })
        const result = {...data, status:'paid'}
        const testResult = [result, ...filteredData]
        props.setData(testResult)
        localStorage.setItem('data', JSON.stringify(testResult))
        navigate('..')
    }
    useEffect(() =>{
    }, [])
    return(
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <InvoiceInfoPageContainer>
                {isWarning && <WarningModal data = {props.data} setData = {props.setData} invoiceData = {data} isDarkMode = {isDarkMode} handleWarning={handleWarning} />}
                <InvoiceGoBackContainer>
                    <InvoiceGoBack>
                        <EditedLink to={"/"}>
                            <LeftArrow src="\assets\icon-arrow-left.svg" />
                            <Paragraph>Go Back</Paragraph>
                        </EditedLink>
                    </InvoiceGoBack>
                </InvoiceGoBackContainer>
                <InvoiceHeaderContainer>
                    <InvoiceInfoHeader handleEdit = {handleEdit} setIsFormOpen = {setIsFormOpen} setIsFormEdit = {setIsFormEdit} data = {data} isDarkMode = {isDarkMode} handleWarning = {handleWarning} handleStatus = {handleStatus} />
                </InvoiceHeaderContainer>
                <InvoiceInfoComponentContainer>
                    <InvoiceInfoComponent data = {data} isDarkMode = {isDarkMode} />
                    <InvoiceBilling data = {data} isDarkMode = {isDarkMode} />
                </InvoiceInfoComponentContainer>
                <InvoiceMobileBtnContainer>
                    <StyledEditBtn onClick={handleEdit}>Edit</StyledEditBtn>
                    <DeleteBtn onClick={handleWarning}>Delete</DeleteBtn>
                {(data.status !== "paid" && Object.values(data).some((val) => val === '')) ? (
                    <MainBtn disabled>Mark as Paid</MainBtn>
                ) : (
                    <MainBtn onClick={handleStatus}>Mark as Paid</MainBtn>
                )}
                </InvoiceMobileBtnContainer>
            </InvoiceInfoPageContainer>
        </ThemeProvider>
    )
}