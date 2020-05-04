import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMongodbBreedsListRescues {
        edges {
          node {
            name
            website
            city
            country
          }
        }
      }
  }
`

const Elements = ({data}) => (
    <Layout>
        <Helmet>
            <title>theDoggo - Rescues</title>
            <meta name="description" content="Rescues" />
        </Helmet>

        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Rescues</h1>
                </header>
                <div className="content">
                    <p>Here is where you can find some rescues in Canada. </p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        {data.allMongodbBreedsListRescues.edges.map(({ node }, index) => (
                            <div className="col-4">
                                <h3>{node.name}</h3>
                                <p> Website: <a href={node.website}> {node.website}</a> </p>
                                <p> Location: {node.city}, {node.country} </p>
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

export default Elements