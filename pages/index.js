import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import IndexHome from './components/IndexHome'

export default function Home() {
  return (
    <div className={styles.container}>
  <IndexHome />
    </div>
  )
}
