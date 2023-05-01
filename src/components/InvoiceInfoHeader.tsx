import styled, { ThemeProvider } from "styled-components"
import SVG from 'react-inlinesvg'
import { SmallHeading, EditButton, MainButton, DeleteButton, SmallParagraph } from "./StyledComponents"

interface SVGProps {
    color: string;
}
const InvoiceInfoHeaderContainer = styled.div`
    background: ${(theme) => theme.theme.invoiceHeaderBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    display:flex;
    justify-content:space-between;
    padding:20px 50px;
    @media screen and (max-width:1024px){
        padding:10px;
    }
    @media screen and (max-width:425px){
        padding:5px;
    }
`
const LeftInvoiceInfoContainer = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    @media screen and (max-width:425px) {
        justify-content: space-between;
        width:100%;
    }
`
const RightInvoiceInfoContainer = styled.div`
    display:flex;
    align-items: center;
    gap:10px;
    @media screen and (max-width:425px) {
        display:none;
    }
`
const PaymentStatus = styled.div`
    display:flex;
    align-items: center;
    gap:5px;
    border-radius: 6px;
    background-color:${({ color }) => color};
    width:100px;
    justify-content: center;
    text-transform: capitalize;
    @media screen and (max-width:768px) {
        width:70px;
        margin-right:5px;
    }
    @media screen and (max-width:425px) {
        width:100px;
        padding:0 5px;
    }
`
const StyledSVG = styled(SVG)<SVGProps>`
    width: 8px;
    height: 8px;
    @media screen and (max-width:425px) {
        width:5px;
        height:5px;
    }
    & circle {
        fill:${({ color }) => color}
    }
`;
const PaymentStatusText = styled(SmallHeading)`
    color:${({ color }) => color};
`

const InvoiceGoBackContainer = styled.div`
    display:flex;
    align-items: center;
    gap:15px;
    width:90%;
    padding: 10px 20px;
`
const EditBtn = styled(EditButton)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`
const DeleteBtn = styled(DeleteButton)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`
const MainBtn = styled(MainButton)`
    white-space:nowrap;
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`

const StatusHeading = styled(SmallParagraph)`
    color: ${(theme) => theme.theme.statusHeading};
`

const StyledEditBtn = styled(EditBtn)`
    background: ${({ theme }) => theme.editBtnBg};
    color: ${({theme}) => theme.editBtnColor};
    &:hover{
        background: ${({ theme }) => theme.editBtnBgHover};
        color: ${({theme}) => theme.editBtnColorHover};
    }
`
export default function InvoiceInfoHeader(props:any){

    const DarkTheme = {
        invoiceHeaderBg: "#1E2139",
        statusHeading:"#DFE3FA",
        editBtnBg: "#252945",
        editBtnBgHover: "#FFFFFF",
        editBtnColor:"#DFE3FA",
        editBtnColorHover:"#7E88C3",
}

    const LightTheme = {
        invoiceHeaderBg: "#FFF",
        statusHeading:"#858BB2",
        editBtnBg: "#F9FAFE",
        editBtnBgHover: "#DFE3FA",
        editBtnColor:"#7E88C3",
        editBtnColorHover:"#7E88C3",
    }
    
    let paymentColor = 'black'
    if(props.data.status === 'paid'){
        paymentColor = '#33D69F'
    }else if(props.data.status === 'pending'){
        paymentColor = '#FF8F00'
    }else if(props.data.status === 'draft'){
        paymentColor = '#DFE3FA'
    }

    return(
        <ThemeProvider theme={props.isDarkMode ? DarkTheme : LightTheme}>
            <InvoiceInfoHeaderContainer>
                <LeftInvoiceInfoContainer>
                    <StatusHeading>Status</StatusHeading>
                    <PaymentStatus color={paymentColor + '1A'}>
                        <StyledSVG 
                            color={paymentColor} 
                            src='\assets\icon-oval.svg' 
                        />
                        <PaymentStatusText color={paymentColor}>{props.data.status}</PaymentStatusText>
                    </PaymentStatus>
                </LeftInvoiceInfoContainer>
                <RightInvoiceInfoContainer>
                    <StyledEditBtn onClick={props.handleEdit}>Edit</StyledEditBtn>
                    <DeleteBtn onClick={props.handleWarning}>Delete</DeleteBtn>
                {(props.data.status !== "paid" && Object.values(props.data).some((val) => val === '')) ? (
                    <MainBtn disabled>Mark as Paid</MainBtn>
                ) : (
                    <MainBtn onClick={props.handleStatus}>Mark as Paid</MainBtn>
                )}
                </RightInvoiceInfoContainer>
            </InvoiceInfoHeaderContainer>
        </ThemeProvider>
    )
}