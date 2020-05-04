import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic08 from '../assets/images/pic08.jpg'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMongodbBreedsListBreeds {
        edges{
            node {
                name
                image
            }
        }
      }
  }
`

const Breeds = ({data}) => (
    <Layout>
        <Helmet>
            <title>theDoggo - Breeds</title>
            <meta name="description" content="Breeds" />
        </Helmet>

        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Breeds</h1>
                </header>
            </div>
        </section>
    
        <div id="main" className="alt">
            <section id="one"> 
            <div className="inner">
                        <div className="col-8">
                            <div className="grid-wrapper">
                            {data.allMongodbBreedsListBreeds.edges.map(({ node }, index) => (
                                        <div className="col-2">
                                            <h4> {node.name} </h4>
                                            <span className="image fit">
                                                <img src={node.image} alt={node.name} />
                                            </span>
                                        </div>
                                      )
                                    )}     
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Breeds