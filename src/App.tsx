import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "../components/LoginButton";
// import LogoutButton from "../components/LogoutButton";
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
import Login from "./components/Login";
import Layout from "./components/Layout";
import { propsType, dataType, Address, Item } from "./Types";
import { Auth0Provider, AuthorizationParams } from "@auth0/auth0-react";
import Loader from "./components/Loader";
import AccountPage from "./pages/AccountPage";

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
      /* background: #7C5DFA; */
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
    const [isDarkModeSaved, setIsDarkModeSaved] = useState<boolean>(false);
    const [data, setData] = useState<dataType | unknown>("");
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [previouslyOpened, setPreviouslyOpened] = useState(false);
    const [isDraft, setIsDraft] = useState(true);
    const [isPending, setIsPending] = useState(true);
    const [isPaid, setIsPaid] = useState(true);
    const [userData, setUserData] = useState<any>("");

    const colorScheme = () =>{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true
        } else {
            return false
        }
    }

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
                <Route path="/account" element={<AccountPage />} />
            </Route>
        )
    );

    useEffect(() => {
        if(localStorage.getItem('colorscheme') === 'false'){
            setIsDarkMode(false)
        }
        if(localStorage.getItem('colorscheme') === 'true'){
            setIsDarkMode(true)
        }
    }, [isDarkMode])

    useEffect(() => {
        if(isAuthenticated){
            if(localStorage.getItem(`${user?.email}`) === null){
                fetch("/assets/data.json")
                .then((res) => res.json())
                .then((data) => {
                    setData([]);
                    setDataLoaded(true);
                    localStorage.setItem(`${user?.email}`, JSON.stringify([]));
                });
            } else{
                if (localStorage.getItem(`${user?.email}`) !== null){
                    const data = JSON.parse(
                        localStorage.getItem(`${user?.email}`) as string
                    );
                    setData(data);
                    setDataLoaded(true);
                }
            }
        } else{
            if (localStorage.getItem(`data`) === null) {
                fetch("/assets/data.json")
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                        setDataLoaded(true);
                        localStorage.setItem("data", JSON.stringify(data));
                    });
        } else {
                if (localStorage.getItem(`data`) !== null) {
                    const data = JSON.parse(
                        localStorage.getItem(`data`) as string
                    );
                    setData(data);
                    setDataLoaded(true);
                }
        }
        }
    }, [isAuthenticated]);

    return (
        isLoading ? 
            <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
                <GlobalStyles />
                <Loader isDarkMode={isDarkMode} />
            </ThemeProvider>
        :
        isAuthenticated ? (
            <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        ) : (
            <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        )
    )
}
