import React, { Component } from 'react'
import Header from '../../components/header'
import './style.css'
import Introduction from '../../sections/introduction'
import AboutUs from '../../sections/about'
import OurServices from '../../sections/ourServices'
import Footer from '../../sections/footer'
export default class HomePage extends Component {
  render() {
    return (
      <div className='home-page' style={{width: "100%"}}>
        <Header myPage = "home" />
        <Introduction/>
        <AboutUs/>
        <OurServices/>
        <Footer/>
      </div>
    )
  }
}
