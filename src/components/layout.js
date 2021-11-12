import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({pageTitele, children}) =>{
    return(
        <div>
            <title>{pageTitele}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitele}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout