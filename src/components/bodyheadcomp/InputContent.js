import React from 'react'
import { Button, Form, Input } from 'reactstrap'
import { RiMapPinLine } from "react-icons/ri";

export default function InputContent() {
    return (
        <div style={styleInput.InputContent}>
            <Form style={{ display: "flex" }}>
                <Input style={styleInput.Input} placeholder="Find or Choose Your Address">
                </Input>
                <span style={styleInput.span }>
                    <RiMapPinLine style={{ fontSize: "x-large", color: "#FA0050" }} />
                </span>
                <Button id='searchButton' style={styleInput.Button
                }>Browse</Button>
            </Form>
        </div>
    )
}

const styleInput = {
    InputContent: {
        border: "1px solid gainsboro", borderRadius: "5px", width: "90%", padding: "10px 10px", boxShadow: "2px 5px 10px gray"
    },
    Input: { padding: "20px 10px", fontFamily: "'Baloo Da 2', cursive", fontSize: "large", backgroundImage: "" },
    span: {
        position: "absolute", marginLeft: "49rem", height: "4.2rem", display: "flex", alignItems: "center", width: "3rem", justifyContent: "center"
    },
    Button: {

        marginLeft: "10px", width: "130px", backgroundColor: "#FA0050", border: "none", color: "#ffff"
        , fontWeight: "500", fontFamily: '"Open Sans", sans-serif'
    }
}
// const searchButton = document.querySelector("#searchButton")
// console.log(searchButton)
// searchButton.addEventListener("focus", run)
// function run(e){
//     e.style.border= "1px solid gray";

// }