import React from "react"
import Header from "../components/header"
import { Text } from "../components/type"
import Link from "../components/link"
import SEO from "../components/seo"

const Index = () => (
  <div>
    <SEO title="Contact" />
    <Header heading="Contact" />
    <Text>
      If you'd like to get in touch, please email me at{" "}
      <Link to="mailto:me@danielhead.com">me@danielhead.com</Link> and I'll get
      back to you!
    </Text>
  </div>
)

export default Index
