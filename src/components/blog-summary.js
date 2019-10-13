import React from "react"
import PropTypes from "prop-types"

import { Text, H3 } from "./type"
import Link from "./link"

const BlogSummary = ({ node }) => {
  return (
    <article key={node.fields.slug}>
      <header>
        <H3>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </H3>
        <Text>{node.frontmatter.date}</Text>
      </header>
      <section>
        <Text>{node.frontmatter.description || node.excerpt}</Text>
      </section>
    </article>
  )
}

BlogSummary.propTypes = {
  node: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    excerpt: PropTypes.string,
  }),
}

export default BlogSummary
