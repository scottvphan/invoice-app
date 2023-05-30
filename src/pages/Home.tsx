import { useState, useEffect } from 'react'
import styled from 'styled-components'
import InvoiceHeader from '../components/InvoiceHeader'
import InvoiceComponent from '../components/InvoiceComponent'
import { DataType, HomePropsType } from '../Types'
import Loader from '../components/Loader'
import WarningModal from '../components/WarningModal'
import { useLayoutContext } from '../components/Layout'
import EmptyInvoices from '../components/EmptyInvoices'
import { StyledLink } from '../components/StyledComponents'
import { useSearchParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, onValue, push, child, update, off } from "firebase/database"

const MappedInvoiceContainer = styled.div`
    display:grid;
    gap:25px;
    align-content:start;
`
const HomeContainer = styled.div`
    height:100%;
    @media screen and (max-width:1024px){
        margin-top:50px;
    }
`
const AuthenticatorContainer = styled.div`
    display:flex;
    justify-content: flex-end;
`

export default function Home({ data, setData, dataLoaded, setDataLoaded}: HomePropsType){
    const [searchParams, setSearchParams] = useSearchParams()
    const [mappedData, setMappedData] = useState<any>('')
    const [isModal, setIsModal] = useState(false)
    const { setIsFormOpen, isDarkMode, setUserFormData, userFormData, isFormEdit, setIsFormEdit, invoiceData, setInvoiceData } = useLayoutContext()
    const [isOpen, setIsOpen] = useState(false)
    const [isDraft, setIsDraft] = useState(true)
    const [isPending, setIsPending] = useState(true)
    const [isPaid, setIsPaid] = useState(true)
    const [filteredData, setFilteredData] = useState<any>(data)
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(dataLoaded)
    const [filterArray, setFilterArray] = useState(['draft', 'pending', 'paid'])
    const props = {
        data: data, 
        setData: setData,
        dataLoaded: dataLoaded,
        setDataLoaded: setDataLoaded,
        filteredData: filteredData, 
        setFilteredData: setFilteredData,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        isDraft: isDraft,
        setIsDraft: setIsDraft,
        isPending: isPending,
        setIsPending: setIsPending,
        isPaid: isPaid,
        setIsPaid: setIsPaid,
        isDarkMode: isDarkMode
    }
    const { isAuthenticated , user} = useAuth0()
    
    const firebaseConfig = {
        apiKey: "AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",
        authDomain: "invoice-app-b1eb0.firebaseapp.com",
        databaseURL: "https://invoice-app-b1eb0-default-rtdb.firebaseio.com",
        projectId: "invoice-app-b1eb0",
        storageBucket: "invoice-app-b1eb0.appspot.com",
        messagingSenderId: "730679038015",
        appId: "1:730679038015:web:57b0f244fffde30b77e88a"
    };
    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app)
    const userRef = ref(database,'users')

    useEffect(() =>{
        if(isAuthenticated && user?.email){
            const replacedEmail = user?.email.replace('.', ',')
            onValue(userRef, (snapshot) =>{
                const dataArray = Object.keys(snapshot.val())
                if(!dataArray.includes(replacedEmail)){
                    const emailRef = child(userRef, replacedEmail);
                    child(userRef, replacedEmail)
                    set(emailRef, "");
                }
            })
        }
    }, [])

    useEffect(() => {
        if (isAuthenticated && user?.email && dataLoaded && userFormData !== undefined) {
            const replacedEmail = user?.email.replace('.', ',')
            const invoiceRef = push(child(userRef, replacedEmail))
            const invoiceId = invoiceRef.key
            const invoicesRef = ref(
                database,
                `users/${replacedEmail}/invoices`
            );
            if(userFormData.items){
                userFormData.items.forEach((item: any) => {
                    if (isNaN(item.quantity) || typeof item.quantity === 'undefined') {
                        item.quantity = 0;
                        }
                    if (isNaN(item.price) || typeof item.price === 'undefined') {
                        item.price = 0;
                    }
                    if (isNaN(item.total) || typeof item.total === 'undefined') {
                        item.total = 0;
                    }
                });
            }
            if (userFormData.createdAt === undefined) {
                userFormData.createdAt = '';
            }
            if (userFormData.paymentTerms === undefined) {
                userFormData.paymentTerms = '';
            }
            if (isFormEdit) {
                const listener = onValue(invoicesRef, (snapshot) => {
                    if (userFormData !== undefined) {
                        const formData = userFormData;
                        const invoiceDatabaseData = Object.entries(snapshot.val());
                        const filteredData = invoiceDatabaseData.filter((invoiceData: any) => {
                        if (invoiceData[1].id === formData.id) {
                            return invoiceData;
                        }
                        });
                            const invoiceKey = filteredData[0][0];
                            const invoiceKeyRef = ref(
                                database,
                                `users/${replacedEmail}/invoices/${invoiceKey}`
                            );
                            setIsFormEdit(false);
                            setUserFormData(undefined);
                        if (filteredData[0][1] !== userFormData) {
                            update(invoiceKeyRef, userFormData);
                        }
                    }
                });
                listener();
            } else{
                if(userFormData !== undefined){
                    set(child(userRef, `${replacedEmail}/invoices/${invoiceId}`), userFormData);
                    setUserFormData(undefined)
                }
            }
        } else if (!isAuthenticated && dataLoaded && userFormData !== undefined){
            const filteredData = (data as DataType[]).filter((data:any) =>{
                if(data.id !== invoiceData.id){
                    return data
                }
            })
            const result = [ userFormData, ...filteredData as [] ]
            localStorage.setItem('data', JSON.stringify(result))
            setData(result)
            setUserFormData(undefined)
        }
    }, [userFormData]);

    useEffect(() =>{
        if(isDraft && !filterArray.includes('draft')){
            setFilterArray([...filterArray, 'draft'])
        } else if(isPending && !filterArray.includes('pending')){
            setFilterArray([...filterArray, 'pending'])
        } else if(isPaid && !filterArray.includes('paid')){
            setFilterArray([...filterArray, 'paid'])
        }
        
        if(!isDraft && filterArray.includes('draft')){
            setFilterArray(filterArray.filter((data:string) => !data.includes('draft')))
        } else if(!isPending && filterArray.includes('pending')){
            setFilterArray(filterArray.filter((data:string) => !data.includes('pending')))
        } else if(!isPaid && filterArray.includes('paid')){
            setFilterArray(filterArray.filter((data:string) => !data.includes('paid')))
        }

    }, [isDraft, isPending, isPaid])

    useEffect(() => {
        if(dataLoaded){
            if(isPaid && !isPending && !isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('paid')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPending && !isPaid && !isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isDraft && !isPaid && !isPending){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && isPending && !isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('paid') || data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && !isPending && isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('paid') || data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(!isPaid && isPending && isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('draft') || data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && isPending && isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(data.status.includes('paid') || data.status.includes('pending') || data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(!isPaid && !isPending && !isDraft){
                const filteredData = (data as DataType[]).filter((data:DataType) =>{
                    if(!data.status.includes('paid') || !data.status.includes('pending') || !data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData([])
            }
        }
    }, [filterArray])

    useEffect(() =>{
        if(dataLoaded){
            setFilteredData(data)
            setFilteredDataLoaded(true)
            console.log('changed data')
            console.log(data)
        }   
    }, [dataLoaded, data])

    useEffect(() =>{
        if(filteredDataLoaded && (filteredData as string)[0] != 'empty'){
            const mappedData = (filteredData as DataType[]).map((data:DataType) =>{
                let paymentColor = 'black'
                if(data.status === 'paid'){
                    paymentColor = '#33D69F'
                }else if(data.status === 'pending'){
                    paymentColor = '#FF8F00'
                }else if(data.status === 'draft'){
                    paymentColor = '#DFE3FA'
                }
                return(
                    <StyledLink key={data.id} to={{pathname: `/invoice/${data.id}`, search: `?data=${JSON.stringify(data)}`}}>
                        <InvoiceComponent 
                            id = {data.id}
                            paymentDue = {data.paymentDue}
                            clientName = {data.clientName}
                            status = {data.status}
                            total = {data.total}
                            paymentColor = {paymentColor}
                        />
                    </StyledLink>
                )
            })
            setMappedData(mappedData)
        }
    }, [filteredData])

    return(
        <HomeContainer>
            <AuthenticatorContainer>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </AuthenticatorContainer>
            {isModal && <WarningModal />}
            {filteredDataLoaded && <InvoiceHeader {...props} setIsFormOpen={setIsFormOpen} />}
            {filteredDataLoaded ? 
            <MappedInvoiceContainer>
                {mappedData.length > 0 ? mappedData : <EmptyInvoices isDarkMode={isDarkMode} />}
            </MappedInvoiceContainer>
            :
            <Loader isDarkMode={isDarkMode} /> 
            } 
            
        </HomeContainer>
    )
}