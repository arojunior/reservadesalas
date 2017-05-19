import React from 'react'
import Navigation from './../components/Navigation'

const Layout = ({children}) => (
  <div>
    <Navigation />
    <div className="container">
      {children}
    </div>
  </div>
)

export default Layout
