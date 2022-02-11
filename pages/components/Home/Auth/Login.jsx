import React, { useEffect } from "react";
import styles from "./Login.module.scss"
import Link from 'next/link'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PinterestIcon from '@material-ui/icons/Pinterest'
import { ButtonBase } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'


export default function Login({closeModal}){
  const {users} = useSelector((state)=>state.data)
  const router = useRouter()
  const[email,setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[validationMsg, setValidationMsg] = useState({})
  useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
      router.push("/Local")  
    }
  },[])
  const onchangeEmail = (e) =>{
    const value = e.target.value
    setEmail(value)
  }
  const onchangePassword = (e) =>{
    const value = e.target.value
    setPassword(value)
  }
  const validateAll = () =>{
    const msg ={}
    const userlogin = users.find(item => item.email === email);
    if(isEmpty(email)){
      msg.email="vui nhập email"
    }else if(!isEmail(email)){
      msg.email="vui lòng nhập đúng email"
    }
    else if(!userlogin) {
      msg.email= "sai email, vui lòng nhập lại"
    }   
    //
    if(isEmpty(password)){
      msg.password="vui nhập mật khẩu"
    }
    else if(userlogin) {
      if(userlogin.password !== password) {
        msg.password = "sai mật khẩu, vui lòng nhập lại"
      }
    }
    setValidationMsg(msg)
    if(Object.keys(msg).length > 0) return false
    return true
  }
  const onSubmit = () =>{
    const userlogin = users.find(item => item.email === email);
      const isValid = validateAll()
      if(!isValid) 
      return
      // setTimeout(() => router.push("http://localhost:8080/"), 10000);
      localStorage.setItem("user-info",JSON.stringify(userlogin))
      router.push('/Local')
    }
return(
    <div className={styles.modalBackground}>
    <div className={styles.modalContainer}>
      <div className={styles.titleCloseBtn}>
        <ButtonBase className={styles.buttonclose}
          onClick={() => {
            closeModal(false);
          }}
        >
          <CloseRoundedIcon/>
        </ButtonBase>
      </div>
          <div className={styles.formlogo}><PinterestIcon with="32px" height="32px"/></div>
      <div className={styles.title}>
        <h3>Chào mừng bạn đến với Pinterest</h3>
      </div>
      <div className={styles.body}>
        <p>Tìm những ý tưởng mới để thử</p>
      </div>
      <div className={styles.inputtypes}>
        <div className={styles.mrb25}>
          <input type="email" 
            value={email} 
            className={styles.mrb20} 
            onChange={onchangeEmail} 
            placeholder="@gmail.com"/></div>
            <p>{validationMsg.email}</p>
        <div className={styles.mrb25}>
          <input type="password" 
            value={password} 
            className={styles.mrb20} 
            onChange={onchangePassword} 
            placeholder="nhâp mật khẩu" /></div>
             <p>{validationMsg.password}</p>
        <div><Link href="/">Quên mật khẩu?</Link></div>
        <ButtonBase onClick={onSubmit}  className={styles.buttonlogin}>Đăng nhập</ButtonBase>
        <div className={styles.or}>Hoặc</div>
        <div>Login Facebook</div>
        <div>Login GG</div>
        <div className={styles.termsandservices}>
          <span><div>Bằng cách tiếp tục, bạn đồng ý với</div> 
          <span className={styles.mrb30}><Link href="/">Điều khoản dịch vụ </Link></span>của Pinterest và xác nhận rằng bạn đã đọc 
          <span className={styles.mrb30}><Link href="/"> Chính sách Quyền riêng tư </Link></span>của chúng tôi
          </span>
        </div>
      </div>
    </div>
  </div>
  
  )
}