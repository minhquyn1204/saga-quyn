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
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [phone, setPhone] = useState("")
  const[validationMsg, setValidationMsg] = useState({})
  const router = useRouter();
  const[formValue, setFormValue] = useState(initialState);
  const{name,email,password,phone} = formValue;
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && email && password && phone){
      dispatch(createUserStart(formValue))
    }
    const isValid = validateAll()
    if(!isValid) 
    return
    setTimeout(()=>router.push('/'),500);
  };
  const onInputonchange = (e) =>{
      let{name, value} = e.target;
      setFormValue({...formValue,[name]:value})
  };
  const validateAll = () =>{
    const msg ={}
    const userlogin = users.find(item => item.email === email);
    console.log(userlogin);
    if(isEmpty(formValue.name)){
      msg.name="vui nhập Họ Tên"
    }
    if(isEmpty(formValue.email)){
      msg.email="vui nhập email"
    }else if(!isEmail(formValue.email)){
      msg.email="vui lòng nhập đúng email"
    }
    else if(userlogin) {
      msg.email= "email đã tồn tại"
    }   
    //
    if(isEmpty(formValue.password)){
      msg.password="vui nhập mật khẩu"
    }
    if( formValue.password.length <8 ){
      msg.password="mật khẩu không ít hơn 8 kí tự"
    }
    if(isEmpty(formValue.phone)){
      msg.phone="vui nhập phone"
    }

    setValidationMsg(msg)
    if(Object.keys(msg).length > 0) return false
    return true
  }

  return(
  <MDBValidation onSubmit={handleSubmit} className={styles.addUsers}>
    <div className={styles.phu}></div>
    <div className={styles.formAdd}>
    <h1 styles={{margin:"auto",padding:"15px",alignContent:"center",}}>Thêm users</h1>
     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={name} name="name" type="text" onChange={onInputonchange}  placeholder='your name'/>
      <p><i>{validationMsg.name}</i></p>
     </div>
     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={email} name="email" type="email" onChange={onInputonchange}  placeholder='email@gmail.com'/>
      <p><i>{validationMsg.email}</i></p>
     </div>
     <div className={styles.mrb10}>
   
      <input className={styles.mrb15} value={password} name="password" type="password" onChange={onInputonchange}  placeholder='you password'/>
     </div>
     <p><i>{validationMsg.password}</i></p>

     <div className={styles.mrb10}>
      <input className={styles.mrb15} value={phone} name="phone" type="number" onChange={onInputonchange}  placeholder='your phone'/>
     </div>
     <p><i>{validationMsg.phone}</i></p>
     
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
