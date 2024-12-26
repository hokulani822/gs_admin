import React from 'react'
import Header from '../../layout/Header'

const Home = () => {
  return (
    <>
    <Header />
    <div className={styles.home}>
        <SS
        <News />
        <CalendarItem />
    </div>
    </>
  )
}

export default Home