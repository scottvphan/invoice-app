import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';

export default function Profile(props:any){
    const { user, isAuthenticated } = useAuth0()
    console.log(isAuthenticated)

    return(
        isAuthenticated? (
            <article>
                {JSON.stringify(user)}
            </article>
        )
        :
        <></>
    )
}