import styled from "styled-components"
import { Link } from "react-router-dom"

export const LargeHeading = styled.h1`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: -1.125px;
`

export const MainHeading = styled.h1`
    @media screen and (max-width:768px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: -0.75px;
    }
    @media screen and (min-width:1025px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: -1.125px;
    }
`

export const MediumHeading = styled.h2`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.75px;
`

export const SmallHeading = styled.h3`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.25px;
    text-align: left;
`

export const ExtraSmallHeading = styled.h4`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
`

export const MainParagraph = styled.p`
    @media screen and (max-width:768px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color:#DFE3FA;
    }

    @media screen and (min-width:1025px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color:#DFE3FA;
    }
`

export const Paragraph = styled.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
`

export const SmallParagraph = styled.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
    color:#DFE3FA;
`

export const MainButton = styled.button`
    cursor: pointer;
    background-color: #7C5DFA;
    padding:15px 20px;
    border-radius: 24px;
    color:white;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    display:flex;
    align-items: center;
    border:none;
    &:hover{
        background-color: #9277FF;
    }
    @media screen and (max-width:768px){
        font-size:13px;
    }
`

export const EditButton = styled.button`
    cursor: pointer;
    background-color: #F9FAFE;
    border-radius: 24px;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color:#7E88C3;
    padding:15px 20px;
    border:none;
    &:hover{
        background: #DFE3FA;
        border-radius: 24px;
    }
`

export const SaveButton = styled.button`
    cursor: pointer;
    background-color: #373B53;
    border-radius: 24px;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color:#888EB0;
    padding:15px 20px;
    border:none;
    &:hover{
        color:#888EB0
    }
`

export const DeleteButton = styled.button`
    cursor: pointer;
    background-color: #EC5757;
    border-radius: 24px;
    padding:15px 20px;
    color:white;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    border:none;
    &:hover{
        background-color:#FF9797;
        border-radius: 24px;
    }
`

export const StyledLink = styled(Link)`
    color:inherit;
    text-decoration:none;
`