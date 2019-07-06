import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Mozilla India" />
    <div class="container">
            <article class="notification is-danger">
                <p class="title">Lost somewhere?</p>
                <p class="subtitle">find reason why....</p>
            </article>
            <div class="columns is-vcentered">
                <div class="column is-3 has-text-centered">
                    <Image/>
                </div>
                <article class="column content">
                    <ul>
                        <li>If you typed in the address, check your spelling. Could just be a typo.</li>
                        <li>
                            If you’ve found an issue with one of our websites, we’d appreciate it if you could report the problem in Bugzilla, our <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=www.mozilla.org">bug tracker</a>.
                        </li>
                        <li>
                            Alternatively, you can report them<a href="https://github.com/MozillaIndia/mozillaindia.github.io/issues"> here</a>
                        </li>
                        <li>If you followed a link, it’s probably broken.</li>
                        <li>
                            If you’re not sure what you’re looking for, start at <a href="https://mozillaindia.org/">homepage</a>.
                        </li>
                    </ul>
                </article>
            </div>
        </div>
  </Layout>
)

export default NotFoundPage
