import React from "react"
import Link from "../components/link"
import Header from "../components/header"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not Found" />
    <Header heading="404: Not Found" />
    <Link to="/">Back home</Link>
  </div>
)
export default NotFoundPage
