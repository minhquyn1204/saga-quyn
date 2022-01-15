import React from 'react'
import styles from './indexHome.module.scss'
import Banner from './Home/Banners/Banner'
import Footer from './Home/Footers/Footer'
import Header from './Home/Headers/Header'
import Slider from './Home/Sliders/Slider'

export default function IndexHome() {
    return (
        <div style={styles.Home}>
            <Header/>
            <Slider/>
            <Banner/>
            <Footer/>
        </div>
    )
}
