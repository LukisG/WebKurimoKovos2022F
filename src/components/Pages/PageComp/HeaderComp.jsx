import React from 'react'

const Header = () => {
    return (
        <>
          <a href="/" style={{textDecoration: "none", color: "white", marginRight:"40px"}}>MARS</a>
          <a href="/" style={{textDecoration: "none", color: "white", marginRight:"40px"}}>Pagrindinis Puslapis</a>
          <a href="/saved" style={{textDecoration: "none", color: "white", marginRight:"40px"}}>Issaugotos nuotraukos <span style={{color: "red"}}>(not wroking firebase error)</span></a>
        </>
    )
}

export default Header
