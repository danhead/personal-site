import React from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import Bio from "../components/bio"
import SEO from "../components/seo"
import Header from "../components/header"
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  BlockQuote,
} from "../components/type"
import Link from "../components/link"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: Text,
    a: Link,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    blockquote: BlockQuote,
  },
}).Compiler

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const disqusConfig = {
    url: `${data.site.siteMetadata.siteUrl + location.pathname}`,
    identifier: post.id,
    title: post.title,
  }

  return (
    <div>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Header
        heading={post.frontmatter.title}
        subheading={post.frontmatter.date}
      >
        <Bio readingTime={post.fields.readingTime.text} />
      </Header>
      <section>{renderAst(post.htmlAst)}</section>
      <section>
        <CommentCount config={disqusConfig} placeholder={"..."} />
        <Disqus config={disqusConfig} />
      </section>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
