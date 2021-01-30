import { Link } from 'gatsby'
import React from 'react'

interface ListLinkProps {
  to: string
  children: React.ReactNode
}

interface LayoutProps {
  children: React.ReactNode
}

const ListLink: React.FC<ListLinkProps> = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3>Alcoholics Anonymous Quinte East</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)

export default Layout
