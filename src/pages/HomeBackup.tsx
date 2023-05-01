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

const MappedInvoiceContainer = styled.div`
    display:grid;
    gap:25px;
    align-content:start;
`
const HomeContainer = styled.div`
    height:100%;
    @media screen and (max-width:1024px){
        margin-top:20px;
    }
`

export default function Home(props:any){
    const [mappedData, setMappedData] = useState<any>('')
    const [isModal, setIsModal] = useState(false)
    const { setIsFormOpen, isDarkMode } = useLayoutContext()
    const [isOpen, setIsOpen] = useState(false)
    const [isDraft, setIsDraft] = useState(true)
    const [isPending, setIsPending] = useState(true)
    const [isPaid, setIsPaid] = useState(true)
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
    
    useEffect(() =>{
        if(props.dataLoaded){
            const mappedData = props.data.map((data:any) =>{
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
                    <StyledLink key={data.id} state={data} to={`/invoice/${data.id}`}>
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
    }, [props.dataLoaded])
    
    return(
        <HomeContainer>
            {isModal && <WarningModal />}
            {props.dataLoaded && <InvoiceHeader {...prop} setIsFormOpen={setIsFormOpen} />}
            {props.dataLoaded ? 
            <MappedInvoiceContainer>
                {mappedData}
                {props.data.length === 0 && 
                    <EmptyInvoices />
                }
            </MappedInvoiceContainer>
            :
            <Loader isDarkMode={isDarkMode} /> 
            } 
            
        </HomeContainer>
    )
}