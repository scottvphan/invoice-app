import { useState, useEffect } from 'react';


export default function DataHandler(props:any){
    
    useEffect(() =>{
        setTimeout(() =>{
            fetch('../../data.json')
            .then(res => res.json())
            .then(data => {
                props.setData(data)
                props.setDataLoaded(true)
            })
        }, Math.floor(Math.random() * 2500) + 500)
    }, [])
}