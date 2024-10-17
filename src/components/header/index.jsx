import React from 'react'
import './style.css'
function Header(props) {
  return (
    <header>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Resilio company logo" className='logo' />
        <ul>
            <li className={props.myPage === 'home'? "active":""}>
                <a href="/#">home</a>
            </li>
            <li className={props.myPage === 'about'? "active":""}>
                <a href="/#">about</a>
            </li>
            <li className={props.myPage === 'contact'? "active":""}>
                <a href="/contact">contact</a>
            </li>
        </ul>
    </header>
  )
}

export default Header
