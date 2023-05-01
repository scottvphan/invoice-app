import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Router, Routes, Route, Link } from 'react-router-dom'
import InvoiceHeader from '../components/InvoiceHeader'
import InvoiceComponent from '../components/InvoiceComponent'
import { propsType, dataType, Address, Item } from '../Types'
import Loader from '../components/Loader'
import WarningModal from '../components/WarningModal'
import { useLayoutContext } from '../components/Layout'
import EmptyInvoices from '../components/EmptyInvoices'
import { StyledLink } from '../components/StyledComponents'
import { useSearchParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

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

export default function Home(props:any){
    const [searchParams, setSearchParams] = useSearchParams()
    const [mappedData, setMappedData] = useState<any>('')
    const [isModal, setIsModal] = useState(false)
    const { setIsFormOpen, isDarkMode, setUserFormData, userFormData } = useLayoutContext()
    const [isOpen, setIsOpen] = useState(false)
    const [isDraft, setIsDraft] = useState(true)
    const [isPending, setIsPending] = useState(true)
    const [isPaid, setIsPaid] = useState(true)
    const [filteredData, setFilteredData] = useState(props.data)
    const [filteredDataLoaded, setFilteredDataLoaded] = useState(props.dataLoaded)
    const [filterArray, setFilterArray] = useState(['draft', 'pending', 'paid'])
    const prop = {
        data: props.data, 
        setData: props.setData,
        dataLoaded: props.dataLoaded,
        setDataLoaded: props.setDataLoaded,
        isOpen: isOpen,
        setIsOpen: setIsOpen,
        isDraft: isDraft,
        setIsDraft: setIsDraft,
        isPending: isPending,
        setIsPending: setIsPending,
        isPaid: isPaid,
        setIsPaid: setIsPaid,
    }
    const { isAuthenticated , user} = useAuth0()
    useEffect(() => {
        if ( isAuthenticated && props.dataLoaded && userFormData !== undefined ) {
            const data = props.data
            const result = [ userFormData, ...data]
            localStorage.setItem(`${user?.email}`, JSON.stringify(result))
            props.setData(result)
            setUserFormData(undefined)
        } else if (!isAuthenticated && props.dataLoaded && userFormData !== undefined){
            const data = props.data
            const result = [ userFormData, ...data]
            localStorage.setItem('data', JSON.stringify(result))
            props.setData(result)
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
            setFilterArray(filterArray.filter((data:any) => !data.includes('draft')))
        } else if(!isPending && filterArray.includes('pending')){
            setFilterArray(filterArray.filter((data:any) => !data.includes('pending')))
        } else if(!isPaid && filterArray.includes('paid')){
            setFilterArray(filterArray.filter((data:any) => !data.includes('paid')))
        }

    }, [isDraft, isPending, isPaid])

    useEffect(() => {
        if(props.dataLoaded){
            if(isPaid && !isPending && !isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('paid')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPending && !isPaid && !isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isDraft && !isPaid && !isPending){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && isPending && !isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('paid') || data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && !isPending && isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('paid') || data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(!isPaid && isPending && isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('draft') || data.status.includes('pending')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(isPaid && isPending && isDraft){
                const filteredData = props.data.filter((data:any) =>{
                    if(data.status.includes('paid') || data.status.includes('pending') || data.status.includes('draft')){
                        return data
                    }
                })
                setFilteredData(filteredData)
            } else if(!isPaid && !isPending && !isDraft){
                setFilteredData(['empty'])
            }
        }
    }, [filterArray])

    useEffect(() =>{
        if(props.dataLoaded){
            setFilteredData(props.data)
            setFilteredDataLoaded(true)
        }   
    }, [props.dataLoaded, props.data])

    useEffect(() =>{
        if(filteredDataLoaded && filteredData[0] != 'empty'){
            const mappedData = filteredData.map((data:any) =>{
                let paymentColor = 'black'
                if(props.data.length > 0){
                    if(data.status === 'paid'){
                        paymentColor = '#33D69F'
                    }else if(data.status === 'pending'){
                        paymentColor = '#FF8F00'
                    }else if(data.status === 'draft'){
                        paymentColor = '#DFE3FA'
                    }
                }
                return(
                    <StyledLink key={data.id} to={{pathname: `/invoice/${data.id}`, search: `?data=${JSON.stringify(data)}`}}>
                        <InvoiceComponent 
                            id = {data.id}
                            createdAt = {data.createdAt}
                            paymentDue = {data.paymentDue}
                            description = {data.description}
                            paymentTerms = {data.paymentTerms}
                            clientName = {data.clientName}
                            clientEmail = {data.clientEmail}
                            senderAddress = {data.senderAddress}
                            status = {data.status}
                            clientAddress = {data.clientAddress}
                            items = {data.items}
                            total = {data.total}
                            isDarkMode = {isDarkMode}
                            paymentColor = {paymentColor}
                        />
                    </StyledLink>
                )
            })
            setMappedData(mappedData)
        }
        else{
            setMappedData(<EmptyInvoices/>)
        }
    }, [filteredData])
    
    return(
        <HomeContainer>
            <AuthenticatorContainer>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </AuthenticatorContainer>
            {isModal && <WarningModal />}
            {filteredDataLoaded && <InvoiceHeader {...prop} setIsFormOpen={setIsFormOpen} />}
            {filteredDataLoaded ? 
            <MappedInvoiceContainer>
                {mappedData.length >= 1 ? mappedData : <EmptyInvoices isDarkMode={isDarkMode} />}
            </MappedInvoiceContainer>
            :
            <Loader isDarkMode={isDarkMode} /> 
            } 
            
        </HomeContainer>
    )
}