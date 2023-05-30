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

export default function InvoiceInfoComponent({ data, isDarkMode }:any) {

    const DarkTheme = {
        paragraphColor: "#DFE3FA"
    }

    const LightTheme ={
        paragraphColor: "#7E88C3"
    }
    
    return (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <InvoiceInfoContainer>
                <InvoiceIdContainer>
                    <InvoiceId>
                        <StyledSpan>#</StyledSpan>{data.id ? data.id : "Missing ID"}
                    </InvoiceId>
                    <StyledParagraph>{data.description ? data.description : "Missing Description"}</StyledParagraph>
                </InvoiceIdContainer>
                <InvoiceAddressContainer>
                    <AddressParagraph>{data.senderAddress.street ? data.senderAddress.street : "Missing Sender Street"}</AddressParagraph>
                    <AddressParagraph>{data.senderAddress.city ? data.senderAddress.city : "Missing Sender City"}</AddressParagraph>
                    <AddressParagraph>{data.senderAddress.postCode ? data.senderAddress.postCode : "Missing Sender Post Code"}</AddressParagraph>
                    <AddressParagraph>{data.senderAddress.country ? data.senderAddress.country : "Missing Sender Country"}</AddressParagraph>
                </InvoiceAddressContainer>
                <InvoiceDateContainer>
                    <StyledParagraph>Invoice Date</StyledParagraph>
                    <SmallHeading>{data.createdAt ? data.createdAt : "Missing Creation Date"}</SmallHeading>
                </InvoiceDateContainer>
                <InvoicePaymentDueContainer>
                    <StyledParagraph>Payment Due</StyledParagraph>
                    <SmallHeading>{data.paymentDue ? data.paymentDue : "Missing Due Date"}</SmallHeading>
                </InvoicePaymentDueContainer>
                <InvoiceBillingContainer>
                    <StyledParagraph>Bill To</StyledParagraph>
                    <SmallHeading>{data.clientName}</SmallHeading>
                    <StyledParagraph>{data.clientAddress.street ? data.clientAddress.street : "Missing Client Street"}</StyledParagraph>
                    <StyledParagraph>{data.clientAddress.city ? data.clientAddress.city : "Missing Client City"}</StyledParagraph>
                    <StyledParagraph>{data.clientAddress.postCode ? data.clientAddress.postCode : "Missing Client Post Code"}</StyledParagraph>
                    <StyledParagraph>{data.clientAddress.country ? data.clientAddress.country : "Missing Client Country"}</StyledParagraph>
                </InvoiceBillingContainer>
                <InvoiceEmailContainer>
                    <StyledParagraph>Sent to</StyledParagraph>
                    <SmallHeading>{data.clientEmail ? data.clientEmail : "Missing Email"}</SmallHeading>
                </InvoiceEmailContainer>
            </InvoiceInfoContainer>
        </ThemeProvider>
    );
}
