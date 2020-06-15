import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Ajax1 from '../assets/images/ajax1.jpg'
import Ajax2 from '../assets/images/ajax2.png'

const Ajax = ({ data }) => (
    <Layout>
        <Helmet>
            <title>theDoggo - Ajax</title>
            <meta name="description" content="Ajax" />
        </Helmet>
        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Ajax</h1>
                </header>
                <div className="content">
                    <p>All about Ajax</p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        <span className="image fitBig"> <img src={Ajax1}/> </span>
                        <span className="image fitBig"> <img src={Ajax2}/> </span>  
                    </div>

                </div>
            </section>

        </div>

    </Layout>
)

export default Ajax