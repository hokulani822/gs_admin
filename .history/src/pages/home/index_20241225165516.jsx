import React from 'react'
import Header from '../../layout/Header'
import SideBar from '../../layout/Sidebar'
import News from '../../components/Sidebar'
import CalendarItem from '../../components/Sidebar'

const Home = () => {
  return (
    <>
    <Header />
    <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
            <News />
            <CalendarItem />
        </div>
    </div>
    </>
  )
}

export default Home