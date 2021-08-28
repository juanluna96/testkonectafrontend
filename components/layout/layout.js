import React from 'react'
import Header from './header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container mt-2">
                { children }
            </div>
        </>
    )
}

export default Layout
