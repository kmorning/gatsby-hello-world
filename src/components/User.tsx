import React from 'react'
import styles from './user.module.css'

interface Props {
  username: string
  avatar: string
  excerpt: string
}

const User: React.FC<Props> = ({ username, avatar, excerpt }) => (
  <div className={styles.user}>
    <img src={avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{username}</h2>
      <p className={styles.excerpt}>{excerpt}</p>
    </div>
  </div>
)

export default User
