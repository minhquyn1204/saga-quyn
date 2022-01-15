import React from 'react'
import styles from './Header.module.scss'
import {Grid , Paper} from '@material-ui/core'
import { ReactComponent as Logo } from '../../../assets/images/logo-nvl.jpg'
import Navbar from './Navbar'

export default function Header() {
    return (
        <>
            <Paper  elevation={3} className={styles.HeaderMain} >
            <Grid container className={styles.Header} item xs={12}>
                <Grid item xs={3} className={styles.Logo} ><img src='https://www.novaland.com.vn/Data/Sites/1/media/Default/logo-nvl.jpg' alt="" /></Grid>
                <Grid item xs={9} className={styles.Navbar} ><Navbar/></Grid>
            </Grid>
            </Paper>
        </>
    )
}
