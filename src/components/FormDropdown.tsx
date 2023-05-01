import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { SmallHeading } from "./StyledComponents";
import SVG from 'react-inlinesvg'
import {v4 as uuidv4} from 'uuid'

const DropDownContainer = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    width:100%;
    z-index:2;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`

const DropDownHeaderContainer = styled.div`
    display:flex;
    align-items: center;
    background: ${(theme) => theme.theme.dropdownHeaderBg};
    border: ${(theme) => theme.theme.dropdownHeaderBorder};
    &:hover{
        border:${(theme) => theme.theme.dropdownBorderHover}
    }
    &:focus{
        outline:${(theme) => theme.theme.dropdownBorderHover}
    }
    border-radius: 4px;
    padding: 0 20px;
    justify-content: space-between;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
`

const DropdownListContainer = styled.div`
    display:flex;
    flex-direction: column;
    background: ${(theme) => theme.theme.dropdownBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position:absolute;
    left:0;
    right:0;
    margin-top:10px;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`

const DropdownOptionContainer = styled.div`
    display:flex;
    align-items: flex-end;
    padding:10px;
`

const FilterCheckbox = styled.input`
    cursor: pointer;
    margin-right:10px;
    &:checked{
        accent-color:#9277FF;
    }
`
const FilterLabel = styled.label`
    cursor: pointer;
`

const DownArrow = styled(SVG)`
    ${DropDownHeaderContainer}:hover & {
        transform: rotate(180deg);
        transition:0.5s;
    }
    transform: rotate(0deg);
    transition:0.5s;
`
const UpArrow = styled(SVG)`

`
const DropDownList = styled.ul`
    background: transparent;
    box-sizing: border-box;
    font-weight: 500;
    font-size:0.92rem;
    border-radius:10px;
    padding:20px;
    background: ${(theme) => theme.theme.dropdownBg};
`
const ListItem = styled.li`
    list-style: none;
    padding:15px 0px;
    border-bottom: ${(theme) => theme.theme.listBorder};
    &:last-of-type{
        border-bottom:none;
    }
    &:hover{
        color: #9277FF;
        cursor: pointer;
    }
    &:focus{
        color:#9277FF;
        outline: none;
    }
`
export default function FormDropdown(props:any){
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Select The Day')

    const options = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"]

    let dropdownRef = useRef<HTMLInputElement>(null);

    function toggleOpen(){
        setIsOpen(!isOpen)
    }
    const handleEnterKey = (e:any) =>{
        if(e.key === 'Enter'){
            setIsOpen(true)
        }
    }

    useEffect(() =>{
        let handler = (e:any)=>{
            if(!dropdownRef.current?.contains(e.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
    })
    useEffect(() =>{
            props.setIsSubmit(false)
            setSelectedOption("Select The Day")
    }, [props.isSubmit])

    const DarkTheme = {
        dropdownHeaderBg:"#1E2139",
        dropdownBg:"#252945",
        dropdownBorder:"1px solid #252945",
        dropdownBorderHover:"1px solid #7C5DFA",
        listBorder:"1px solid #1E2139",
        dropdownHeaderBorder:"1px solid #1E2139",
    }
    const LightTheme = {
        dropdownHeaderBg:"FFF",
        dropdownBg: "#FFF",
        dropdownBorder:"1px solid #DFE3FA",
        dropdownBorderHover:"1px solid #7C5DFA",
        listBorder:"1px solid #DFE3FA",
        dropdownHeaderBorder:"1px solid #DFE3FA",
    }

    return(
        <ThemeProvider theme={props.isDarkMode ? DarkTheme : LightTheme}>
            <DropDownContainer className={props.error ? "error" : ""} ref={dropdownRef}>
                <DropDownHeaderContainer tabIndex={0} onKeyDown={handleEnterKey} onClick={toggleOpen}>
                {props.isFormEdit ? 
                    selectedOption != 'Select The Day' ? 
                    <SmallHeading>{selectedOption}</SmallHeading>
                    :
                    <SmallHeading>{props.invoiceData.paymentTerms != undefined ? 'Net ' + props.invoiceData.paymentTerms + (props.invoiceData.paymentTerms === 1 ? " Day" : " Days") : "Select The Day"}</SmallHeading>
                    :
                    <SmallHeading>{selectedOption}</SmallHeading>
                }
                {isOpen ?  
                    <UpArrow src="\assets\icon-arrow-up.svg" /> : 
                    <DownArrow src="\assets\icon-arrow-down.svg" />
                }       
                </DropDownHeaderContainer>
            {isOpen && (
                <DropdownListContainer className={props.error ? "error" : ""} >
                    <DropDownList>
                        {options.map(option =>(
                            <ListItem onClick={(option:any) =>{
                                setIsOpen(false)
                                setSelectedOption(option.target.innerText)
                                const string = option.target.innerText.replace("Net ", "").replace(" Day", "").replace("s", "") 
                                props.onChange(
                                    Number(string)
                                )
                            }} key={uuidv4()} tabIndex={0}>{option}</ListItem>
                        ))}
                    </DropDownList>
                </DropdownListContainer>
            )}
            </DropDownContainer>
        </ThemeProvider>
    )
}