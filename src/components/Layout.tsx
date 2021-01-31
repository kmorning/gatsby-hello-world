/** @jsx jsx */
// the line above activates the jsx factory by emotion
import React from 'react'
import { css, jsx } from '@emotion/react'
import { Link } from 'gatsby'

// import { rhythm } from '../utils/typography'

interface ListLinkProps {
  to: string
  children: React.ReactNode
}

interface LayoutProps {
  children: React.ReactNode
}

const divStyle = css({
  margin: '0 auto',
  maxWidth: '700px',
  padding: '2rem',
  paddingTop: '1.5rem'
})

const ListLink: React.FC<ListLinkProps> = ({ to, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </li>
)

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div css={divStyle}>
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
