import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const BeforeRouter = ({ children }) => {
    const token = "42lhjsdajlseuiop1321" // hard-coded
    const { pathname } = useLocation()
    
    if (pathname === "/login") return children
    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        children
    )
}

export default BeforeRouter