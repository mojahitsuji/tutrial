// Step 1: Import React
import * as React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home page"}>
      <p>I'm making this by following the Gatsby Tutrial.</p>
      <StaticImage
        alt='The man is reading the book with drinking coffee'
        src='../images/photo-1518457900604-5c973dffdedf.jpeg'
      />

    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage