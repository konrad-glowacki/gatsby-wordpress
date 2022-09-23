import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  //highlight-line
  return (
    <Layout>
      <Seo title="home" />
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
