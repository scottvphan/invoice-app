
import styled, { ThemeProvider } from "styled-components"
import { SmallParagraph, SmallHeading, EditButton, DeleteButton, MainButton, Paragraph, MainHeading } from "../components/StyledComponents"
import {v4 as uuidv4} from 'uuid'
import { Fragment } from "react"
const InvoiceInfoBillingContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:50px;
    @media screen and (max-width:1024px){
        padding: 30px;
    }
    @media screen and (max-width:700px){
        padding:15px;
    }
`
const InvoiceBilling = styled.div`
    @media screen and (max-width:700px){
        padding:5px;
        gap:5px;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
    }
    padding:10px 30px;
    background: ${(theme) => theme.theme.invoiceBillingBg};
    border-radius: 8px 8px 0px 0px;
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    @media screen and (max-width:425px){
        grid-template-columns: 1fr;
        padding:30px;
    }
`
const MobileGridContainer = styled.div`
    @media screen and (min-width:426px) {
        display:none;
    }
    grid-template-columns: none;
    display:grid;
    grid-template-areas: 
    "item . total"
    "container . total"
    ;
`
const InvoiceAmount = styled.div`
    @media screen and (max-width:700px){
        padding:5px;
    }
    padding:10px 30px;
    height:10vh;
    border-radius: 0px 0px 8px 8px;
    background:${(theme) => theme.theme.invoiceAmountBg};
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const ItemNameHeading = styled(Paragraph)`
    color: ${(theme) => theme.theme.itemNameHeadingColor};
    font-size: 18px;
    @media screen and (max-width:425px){
        display:none;
    }
`
const QuantityHeading = styled(Paragraph)`
    color: ${(theme) => theme.theme.quantityHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const PriceHeading = styled(Paragraph)`
    color: ${(theme) => theme.theme.priceHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const TotalHeading = styled(Paragraph)`
    color: ${(theme) => theme.theme.totalHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const ItemName = styled(SmallHeading)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (max-width:425px){
        display:none;
    }
`
const Quantity = styled(SmallHeading)`
    color: ${(theme) => theme.theme.quantityColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const Price = styled(SmallHeading)`
    color: ${(theme) => theme.theme.priceColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const Total = styled(SmallHeading)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`
const ItemNameMobile = styled(SmallHeading)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: item;
    margin:0;
`
const QuantityMobile = styled(SmallHeading)`
    color: ${(theme) => theme.theme.quantityColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: quantity;
    color: ${(theme) => theme.theme.mobileContainerColor};
    margin:0;
`
const PriceMobile = styled(SmallHeading)`
    color: ${(theme) => theme.theme.priceColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: price;
    color: ${(theme) => theme.theme.mobileContainerColor};
    margin:0;
`
const TotalMobile = styled(SmallHeading)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: total;
    align-self: center;
    margin:0;
`
const Amount = styled(SmallHeading)`
    color: #FFFFFF;
`
const TotalPrice = styled(MainHeading)`
    font-size: 24px;
    line-height: 32px;
    text-align: right;
    color:#FFF;
`
const MobileContainer = styled.div`
    display:flex;
    align-items: center;
    grid-area:container;
    gap:5px;
    color: ${(theme) => theme.theme.mobileContainerColor};
`

export default function InvoiceBillingComponent({ data, isDarkMode }:any){
    const DarkTheme = {
        invoiceBillingBg: "#252945;",
        itemNameHeadingColor: "#DFE3FA",
        quantityHeadingColor: "#DFE3FA",
        priceHeadingColor: "#DFE3FA",
        totalHeadingColor: "#DFE3FA",
        quantityColor: "#DFE3FA",
        priceColor: "#DFE3FA",
        invoiceAmountBg: "#0C0E16",
        mobileContainerColor:"#888EB0"
    }
    const LightTheme = {
        invoiceBillingBg: "#F9FAFE",
        itemNameHeadingColor: "#7E88C3",
        quantityHeadingColor: "#7E88C3",
        priceHeadingColor: "#7E88C3",
        totalHeadingColor: "#7E88C3",
        quantityColor: "#7E88C3",
        priceColor: "#7E88C3",
        invoiceAmountBg: "#373B53",
        mobileContainerColor:"#7E88C3"
    }
    
    const mappedData = 
    data.items ?
    data.items.map((data:any) => {
        return (
            <Fragment key={uuidv4()}>
                <ItemName key={uuidv4()}>{data.name ? data.name : "Missing Name"}</ItemName>
                <Quantity key={uuidv4()}>{data.quantity? data.quantity : 0}</Quantity>
                <Price key={uuidv4()}><span>$ </span>{data.price ? data.price.toFixed(2) : 0}</Price>
                <Total key={uuidv4()}><span>$ </span>{data.total ? data.total.toFixed(2) : 0}</Total>
                <MobileGridContainer>
                    <ItemNameMobile key={uuidv4()}>{data.name ? data.name : "Missing Name"}</ItemNameMobile>
                    <MobileContainer>
                    <QuantityMobile key={uuidv4()}>{data.quantity ? data.quantity : 0}</QuantityMobile>
                    <SmallHeading>x</SmallHeading>
                    <PriceMobile key={uuidv4()}><span>$ </span>{data.price ? data.price.toFixed(2) : 0}</PriceMobile>
                    </MobileContainer>
                    <TotalMobile key={uuidv4()}><span>$ </span>{data.total ? data.quantity.toFixed(2) : 0}</TotalMobile>
                </MobileGridContainer>
            </Fragment>
        )
    }
    )
    :
    <div></div>
    return(
        <ThemeProvider theme = {isDarkMode ? DarkTheme : LightTheme}>
            <InvoiceInfoBillingContainer>
                <InvoiceBilling key={uuidv4()}>
                    <ItemNameHeading>Item Name</ItemNameHeading>
                    <QuantityHeading>QTY.</QuantityHeading>
                    <PriceHeading>Price</PriceHeading>
                    <TotalHeading>Total</TotalHeading>
                    {mappedData}
                </InvoiceBilling>
                <InvoiceAmount>
                    <Amount>Amount Due</Amount>
                    <TotalPrice><span>$</span>{data.total ? data.total.toFixed(2) : 0}</TotalPrice>
                </InvoiceAmount>
            </InvoiceInfoBillingContainer>
        </ThemeProvider>
    )
}