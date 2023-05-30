import { v4 as uuidv4 } from "uuid"
import styled from "styled-components";
import { SmallHeading, SmallParagraph, Paragraph } from "./StyledComponents";
import SVG from "react-inlinesvg/esm";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import { useLayoutContext } from "./Layout";
import { InvoiceComponentProps } from "../Types";

interface SVGProps {
    color: string;
}
const InvoiceContainer = styled.div`
    display:flex;
    background: ${(theme) => theme.theme.invoiceBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    align-items: center;
    padding:10px 50px;
    justify-content: space-between;
    height:72px;
    transform: scale(1);
    transition:0.4s;
    &:hover{
        transform: scale(1.05);
        transition:0.4s;
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        padding:10px;
    }
    @media screen and (max-width:425px) {
        display:grid;
        padding:20px;
        height:80%;
        grid-template-areas: 
        "a b"
        "c d"
        "e d"
        ;
    }
`
const InvoiceId = styled(SmallHeading)`
    @media screen and (max-width:425px) {
        font-size:18px;
        grid-area:a;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`
const InvoiceDueDate = styled(SmallParagraph)`
    color:${(theme) => theme.theme.invoiceDueDateColor};
    @media screen and (max-width:425px){
        font-size:14px;
        grid-area:c;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`
const InvoicePaymentReciever = styled(Paragraph)`
    @media screen and (max-width:425px){
        font-size:16px;
        grid-area:b;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`
const StyledSpan = styled.span`
    color:#7E88C3;
`
const InvoicePaymentAmount = styled(SmallHeading)`
    @media screen and (max-width:425px){
        font-size:18px;
        grid-area:e;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`
const PaymentStatus = styled.div`
    grid-area:d;
    display:flex;
    align-items: center;
    gap:5px;
    border-radius: 6px;
    background-color:${({ color }) => color};
    width:100px;
    justify-content: center;
    text-transform: capitalize;
    @media screen and (max-width:768px) {
        width:80px;
        font-size:12px;
    }
    @media screen and (min-width:1025px){
        width:8%;
    }
`
const RightArrow = styled(SVG)`
    @media screen and (max-width:425px) {
        display:none;
    }
    @media screen and (min-width:1025px){
        width:2%;
    }
`

const StyledSVG = styled(SVG)<SVGProps>`
    width: 8px;
    height: 8px;
    & circle {
        fill:${({ color }) => color}
    }
`;
const PaymentStatusText = styled(SmallHeading)`

    color:${({ color }) => color};
`
const MappedInvoiceContainer = styled.div`
    display:grid;
    gap:20px;
`

const DarkTheme = {
    invoiceBg:"#1E2139",
    invoiceDueDateColor:"#DFE3FA",
}
const LightTheme = {
    invoiceBg: "#FFF",
    invoiceDueDateColor:"#858BB2",
}

export default function InvoiceComponent({id, paymentDue, clientName, total, paymentColor, status}: InvoiceComponentProps){
    const { isDarkMode } = useLayoutContext()

        return(
            <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
                <InvoiceContainer>
                    <InvoiceId><StyledSpan>#</StyledSpan>{id ? id : "Missing ID"}</InvoiceId>
                    <InvoiceDueDate>{paymentDue ? "Due " + moment(paymentDue).format('MMM Do YY') : "Missing Due Date"}</InvoiceDueDate>
                    <InvoicePaymentReciever>{clientName ? clientName : "Missing Client Name"}</InvoicePaymentReciever>
                    <InvoicePaymentAmount>{total ? "$ " + (total).toFixed(2) : "Missing Total Amount"}</InvoicePaymentAmount>
                    <PaymentStatus color={paymentColor+'1A'}>
                        <StyledSVG 
                            color={paymentColor} 
                            src='\assets\icon-oval.svg' 
                        />
                        <PaymentStatusText color={paymentColor}>{status ? status : "Missing Status"}</PaymentStatusText>
                    </PaymentStatus>
                    <RightArrow src="\assets\icon-arrow-right.svg" />
                </InvoiceContainer>
            </ThemeProvider>
        )
}