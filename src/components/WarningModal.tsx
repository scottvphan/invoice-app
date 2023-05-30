import styled, { ThemeProvider } from "styled-components";
import { MainHeading, DeleteButton, EditButton } from "./StyledComponents";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    child,
    get,
    orderByChild,
    equalTo,
    remove,
} from "firebase/database";

const WarningModalContainer = styled.div`
    width: 40vw;
    background: ${(theme) => theme.theme.modalBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 75vw;
    }
    transition: ease-in 0.3s;
`;
const WarningMessage = styled.p`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: ${(theme) => theme.theme.warningColor};
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`;
const Backdrop = styled.div`
    background: rgba(0, 0, 0, 0.65);
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const CancelButton = styled(EditButton)`
    background-color: ${(theme) => theme.theme.cancelBtnBg};
    color: ${(theme) => theme.theme.cancelBtnColor};
    &:hover {
        background-color: ${(theme) => theme.theme.cancelBgHover};
    }
`;

export default function WarningModal({ data, invoiceData, setData, isDarkMode, handleWarning }: any) {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth0();

    const firebaseConfig = {
        apiKey: "AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",
        authDomain: "invoice-app-b1eb0.firebaseapp.com",
        databaseURL: "https://invoice-app-b1eb0-default-rtdb.firebaseio.com",
        projectId: "invoice-app-b1eb0",
        storageBucket: "invoice-app-b1eb0.appspot.com",
        messagingSenderId: "730679038015",
        appId: "1:730679038015:web:57b0f244fffde30b77e88a",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    function handleDelete() {
        if (!isAuthenticated) {
            const filteredData = data.filter((data: any) => {
                if (data.id !== invoiceData.id) {
                    return data;
                }
            })
            setData(filteredData);
            localStorage.setItem("data", JSON.stringify(filteredData));
        }
        if (isAuthenticated && user?.email) {
            const replacedEmail = user?.email.replace(".", ",");
            const invoicesRef = ref(
                database,
                `users/${replacedEmail}/invoices`
            );
            onValue(invoicesRef, (snapshot) => {
                const val = snapshot.val();
                if (val !== null) {
                    const data = Object.entries(snapshot.val());
                    const filteredData = data.filter((data: any) => {
                        if (data[1].id === invoiceData.id) {
                            return data;
                        }
                    });
                    if (filteredData.length > 0 && filteredData) {
                        const invoiceKey = filteredData[0][0];
                        const invoiceKeyRef = ref(
                            database,
                            `users/${replacedEmail}/invoices/${invoiceKey}`
                        );
                        remove(invoiceKeyRef);
                    }
                }
            });
        }
        navigate("..");
    }

    const DarkTheme = {
        modalBg: "#1E2139",
        cancelBtnColor: "#DFE3FA",
        cancelBtnBg: "#252945",
        cancelBgHover: "#2b2e47",
        cancelColor: "#DFE3FA",
        warningColor: "#DFE3FA",
    };
    const LightTheme = {
        modalBg: "#FFF",
        cancelBtnBg: "#DFE3FA",
        cancelBtnColor: "#7E88C3",
        cancelBgHover: "#F9FAFE",
        cancelColor: "#7E88C3",
        warningColor: "#7E88C3",
    };

    return (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <Backdrop>
                <WarningModalContainer>
                    <MainHeading>Confirm Deletion</MainHeading>
                    <WarningMessage>
                        Are you sure you want to delete invoice #
                        {invoiceData.id ? invoiceData.id : "Missing ID"}? This
                        action cannot be undone.
                    </WarningMessage>
                    <ButtonContainer>
                        <CancelButton onClick={handleWarning}>
                            Cancel
                        </CancelButton>
                        <DeleteButton
                            role="delete-button"
                            onClick={handleDelete}
                        >
                            Delete
                        </DeleteButton>
                    </ButtonContainer>
                </WarningModalContainer>
            </Backdrop>
        </ThemeProvider>
    );
}
