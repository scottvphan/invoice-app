import styled from "styled-components";
import { MainButton, MainHeading, SmallHeading, SaveButton, EditButton } from "./StyledComponents";

export const FormContainer = styled.div`
    background: ${(theme) => theme.theme.formBg};
    position: fixed;
    transition: 0.4s;
    height:100vh;
    @media screen and (max-width:1024px){
        width:80%;
    }
    @media screen and (max-width:768px){
        width:100%;
    }
    @media screen and (max-width:425px) {
        width: 100%;
    }
`;
export const GoBackHeading = styled.div`    
    display:none;
    @media screen and (max-width:425px) {
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
    }
`   
export const Form = styled.form`
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.2) 100%); */
    height:100%;
    padding: 0 50px;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${(theme) => theme.theme.scrollBg};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #7C5DFA, #5e35ff);
      /* background: #7C5DFA; */
    }
    overflow-x: hidden;
    overflow-y: scroll;
    input[type="text"] {
        cursor: text;
    }
    @media screen and (max-width:768px){
        padding:0 25px;
    }
    @media screen and (max-width:425px){
        padding: 0 10px;
    }
    display:grid;
`;
export const BillFromContainer = styled.div`
    margin: 20px 0;
`;
export const BillToContainer = styled.div`
    margin: 20px 0;
`;
export const InputContainer = styled.div`
    input {
        background: ${(theme) => theme.theme.inputBg};
        padding:10px 15px;
        border: ${(theme) => theme.theme.inputBorder};
        &:hover{
            border: ${(theme) => theme.theme.inputBorderHover};
        }
        border-radius: 4px;
        height: 15px;
        color: ${(theme) => theme.theme.inputColor};
        font-weight:700;
        transition:0.4s;
        font-family: "League Spartan", Arial, Helvetica, sans-serif;
        &:focus {
            outline-style: solid;
            outline-color: #7c5dfa;
            outline-width: 3px;
        }
    }
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
    .full {
        width: 100%;
    }
`;
export const ErrorLabel = styled.p`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: #ec5757;
    font-weight: 700;
`;

export const InputLabel = styled.label`
    display: block;
    margin: 20px 0;
    font-size: 13px;
    color: ${(theme) => theme.theme.labelColor};
`;
export const FormHeading = styled(SmallHeading)`
    color: #7c5dfa;
`;
export const ItemListHeading = styled(SmallHeading)`
    color: #777F98;
`
export const InputDividedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap:50px;
    @media screen and (max-width:800px){
        gap:50px;
        input{
            width:100%;
        }
    }
    @media screen and (max-width:425px){
        display:grid;
        grid-template:
        "a b"
        "c c";
        gap:0 50px;
        div{
            input{
                width:100%;
            }
        }
        div:nth-of-type(3){
            width:100%;
            grid-column-start: span 2;
            input{
                width:99%;
            }
        }
    }
`;
export const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const DropdownContainer = styled.div`
    margin: 20px 0;
    display:grid;
    align-items:center;
    gap:10px 50px;
    @media screen and (min-width: 426px) {
        grid-template-areas:
        "a b"
        "c c"
        ;
        div:nth-of-type(3){
            grid-area:c;
            input{
                width:100%;
            }
        }    
    }
    div:nth-of-type(3){
        input{
            width:100%;
        }
    }
`
export const ItemListContainer = styled.div`
    display: grid;
    align-items: center;
    gap:15px 45px;
    @media screen and (min-width:426px){
        grid-template-columns: 0.65fr 0.25fr 0.25fr 0.7fr;
    }
    @media screen and (max-width:425px){
        grid-template-areas:
        "a a a a a a a a"
        "b b c c d d d d"
        ;
        #nameContainer{
            grid-area: a;
            input{
                width:100%;
            }
            
        }
        #quantityContainer{
            grid-area: b;
            input{
                width:100%;
            }
            
        }
        #priceContainer{
            grid-area: c;
            input{
                width:100%;
            }
            
        }
        #totalContainer{
            grid-area: d;
            width:100%;
            overflow-x: scroll;
        }
    }
    .mapped-field{
        display:none;
        @media screen and (max-width:425px) {
            display:block;
        }
    }
    .item-heading{
        @media screen and (max-width:425px){
            display:none;
        }
    }
`
export const ItemListInputContainer = styled(InputContainer)`
    margin-top:10px;
    input {
        overflow-x:hidden;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &:hover, &:focus{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        color: ${(theme) => theme.theme.inputColor};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }

`
export const ItemContainer = styled.div`
    margin:20px 0;
`
export const TotalPriceContainer = styled.div`
    margin-top:10px;
`
export const TotalInputContainer = styled.div`
    height:15px;
    display:flex;
    align-items: center;
    height:100%;
    padding:0px 0px;
    justify-content: space-between;
    input:disabled{
            background: ${(theme) => theme.theme.inputBg};
            padding:10px 15px;
            border: ${(theme) => theme.theme.inputBorder};
            &:hover{
                border: ${(theme) => theme.theme.inputBorderHover};
            }
            border-radius: 4px;
            color: ${(theme) => theme.theme.inputColor};
            font-weight:700;
            transition:0.4s;
            font-family: "League Spartan", Arial, Helvetica, sans-serif;
            &:focus {
                outline-style: solid;
                outline-color: #7c5dfa;
                outline-width: 3px;
            }
            width:70%;
            overflow-x:hidden;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:hover, &:focus{
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }
        }
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }
    h3{
        color: ${(theme) => theme.theme.labelColor};
    }
    SVG{
        cursor:pointer;
        transform:scale(1);
        transition:0.5s;
        &:hover{
            transform: scale(1.3);
            transition:0.5s;
            & path{
                fill:red;
            }
        }
    }
`
export const AddButton = styled(SaveButton)`
    width:100%;
    background: ${(theme) => theme.theme.altBg};
    &:hover{
        background:${(theme) => theme.theme.altBgHover}
    }
    border-radius: 24px;
    padding:20px;
    margin: 20px 0;
`
export const EditButtonContainer = styled.div`
    border-radius: 0px 20px 20px 0px;
    width:100%;
    margin: 20px 0;
    display:flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap:10px;
    @media screen and (max-width:1024px){
        margin-bottom:100px;
    }
`
export const NewButtonContainer = styled.div`
    border-radius: 0px 20px 20px 0px;
    width:100%;
    margin: 20px 0;
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    gap:10px;
    @media screen and (max-width:1024px){
        margin-bottom:100px;
    }
    div:last-of-type{
        display:flex;
        gap:10px;
    }
`
export const DiscardButton = styled(EditButton)`
    background: ${(theme) => theme.theme.discardBg};
    justify-self:start;
`
export const CancelButton = styled(SaveButton)`
    background: ${(theme) => theme.theme.altBg};
    &:hover{
        background:${(theme) => theme.theme.altBgHover}
    }
    border-radius: 24px;
`
export const DraftButton = styled(EditButton)`
    background: #373B53;
    &:hover{
        background:${(theme) => theme.theme.draftBgHover}
    }
    border-radius: 24px;
    color:${(theme) => theme.theme.draftColor};
`
export const LabelDivider = styled.div`
    display:flex;
    justify-content: space-between;
    margin:20px 0;
    gap:50px;
    div{
        width:100%;
    }
`
