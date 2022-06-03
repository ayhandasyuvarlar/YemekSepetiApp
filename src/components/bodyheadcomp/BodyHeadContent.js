import React from 'react'
import { Container, Row } from 'reactstrap'
import HeadText from './headtext'
import SearchContent from './SearchContent'

function BodyHeadContent() {
  return (
    <Container  className='continer-fuild' style={styleHeadContent.HeadContent} id="content">
        <Row style={styleHeadContent.HeadRow} id="row">
            <article className='col-6' style={{display:"block" }}>
                 <div className="col-12">
                     <HeadText></HeadText>
                     <SearchContent></SearchContent>
                 </div>
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