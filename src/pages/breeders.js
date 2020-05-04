import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMongodbBreedsListBreeders {
        edges {
            node {
                name 
                dogBreed
                website
                province
                country
            }
        }
    }
  }
`

const Generic = ({ data }) => (
    <Layout>
        <Helmet>
            <title>theDoggo - Breeders</title>
            <meta name="description" content="Breeders" />
        </Helmet>
        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Breeders</h1>
                </header>
                <div className="content">
                    <p>Here is where you can find some CKC breeders in Canada. </p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        
                        {data.allMongodbBreedsListBreeders.edges.map(({ node }, index) => (
                            <div className="col-4">
                                <h3>{node.name}</h3>
                                <p> Website: <a href={node.website}> {node.website}</a> </p>
                                <p> Breed: {node.dogBreed} </p>
                                <p> Location: {node.province}, {node.country} </p>
                                <hr className="major" />
                            </div>
                            )
                        )}
                        
                    </div>

                </div>
            </section>

        </div>

    </Layout>
)

export default Generic