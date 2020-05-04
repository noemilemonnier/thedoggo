module.exports = {
  siteMetadata: {
    title: "TheDoggo",
    author: "Noemi Lemonnier",
    description: "TheDoggo"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `breeds_list`,
        collection: [`breeders`, `breeds`, 'rescues'],
        connectionString: 'mongodb+srv://nlemonn:ABC123@cluster0-ka0nj.azure.mongodb.net/',
        auth: { 
          user: 'nlemonn', 
          password: 'ABC123' 
        }
      }      
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#464646',
        theme_color: '#464646',
        display: 'minimal-ui',
        icon: 'src/assets/images/dogcaticon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
