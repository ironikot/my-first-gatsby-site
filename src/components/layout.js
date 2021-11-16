import * as React from 'react'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLintText
 } from './layout.module.css'
const Layout = ({pageTitele, children}) =>{
    return(
        <div className={container}>
            <title>{pageTitele}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLintText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLintText}>About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitele}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout