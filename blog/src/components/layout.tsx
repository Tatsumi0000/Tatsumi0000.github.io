import React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <Bio />
        Copyright © {new Date().getFullYear()}, Tatsumi0000 All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
