import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let header  = (
    <h1 className="main-heading">
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </h1>
  )

  return (
    <header className="global-header">{header}</header>
  )
}

export default Header
