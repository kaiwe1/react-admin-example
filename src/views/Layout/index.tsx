import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import "./style.scss"

const Layout = () => {
  return (
    <div id='layout'>
        <aside>
            <Aside />
        </aside>
        <section>
            <header>header</header>
            <main><Outlet/></main>
        </section>
    </div>
  )
}

export default Layout