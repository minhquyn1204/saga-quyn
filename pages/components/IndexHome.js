import React from 'react'
import styles from './indexHome.module.scss'
import Banner from './Home/Banners/Banner'
import Footer from './Home/Footers/Footer'
import Header from './Home/Headers/Header'

export default function IndexHome() {
    return (
        <div style={styles.Home}>
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}
