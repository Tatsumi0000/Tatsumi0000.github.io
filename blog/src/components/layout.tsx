import React from "react"
import Bio from "../components/bio"
import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />
      <main>{children}</main>
      <footer>
        <Bio />
        Copyright © {new Date().getFullYear()}, Tatsumi0000 All Rights Reserved.
      </footer>
      </div>
      </div>
  )
}

export default Layout
