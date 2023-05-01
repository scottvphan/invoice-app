import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect, useRef } from 'react';
import { SmallHeading } from "./StyledComponents";
import SVG from 'react-inlinesvg'
import { useLayoutContext } from "./Layout";

const DropDownContainer = styled.div`
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    width:55%;
    z-index:1;
    @media screen and (max-width:1024px) {
        width:60%;
    }
`

const DropDownHeaderContainer = styled.div`
    display:flex;
    align-items: center;
    background: transparent;
    padding: 0 20px;
    justify-content: space-between;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
`

const DropdownListContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding:10px;
    background: ${(theme) => theme.theme.dropdownBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position:absolute;
    left:0;
    right:0;
    margin-top:10px;
    @media screen and (max-width:425px) {
        width:90px;
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
export default function Dropdown(props:any){
    const { isDarkMode } = useLayoutContext()

    let dropdownRef = useRef<HTMLInputElement>(null);

    function toggleOpen(){
        props.setIsOpen(!props.isOpen)
    }
    const handleEnterKey = (e:any) =>{
        if(e.key === 'Enter'){
            props.setIsOpen(true)
        }
    }
    const handleEnterCheck = (e:any) =>{
        if(e.key === 'Enter'){
            if(e.target.id === "draft"){
                props.setIsDraft(!props.isDraft)
            }else if(e.target.id === "pending"){
                props.setIsPending(!props.isPending)
            }else if(e.target.id === "paid"){
                props.setIsPaid(!props.isPaid)
            }
        }
    }
    const handleCheckBox = (e:any) =>{
        if(e.target.id === "draft"){
            props.setIsDraft(!props.isDraft)
        }else if(e.target.id === "pending"){
            props.setIsPending(!props.isPending)
        }else if(e.target.id === "paid"){
            props.setIsPaid(!props.isPaid)
        }
    }
    useEffect(() =>{
        let handler = (e:any)=>{
            if(!dropdownRef.current?.contains(e.target)){
                props.setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
    })

    const LightTheme = {
        dropdownBg: "#FFF",
    }
    const DarkTheme = {
        dropdownBg: "#252945",
    }
    
    return(
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <DropDownContainer ref={dropdownRef}>
                <DropDownHeaderContainer tabIndex={0} onKeyDown={handleEnterKey} onClick={toggleOpen}>
                    <SmallHeading>{window.innerWidth > 1024 ? 'Filter by status' : 'Filter'}</SmallHeading>
                {props.isOpen ?  
                    <UpArrow src="\assets\icon-arrow-up.svg" /> : 
                    <DownArrow src="\assets\icon-arrow-down.svg" />
                }       
                </DropDownHeaderContainer>
            {props.isOpen && (
                <DropdownListContainer>
                    <DropdownOptionContainer>
                        <FilterCheckbox id="draft" type='checkbox' checked={props.isDraft} onKeyDown={handleEnterCheck} onChange={handleCheckBox} />
                        <FilterLabel htmlFor="draft">Draft</FilterLabel>
                    </DropdownOptionContainer>
                    <DropdownOptionContainer>
                        <FilterCheckbox id="pending" type='checkbox' checked={props.isPending} onKeyDown={handleEnterCheck} onChange={handleCheckBox} />
                        <FilterLabel htmlFor="pending">Pending</FilterLabel>
                    </DropdownOptionContainer>
                    <DropdownOptionContainer>
                        <FilterCheckbox id="paid" type='checkbox' checked={props.isPaid} onKeyDown={handleEnterCheck} onChange={handleCheckBox} />
                        <FilterLabel htmlFor="paid">Paid</FilterLabel>
                    </DropdownOptionContainer>
                </DropdownListContainer>
            )}
            </DropDownContainer>
        </ThemeProvider>
    )
}