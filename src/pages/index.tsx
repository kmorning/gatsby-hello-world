import React from 'react'
import Layout from '../components/Layout'

const Home: React.FC = () => (
  <Layout>
    <h1>A New Site Awaits</h1>
    <p>Building a better website...one day at a time!</p>
    <p>
      If you were looking for our actual AA website, click <a href="https://www.quinteeastaa.org">here</a>.
    </p>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wandeling_over_het_Hulshorsterzand-Hulshorsterheide_07-03-2020._%28d.j.b%29_20.jpg/1920px-Wandeling_over_het_Hulshorsterzand-Hulshorsterheide_07-03-2020._%28d.j.b%29_20.jpg"
      alt="Serenity"
    />
  </Layout>
)

export default Home
