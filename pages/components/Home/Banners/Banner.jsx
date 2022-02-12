import React from 'react'
import styles from './Banner.module.scss'
import { useEffect } from 'react'
import { loadUserStart,deleteUserStart,onUpdateUser } from '../../../actions/getUsers'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import DeleteIcon from '@material-ui/icons/Delete'
import { MDBTable, MDBTableHead, MDBTableBody, MDBTooltip, MDBSpinner, MDBIcon } from 'mdb-react-ui-kit'

export default function Banner() {
    const dispatch = useDispatch();
    const {users} = useSelector(state=> state.data)
    useEffect(()=>{
        dispatch(loadUserStart())
    },[]);
    const handleDelete = (id) =>{
            if(window.confirm('bạn có chắc muốn xoá')){
                dispatch(deleteUserStart(id));
            }
    }
    const onUpdate = (id) =>{
        dispatch(onUpdateUser(id))
      }
   return(
       <div className={styles.Banner} >
           <MDBTable>
               <MDBTableHead>
               <MDBIcon>  <Link href="/Addusers">thêm user</Link></MDBIcon>
                   <tr>
                       <th>id</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>password</th>
                       <th>actions</th>
                       <th>no.</th>
                   </tr>
               </MDBTableHead>
               {users && users.map((user,index) => (
                   <MDBTableBody key={index}>
                       <tr>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.email}</td>
                           <td>{user.phone}</td>
                           <td>{user.password}</td>
                           <td>
                            <button onClick={()=>handleDelete(user.id)}>
                                <DeleteIcon/>
                            </button>
                            <button>
                                <Link onClick={()=>onUpdate(user.id)} href={`/editUser/${user.id}`}>edit</Link>
                            </button>
                           </td>
                           <td>x</td>
                       </tr>
                   </MDBTableBody>
               ))}
           </MDBTable>
       </div>
   )
}
