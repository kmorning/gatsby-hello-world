import React from 'react'

interface Props {
  headerText?: string
}

const Header: React.FC<Props> = ({ headerText = 'This is a header' }) => {
  return <h1>{headerText}</h1>
}

export default Header
