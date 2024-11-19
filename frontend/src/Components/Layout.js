import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <main style={{minHeight:"75vh"}}>
      {props.children}
      </main>
      <Footer/>
      
    </div>
  )
}

export default Layout