import { MainParagraph, MainHeading, MainButton, SmallParagraph } from "./StyledComponents";
import styled, {ThemeProvider} from "styled-components";
import Dropdown from "./Dropdown";
import { useLayoutContext } from "./Layout";

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
export default function InvoiceHeader(props:any){
    
    function handleNewInvoice(){
        props.setIsFormOpen(true)
    }

    const DarkTheme = {
        invoiceDataColor:"#DFE3FA",
    }

    const LightTheme = {
        invoiceDataColor:"#888EB0",
    }
    
    const DropdownProps = {
        isOpen: props.isOpen,
        setIsOpen: props.setIsOpen,
        isDraft: props.isDraft,
        setIsDraft: props.setIsDraft,
        isPending: props.isPending,
        setIsPending: props.setIsPending,
        isPaid: props.isPaid,
        setIsPaid: props.setIsPaid,
    }

    return(
        <ThemeProvider theme = {props.isDarkMode ? DarkTheme : LightTheme}>
            <StyledContainer>
                <InvoiceTextContainer>
                    <InvoiceHeading>Invoices</InvoiceHeading>
                    {props.data.length === 0 ?
                    <InvoiceData>No invoices</InvoiceData>
                    :
                    <InvoiceData>There are {props.data.length} total invoices</InvoiceData>
                    }
                </InvoiceTextContainer>
                <InvoiceInputContainer>
                    <Dropdown {...DropdownProps} />
                    <NewInvoiceBtn onClick={handleNewInvoice}>
                        <span>
                            <StyledPlusSign src="\assets\icon-plus.svg" />
                        </span>
                        {window.innerWidth > 1024 ? 'New Invoice' : 'New'}
                    </NewInvoiceBtn>
                </InvoiceInputContainer>
            </StyledContainer>
        </ThemeProvider>
    )
}