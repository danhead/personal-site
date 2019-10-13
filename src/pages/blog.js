import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import SEO from "../components/seo"
import BlogSummary from "../components/blog-summary"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      <SEO title="All posts" />
      <Header heading="Blog" />
      {posts.map(({ node }) => {
        return <BlogSummary key={node.fields.slug} node={node} />
      })}
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
