import React from 'react'
import { Container, Row } from 'reactstrap'

function BodyHeadContent() {
  return (
    <Container  className='continer-fuild' style={styleHeadContent.HeadContent} id="content">
        <Row style={styleHeadContent.HeadRow} id="row">
            <article className='col-6'>

            </article>
            <article className='col-6'>
                        <img width="1500px" height="680rem" style={{objectFit:"contain"}} src="https://images.deliveryhero.io/image/foodpanda/hero-home-tr.jpg?width=4000&height=2560" alt="" />
            </article>
        </Row>
    </Container>
  )
}

export default BodyHeadContent

const styleHeadContent ={
  HeadContent:{
    maxWidth: "1550px",
    padding:"0px"
  },

}