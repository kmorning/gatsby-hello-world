import React from 'react'
import containerStyles from './container.module.css'

interface Props {
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => <div className={containerStyles.container}>{children}</div>

export default Container
