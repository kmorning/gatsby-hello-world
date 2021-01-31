import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

interface PageQueryProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const About: React.FC<PageQueryProps> = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title} Development</h1>
    <p>This is the staging ground for the development of our website.</p>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
