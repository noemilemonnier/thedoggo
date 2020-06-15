import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import { Link } from "gatsby"

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
                        <table id="myTable">
                        	<tbody>
                        	{data.allMongodbBreedsListBreeds.edges.map(({ node }, index) => (
                        		<tr>
      								<td class="cell">{node.name} </td>
      								<td> <span className="image fit"> <img src={node.image} alt={node.name} /> </span> </td>
    							</tr>
    							  )
                                )} 
  							</tbody>
						</table>
                        </div>
                </div>
                    <Link onClick={data.onClick} to="/ajax"><a className="iconDog alt fa fa-spinner" /></Link>
            </section>
        </div>
    </Layout>
)


export default Breeds