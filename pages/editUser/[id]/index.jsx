import React from 'react'
import { MDBValidation } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'
import styles from './editUser.module.scss'
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
    return(
      <MDBValidation  className={styles.addUsers}>
        <div className={styles.phu}></div>
        <div className={styles.formAdd}>
        <h1 styles={{margin:"auto",padding:"15px",alignContent:"center",}}>Edit user</h1>
         <div className={styles.mrb10}>
          <input className={styles.mrb15} name="name" type="text"  placeholder='your name'/>
         </div>
         <div className={styles.mrb10}>
          <input className={styles.mrb15}  name="email" type="email"   placeholder='email@gmail.com'/>
         </div>
         <div className={styles.mrb10}>
       
          <input className={styles.mrb15}  name="password" type="password"   placeholder='you password'/>
         </div>
         <div className={styles.mrb10}>
          <input className={styles.mrb15}  name="phone" type="number" placeholder='your phone'/>
         </div>
          <div>
            <Button type='submit'className={styles.buttonAdd} >Sửa</Button>   
            <Button type='submit'className={styles.buttonBack} onClick={()=>router.push('/')}>Quay về</Button>
          </div>
        </div>
        <div className={styles.phu}></div>
      </MDBValidation>
  )
}
