import React from 'react'
import Header from '../../layout/Header'
import SideBar from '../../layout/Sidebar'

const Home = () => {
  return (
    <>
    <Header />
    <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}></div>
        <News />
        <CalendarItem />
    </div>
    </>
  )
}

export default Home