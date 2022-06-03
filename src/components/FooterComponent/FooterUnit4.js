import React from 'react'

function FooterUnit4(props) {
    let listCity = props.cityArray
  return (
    
            <article className='col-12' style={{display:"flex"}}>
            {listCity.map((list) =>(
            <div className='col-2' style={{width:"20rem"}}>
                <p style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "bold" ,margin:"0" ,color:"#7F8C8D"}}>{list.title}</p>
              {list.eat.map((list)=>(
                 <div>
                    <a href="#" style={{textDecoration:"none" ,color:"black"}}>
                    <p style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: "100" ,margin:"0" }}>{list}</p>
                    </a>
                 </div>
              ))}
            </div>
        ))}
            </article>
  )
}

export default FooterUnit4