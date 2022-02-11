import React from 'react'
import styles from './Header.module.scss'
import PinterestIcon from '@material-ui/icons/Pinterest'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { useState } from "react";
import Login from '../Auth/Login'
import Register from '../register/Register'
import { useRouter } from 'next/router'

export default function Header() {
    const[showModal,setShowModal] = useState(false);
    const[showModalR,setShowModalR] = useState(false);
    const router=useRouter();
    return (
        <div className={styles.HeaderMain}>
        <div className={styles.Logo}>
            <PinterestIcon/>
            <h1>Pinterest</h1>
        </div>
        <div className={styles.Navbar}>
            <div className={styles.link}>
                    <div>
                        <Link href="/gioithieu">Giới thiệu</Link>
                    </div>
                    <div>
                    <Link href="/gioithieu"> Doanh nghiệp</Link>
                    </div>
                    <div><Link href="/gioithieu">Blog</Link></div>
            </div>
                  <div className={styles.login}>
                  <Button onClick={()=>{setShowModal(true)}}>Đăng nhập</Button>
                 {showModal &&
                     <Login closeModal={setShowModal} />
                 }
                  </div>
                  <div className={styles.register}>
                      <Button onClick={()=>{setShowModalR(true)}}>Đăng kí</Button>
                 {showModalR &&
                     <Register closeModalR={setShowModalR} />
                 }</div>
        </div>
        </div>
    )
}
