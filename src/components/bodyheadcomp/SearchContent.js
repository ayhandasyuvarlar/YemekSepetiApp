import React from 'react'
import { Container } from 'reactstrap'
import InputContent from './InputContent'

export default function SearchContent() {
  return (
    <Container style={SearchContainer.Content}>
        <InputContent></InputContent>
    </Container>
  )
}


const SearchContainer = {
    Content:{
        position:"relative",
        zIndex:"2",
        minWidth:"1150px",
        display:"flex",
        padding:"30px",
        marginTop:"60px",
        justifyContent:"center"
    }
}