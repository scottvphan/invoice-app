import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import { useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import InvoicePage from "./pages/InvoicePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { DataType, Address, Item } from "./Types";
import Loader from "./components/Loader";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push, child, off, get } from "firebase/database";

const GlobalStyles = createGlobalStyle<MyTheme>`
    body{
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin:0;
    padding:0;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${(theme) => theme.theme.scrollBg};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #7C5DFA, #5e35ff)
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #9277FF;
    }

    background-color: ${(theme) => theme.theme.appBg};
    color: ${(theme) => theme.theme.color};
    transition: 0.4s;
    }
`;

const LightTheme = {
    appBg: "#F8F8F8",
    color: "#0C0E16",
    scrollBg: "#FFFFFF",
};
const DarkTheme = {
    appBg: "#141625",
    color: "white",
    scrollBg: "#141625",
};

type MyTheme = {
    theme: typeof LightTheme;
};

export default function App() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    const [data, setData] = useState<DataType | unknown>("");
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [isDraft, setIsDraft] = useState(true);
    const [isPending, setIsPending] = useState(true);
    const [isPaid, setIsPaid] = useState(true);

    const colorScheme = () => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            return true;
        } else {
            return false;
        }
    };

    const [isDarkMode, setIsDarkMode] = useState<boolean>(colorScheme);

    const props = {
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
        data: data,
        setData: setData,
        dataLoaded: dataLoaded,
        setDataLoaded: setDataLoaded,
    };

    const navbarProps = {
        isDraft: isDraft,
        setIsDraft: setIsDraft,
        isPending: isPending,
        setIsPending: setIsPending,
        isPaid: isPaid,
        setIsPaid: setIsPaid,
        isDarkMode: isDarkMode,
        setIsDarkMode: setIsDarkMode,
        data: data,
        setData: setData,
    };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout {...navbarProps} />}>
                <Route path="/" index element={<Home {...props} />} />
                <Route path="/invoice" element={<InvoicePage {...props} />}>
                    <Route
                        path="/invoice:id"
                        element={<InvoicePage {...props} />}
                    />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

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

    useEffect(() => {
        if(isAuthenticated && user?.email){
            const replacedEmail = user?.email.replace(".", ",");
            const colorSchemeRef = ref(
                database,
                `users/${replacedEmail}/isDarkMode`
            );
            get(colorSchemeRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        set(colorSchemeRef, isDarkMode);
                    }
                })
                .catch((error) => {
                    console.error('Error getting colorSchemeRef:', error);
                });
        }
        else{
            if (localStorage.getItem("colorscheme") === "false") {
                setIsDarkMode(false);
            }
            if (localStorage.getItem("colorscheme") === "true") {
                setIsDarkMode(true);
            }
        }
    }, [isDarkMode]);

    useEffect(() =>{
        if(isAuthenticated && user?.email){
            const replacedEmail = user?.email.replace(".", ",");
            const colorSchemeRef = ref(
                database,
                `users/${replacedEmail}/isDarkMode`
            );
            get(colorSchemeRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setIsDarkMode(snapshot.val());
                }
            })
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (isAuthenticated && user?.email) {
            const replacedEmail = user?.email.replace(".", ",");
            const invoicesRef = ref(
                database,
                `users/${replacedEmail}/invoices`
            );
            onValue(invoicesRef, (snapshot) => {
                if (snapshot.val() === null) {
                    setData([]);
                    setDataLoaded(true);
                } else {
                    const invoiceValues = Object.values(snapshot.val());
                    setData(invoiceValues);
                    setDataLoaded(true);
                }
            });
        } else {
            if (localStorage.getItem(`data`) === null) {
                fetch("/assets/data.json")
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                        setDataLoaded(true);
                        localStorage.setItem("data", JSON.stringify(data));
                    });
                setData(data);
                setDataLoaded(true);
                localStorage.setItem(`data`, JSON.stringify(data));
            } else {
                if (localStorage.getItem(`data`) !== null) {
                    if(!isAuthenticated && !isLoading){
                        const storedData = localStorage.getItem(`data`);
                        const data = storedData !== null ? JSON.parse(storedData) : null;
                        setData(data);
                        setDataLoaded(true);
                    }
                }
            }
        }
    }, [isLoading]);
    

    return isLoading ? (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <GlobalStyles />
            <Loader isDarkMode={isDarkMode} />
        </ThemeProvider>
    ) : isAuthenticated ? (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    ) : (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}
