import { MainParagraph, MainHeading, MainButton, SmallParagraph } from "./StyledComponents";
import styled, {ThemeProvider} from "styled-components";
import Dropdown from "./Dropdown";
import { useLayoutContext } from "./Layout";
import { useEffect } from "react";
import { InvoiceHeaderProps } from "../Types";

const StyledContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`

const InvoiceTextContainer = styled.div`
`

const InvoiceInputContainer = styled.div`
    display:flex;
    align-items: center;
    width:45%;
    @media screen and (max-width:1024px){
        height:10vh;
    }
    @media screen and (max-width:768px){
        height:7vh;
    }
    @media screen and (max-width:425px){
        width:75%;
    }
`

const StyledPlusSign = styled.img`
    padding:10px;
    height:15px;
    width:15px;
    background-color: white;
    border-radius: 50%;
    @media screen and (max-width:1024px){
        padding:5px;
        height:10px;
        width:10px;
    }
    @media screen and (max-width:425px){
        padding:5px;
        height:8px;
        width:8px;
    }
`

const NewInvoiceBtn = styled(MainButton)`
    padding:10px 5px;
    gap:10px;
    @media screen and (max-width:425px){
        gap:2px;
    }
`
const InvoiceHeading = styled(MainHeading)`
    @media screen and (max-width:425px){
        font-size:20px;
    }
`
const InvoiceData = styled(MainParagraph)`
    color:${(theme) => theme.theme.invoiceDataColor};
    @media screen and (max-width:425px){
        font-size:12px;
    }
`
export default function InvoiceHeader({filteredData,isOpen, setIsOpen, isDraft, setIsDraft, isPending, setIsPending, isPaid, setIsPaid, isDarkMode, setIsFormOpen}:InvoiceHeaderProps){
    function handleNewInvoice(){
        setIsFormOpen(true)
    }

    const DarkTheme = {
        invoiceDataColor:"#DFE3FA",
    }

    const LightTheme = {
        invoiceDataColor:"#888EB0",
    }
    
    const DropdownProps = {
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        isDraft: isDraft,
        setIsDraft: setIsDraft,
        isPending: isPending,
        setIsPending: setIsPending,
        isPaid: isPaid,
        setIsPaid: setIsPaid,
    }
    return(
        <ThemeProvider theme = {isDarkMode ? DarkTheme : LightTheme}>
            <StyledContainer>
                <InvoiceTextContainer>
                    <InvoiceHeading>Invoices</InvoiceHeading>
                    {filteredData.length === 0 ?
                    <InvoiceData>
                    {isDraft && isPaid && isPending ? (
                        "No invoices"
                    ) : isDraft && isPaid ? (
                        "No draft or paid invoices"
                    ) : isDraft && isPending ? (
                        "No draft or pending invoices"
                    ) : isPaid && isPending ? (
                        "No paid or pending invoices"
                    ) : isDraft ? (
                        "No draft invoices"
                    ) : isPaid ? (
                        "No paid invoices"
                    ) : isPending ? (
                        "No pending invoices"
                    ) : "No invoices selected"}
                    </InvoiceData>
                    :
                    <InvoiceData>
                        {`There are ${filteredData.length} total invoices`}
                    </InvoiceData>
                    }
                </InvoiceTextContainer>
                <InvoiceInputContainer>
                    <Dropdown {...DropdownProps} />
                    <NewInvoiceBtn role="new-invoice-btn" onClick={handleNewInvoice}>
                        <span>
                            <StyledPlusSign src="\assets\icon-plus.svg" />
                        </span>
                        New Invoice
                    </NewInvoiceBtn>
                </InvoiceInputContainer>
            </StyledContainer>
        </ThemeProvider>
    )
}