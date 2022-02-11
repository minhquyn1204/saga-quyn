import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import {useDispatch , useSelector} from 'react-redux'
import { createUserStart } from '../actions/getUsers';
import { MDBValidation } from 'mdb-react-ui-kit';
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import  styles from './addusers.module.scss';
import { Button } from 'react-bootstrap';

const initialState = {
    name:"",
    email:"",
    password:"",
    phone:"",
}

const Addusers = () =>{
  const dispatch = useDispatch();
  const {users} = useSelector((state)=>state.data)
  const[validationMsg, setValidationMsg] = useState({})
  const router = useRouter();
  const[formValue, setFormValue] = useState(initialState);
  const{name,email,password,phone} = formValue;
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && email && password && phone){
      dispatch(createUserStart(formValue))
      setTimeout(()=>router.push('/'),500);
    }
  };
  const onInputonchange = (e) =>{
      let{name, value} = e.target;
      setFormValue({...formValue,[name]:value})
  };

  return(
  <MDBValidation onSubmit={handleSubmit} className={styles.addUsers}>
    <div className={styles.phu}></div>
    <div className={styles.formAdd}>
    <h1 styles={{margin:"auto",padding:"15px",alignContent:"center",}}>Thêm users</h1>
     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={name} name="name" type="text" onChange={onInputonchange}  placeholder='your name'/>
      <p>{validationMsg.name}</p>
     </div>
     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={email} name="email" type="email" onChange={onInputonchange}  placeholder='email@gmail.com'/>
      <p>{validationMsg.email}</p>
     </div>
     <div className={styles.mrb10}>
   
      <input className={styles.mrb15} value={password} name="password" type="password" onChange={onInputonchange}  placeholder='you password'/>
     </div>
     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={phone} name="phone" type="number" onChange={onInputonchange}  placeholder='your phone'/>
     </div>
      <div>
        <Button type='submit'className={styles.buttonAdd} >Thêm</Button>   
        <Button type='submit'className={styles.buttonBack} onClick={()=>router.push('/')}>Quay về</Button>
      </div>
    </div>
    <div className={styles.phu}></div>
  </MDBValidation>
  )
}

export default Addusers;
