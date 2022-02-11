import React, { useEffect } from "react";
import styles from "./register.module.scss"
import Link from 'next/link'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import PinterestIcon from '@material-ui/icons/Pinterest'
import { ButtonBase } from "@material-ui/core";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import isEmpty from 'validator/lib/isEmpty'
import isEmail from "validator/lib/isEmail";


export default function Register({closeModalR}){
  const {users} = useSelector((state)=>state.data)
    const [ email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [ name,setName] = useState("");
    const [ phone,setPhone] = useState("");
    const router = useRouter();
    const[validationMsg, setValidationMsg] = useState({})
    useEffect(()=>{
      if(localStorage.getItem('user-info'))
      {
        // router.push("/Local")  
      }
    },[])
    const validateAll = () =>{
      const msg ={}
      const userlogin = users.find(item => item.email === email);
      if(isEmpty(email)){
            msg.email="vui nhập email"
          }else if(!isEmail(email)){
            msg.email="vui lòng nhập đúng email"
          }
          else if(userlogin) {
            msg.email= "địa chỉ email đã tồn tại"
          } 
      if(isEmpty(password)){
            msg.password="vui nhập mật khẩu"
          }
      if(isEmpty(name)){
            msg.password="vui nhập tên của bạn"
          }
      if(isEmpty(phone)){
            msg.password="vui nhập tên của bạn"
          }
      setValidationMsg(msg)
          if(Object.keys(msg).length > 0) return false
          return true
      }
    async function register()
  {
    let item = {email,password,name,phone, token: Math.floor(Math.random() *100)};
    const isValid = validateAll()
    if(!isValid)
    return
    let result = await fetch("http://localhost:5000/users",{
      method:'POST',
      headers:{"Content-Type":"application/json",
    },
    body: JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    setTimeout(() => router.push("http://localhost:8080"), 10000);
    router.push("/Local")  
  }
  return(
    <div className={styles.modalBackground}>
    <div className={styles.modalContainer}>
      <div className={styles.titleCloseBtn}>
        <ButtonBase className={styles.buttonclose}
          onClick={() => {
            closeModalR(false);
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
            <input type="email" className={styles.mrb20} onChange={(e)=>setEmail(e.target.value)} placeholder="nhâp tài khoản" /></div>
            <p>{validationMsg.email}</p>
        <div className={styles.mrb25}>
            <input type="password" className={styles.mrb20} onChange={(e)=>setPassword(e.target.value)}  placeholder="nhập mật khẩu"/></div>
            <p>{validationMsg.password}</p>
        <div className={styles.mrb25}>
            <input type="text" className={styles.mrb20} onChange={(e)=>setName(e.target.value)} placeholder="nhâp mật tên" /></div>
        <div className={styles.mrb25}>
            <input type="text" className={styles.mrb20} onChange={(e)=>setPhone(e.target.value)} placeholder="nhâp số điện thoại" /></div>
        <div><Link href="/">Quên mật khẩu?</Link></div>
        <ButtonBase onClick={register} className={styles.buttonlogin}>Đăng kí</ButtonBase>
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