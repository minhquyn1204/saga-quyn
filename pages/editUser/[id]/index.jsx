import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import {useDispatch , useSelector} from 'react-redux'
import { UpdateUserStart } from '../../actions/getUsers';
import { MDBValidation } from 'mdb-react-ui-kit';
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import  styles from './editUser.module.scss';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const initialState = {
    name:"",
    email:"",
    password:"",
    phone:"",
}

const Addusers = () =>{
  const dispatch = useDispatch();
  const {users} = useSelector((state)=>state.data)
  const  router = useRouter()
  const[validationMsg, setValidationMsg] = useState({})
  const[formValue, setFormValue] = useState(initialState);
  const{name,email,password,phone} = formValue;

    // useEffect(()=>{
    //   if(router.query.id){
    //     const singleUser = users.find((user) => user.id === Number(router.query.id) )
    //     setFormValue({...singleUser});
    //   }
    // },[router.query.id])

  useEffect( ()=>{
    if(router.query.id) {
      async function fetchUser() {
        const user = await axios.get(`http://localhost:5000/users/${router.query.id}`)
        setFormValue({
          name:user.data.name,
          email:user.data.email,
          password:user.data.password,
          phone:user.data.phone,
        })
      }
      fetchUser()  
    }
  },[router.query.id])


  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && email && password && phone){
      dispatch(UpdateUserStart(router.query.id,{...formValue}))
    }
    setTimeout(()=>router.push('/'),500);
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
      <input className={styles.mrb15}
       value={name || ""}
        name="name"
        type="text"
        onChange={onInputonchange} 
        placeholder='your name'/>
      <p><i>{validationMsg.name}</i></p>
     </div>
     <div className={styles.mrb10}>
      <input className={styles.mrb15}
       value={email || ""}
      name="email"
      type="email"
      onChange={onInputonchange} 
      placeholder='email@gmail.com'/>
      <div><i>{validationMsg.email}</i></div>
     </div>
     <div className={styles.mrb10}>
   
      <input className={styles.mrb15}
      value={password || ""} 
      name="password"
      type="password"
      onChange={onInputonchange} 
      placeholder='you password'/>
     </div>
     <p><i>{validationMsg.password}</i></p>

     <div className={styles.mrb10}>
      <input className={styles.mrb15}
      value={password || ""}
      name="phone" type="number"
      onChange={onInputonchange}
      placeholder='your phone'/>
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
