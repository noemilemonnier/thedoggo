import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="TheDoggo"
                    meta={[
                        { name: 'description', content: 'TheDoggo' },
                        { name: 'keywords', content: 'TheDoggo, home' },
                    ]}
                >
                </Helmet>

                <Banner />

                
            </Layout>
        )
    }
}

export default HomeIndex