import Navbar from "./Navbar";
import { Outlet, useOutletContext } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import styled, { ThemeProvider } from "styled-components";
import FormComponent from "./FormComponent";
import { useState, useEffect } from 'react';


const StyledContainer = styled.div`
        margin: 0;
        display: flex;
        height: 100vh;
        
    @media screen and (max-width:1024px) {
        margin:0;
        display:flex;
        flex-direction: column;
    }
`

const StyledMain = styled.main`
    margin: 0px auto;
    display:flex;
    flex-direction: column;
    width:80vw;
    margin-top:40px;
    @media screen and (max-width:1024px) {
        width:95vw;
    }
`
const NavBarContainer = styled.div`
    display:flex;
    z-index:3;
    @media screen and (min-width:1025px){
        height:100%;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        width:100%;
    }
    position:fixed;
`
const FormContainer = styled.div`
`
const Backdrop = styled.div`
    background: rgba(0, 0, 0, 0.45);
    height:100%;
    width:100%;
    position:fixed;
    z-index:2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export default function Layout({ isDarkMode, setIsDarkMode, data, setData }:any) {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [userFormData, setUserFormData] = useState<any>(undefined)
    const [isFormEdit, setIsFormEdit] = useState(false)
    const [invoiceData, setInvoiceData] = useState<any>()
    const navbarProps = {
        isFormOpen: isFormOpen,
        setIsDarkMode: setIsDarkMode,
        isDarkMode: isDarkMode,
    }
    const formProps = {
        setIsFormOpen: setIsFormOpen,
        isFormOpen: isFormOpen,
        isDarkMode: isDarkMode,
        userFormData: userFormData,
        setUserFormData: setUserFormData,
        isFormEdit: isFormEdit,
        setIsFormEdit: setIsFormEdit,
        invoiceData: invoiceData,
        setInvoiceData: setInvoiceData,
        data: data,
        setData: setData,
    }
    useEffect(() => {
        const handleCloseForm = () => {
            setIsFormOpen(false);
        };
    
        window.addEventListener('popstate', handleCloseForm);
    
        return () => {
            window.removeEventListener('popstate', handleCloseForm);
        };
    }, []);
    const theme = {
        dark:{
            color: "white",
        },
        light:{
            color:"black",
        }
    }
    return (
        <StyledContainer>
            <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
                <ScrollToTop />
                <NavBarContainer>
                    <Navbar {...navbarProps} />
                    <FormContainer>
                        {isFormOpen && <FormComponent {...formProps} />}
                    </FormContainer>
                </NavBarContainer>
                <StyledMain>
                    {isFormOpen && <Backdrop></Backdrop>}
                    <Outlet context={{setIsFormOpen, isDarkMode, setUserFormData, userFormData, isFormEdit, setIsFormEdit, setInvoiceData, invoiceData}} />
                </StyledMain>
            </ThemeProvider>
        </StyledContainer>
    );
}
export function useLayoutContext(){
    return useOutletContext<any>();
}
