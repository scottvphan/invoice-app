import styled, {ThemeProvider} from "styled-components"
import { Paragraph, SmallHeading } from "./StyledComponents"

const InvoiceInfoContainer = styled.div`
    display:grid;
    grid-template-areas: 
    "desc . . . addr"
    "desc . . . addr"
    "date bill email email ."
    "due bill . . ."
    ;
    padding:50px;
    justify-content: space-betweeen;
    @media screen and (max-width:1024px){
        padding:10px;
    }
    @media screen and (max-width:425px){
        padding:15px;
        grid-template-areas:
        "desc desc"
        "addr addr"
        "date bill"
        "due bill"
        "email ."
    }
`
const InvoiceIdContainer = styled.div`
    grid-area: desc;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`
const InvoiceAddressContainer = styled.div`
    grid-area: addr;
    justify-self:center;
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`
const InvoiceDateContainer = styled.div`
    grid-area: date;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`
const InvoiceBillingContainer = styled.div`
    grid-area: bill;
    align-self: flex-end;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`
const InvoiceEmailContainer = styled.div`
    justify-self: flex-end;
    grid-area: email;
    @media screen and (max-width:425px){
        justify-self: flex-start;
    }
`
const InvoicePaymentDueContainer = styled.div`
    grid-area: due;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`
const InvoiceId = styled(SmallHeading)`
    @media screen and (max-width:425px) {
        font-size:18px;
    }
    @media screen and (max-width:768px) {
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`

const StyledSpan = styled.span`
    color:#7E88C3;
`

const StyledParagraph = styled(Paragraph)`
    color: ${(theme) => theme.theme.paragraphColor};
`

const AddressParagraph = styled(StyledParagraph)`
    text-align:right;
    @media screen and (max-width: 425px){
        text-align:left;
    }
`

export default function InvoiceInfoComponent(props:any) {

    const DarkTheme = {
        paragraphColor: "#DFE3FA"
    }

    const LightTheme ={
        paragraphColor: "#7E88C3"
    }
    
    return (
        <ThemeProvider theme={props.isDarkMode ? DarkTheme : LightTheme}>
            <InvoiceInfoContainer>
                <InvoiceIdContainer>
                    <InvoiceId>
                        <StyledSpan>#</StyledSpan>{props.data.id ? props.data.id : "Missing ID"}
                    </InvoiceId>
                    <StyledParagraph>{props.data.description ? props.data.description : "Missing Description"}</StyledParagraph>
                </InvoiceIdContainer>
                <InvoiceAddressContainer>
                    <AddressParagraph>{props.data.senderAddress.street ? props.data.senderAddress.street : "Missing Street"}</AddressParagraph>
                    <AddressParagraph>{props.data.senderAddress.city ? props.data.senderAddress.city : "Missing City"}</AddressParagraph>
                    <AddressParagraph>{props.data.senderAddress.postCode ? props.data.senderAddress.postCode : "Missing Post Code"}</AddressParagraph>
                    <AddressParagraph>{props.data.senderAddress.country ? props.data.senderAddress.country : "Missing Country"}</AddressParagraph>
                </InvoiceAddressContainer>
                <InvoiceDateContainer>
                    <StyledParagraph>Invoice Date</StyledParagraph>
                    <SmallHeading>{props.data.createdAt ? props.data.createdAt : "Missing Creation Date"}</SmallHeading>
                </InvoiceDateContainer>
                <InvoicePaymentDueContainer>
                    <StyledParagraph>Payment Due</StyledParagraph>
                    <SmallHeading>{props.data.paymentDue ? props.data.paymentDue : "Missing Due Date"}</SmallHeading>
                </InvoicePaymentDueContainer>
                <InvoiceBillingContainer>
                    <StyledParagraph>Bill To</StyledParagraph>
                    <SmallHeading>{props.data.clientName}</SmallHeading>
                    <StyledParagraph>{props.data.clientAddress.street ? props.data.clientAddress.street : "Missing Street"}</StyledParagraph>
                    <StyledParagraph>{props.data.clientAddress.city ? props.data.clientAddress.city : "Missing City"}</StyledParagraph>
                    <StyledParagraph>{props.data.clientAddress.postCode ? props.data.clientAddress.postCode : "Missing Post Code"}</StyledParagraph>
                    <StyledParagraph>{props.data.clientAddress.country ? props.data.clientAddress.country : "Missing Country"}</StyledParagraph>
                </InvoiceBillingContainer>
                <InvoiceEmailContainer>
                    <StyledParagraph>Sent to</StyledParagraph>
                    <SmallHeading>{props.data.clientEmail ? props.data.clientEmail : "Missing Email"}</SmallHeading>
                </InvoiceEmailContainer>
            </InvoiceInfoContainer>
        </ThemeProvider>
    );
}
