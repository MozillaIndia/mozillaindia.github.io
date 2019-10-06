import React from "react"
import styled from 'styled-components'

const Link = styled.a`
    color:#3F51B5;
`

const Footer = () =>(
    <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Mozilla India</strong> homepage. The source code is licensed 
                    <Link href="https://www.mozilla.org/en-US/MPL/">MPL</Link>. The website content is licensed <Link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Link>.
                </p>
                <p>Found a bug? <Link href="http://github.com/mozillaindia/mozillaindia.github.io">Report it or fix it</Link></p>
            </div>
        </footer>
)

export default Footer
