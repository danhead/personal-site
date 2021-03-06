---
title: Migrating to Gatsby
date: "2019-10-12T22:12:03.284Z"
description: "Why and how I migrated this site to Gatsby"
---

Welcome to the first post of my redesigned site, it's certainly been a long time
coming.

Until now I've refrained from including a blog on my site, reserving it just for
basic content about me, however I've found myself wanting to record things I've
learned, sometimes for posterity, other times for future reference.

The old site was built using [Express](https://expressjs.com/), using
[pug](https://pugjs.org) for templating and wasn't really geared up to support a
blog without a significant amount of investment.

I wanted to get something up and running relatively quickly, ideally using a
more modern static-site generator, I also wanted to rekindle a 2 year hiatus
from using React.

## Gatsby

[Gatsby](https://www.gatsbyjs.org) seemed like an obvious choice as it ticks a
lot of boxes:

- **Uses React** - Although I've not used React much in the last 2 years, I'm
  still pretty proficient with it, this gives me an opportunity to renew my
  skills and explore some of the new features, like Functional components and
  Hooks
- **Extendible** - Gatsby has a fantastic ecosystem of open source plugins,
  coupled with a robust API it means you can easily integrate new
  features and functionality to practically any part of the application
- **Dynamic data** - Gatsby uses [GraphQL](https://graphql.org/) to create an
  abstraction layer between your data and the application. Data written in
  pretty much any format can be consumed in to a Gatsby application
- **PWA** - Not only does Gatsby generate static HTML, great for SEO, but it
  also uses React in the client to create a single page app

I started with
[gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) as a
foundation, only requiring a few additions to settle on something I'm pretty
happy to work with.

## CSS

I've spent most of my professional life working with CSS in the more traditional
sense (including Sass + PostCSS), so I wanted to do so something a bit different
here, [styled-components](https://www.styled-components.com/) seemed like an
obvious choice.

This was the biggest task as it required the migration of all the old
[BEM like
CSS](https://github.com/danhead/personal-site/tree/f15c711778ffb364d2e99bebd867d19082e440df/css)
over to the new site. I also took this opportunity to rework the design by
replacing the old navigation with an off-canvas sidebar.

I'm an advocate of not embracing the cascade in CSS as it can lead to
specificity hell in larger applications, so writing CSS in JavaScript, scoped to
components aligns nicely with how I like to write CSS normally.

### Typography

I didn't want a particularly complex typography system, at least not to start
off with, so I removed [Typography.js](https://www.npmjs.com/package/typography)
and resorted to a slightly more primitive solution using `styled-components`:

```js
import styled from "styled-components"

export const Text = styled.p`
  margin: 0 0 0.75rem;
  font-size: 1rem;
`
```

For now, the common typography styles like `font-family` cascade down from the
body. I may well revisit this in the future and implement a more advanced
solution.

## Blog content

As I will be the only person writing (infrequent) blog posts, I opted not to
implement a CMS, favouring authoring posts using markdown and reading them using
[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/).
The only limitation I discovered with this solution was applying more complex
CSS to content generated from markdown.

I didn't really want to embrace the cascade of CSS and apply styles to standard
elements like `<p>` and `<h1>`, I wanted to be able to use the styled-components
I had already created.

It turns out, it was really easy, using
[rehype-react](https://github.com/rehypejs/rehype-react). Rather than using the
compiled HTML generated by `gatsby-source-filesystem`, you can pass the AST in to
`rehype-react` and it will use your `styled-components` for specific elements.

1. Get `htmlAst` in your GraphQL query:

```js
query BlogPostBySlug($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    htmlAst
  }
}
```

2. Import and create the render function

Using the `components` object you can pass in your `styled-components` to the
renderer.

```js
import React from "react"
import rehypeReact from "rehype-react"
import { H1, Text } from "../components/type"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    p: Text,
  },
}).Compiler
```

3. Use the render function with the `htmlAst`

```js
const BlogPost = ({ data }) => (
  <div>{renderAst(data.markdownRemark.htmlAst)}</div>
)
```
