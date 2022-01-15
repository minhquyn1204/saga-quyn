import React from 'react'
import styles from './Footer1.module.scss'
import { Row,Col } from 'react-bootstrap'


const footer=[
    {
        title:"Đăng ký nhận bản tin",
        desc:" Kết nối với chúng tôi để theo dõi thông tin mới nhất",

        title2:"Brochure Công ty",
        desc2:"Download Brochure mới nhất của Novaland để hiểu rõ hơn về chúng tôi"
    },
]

// let lastArray = footer.slice(len -1, len)

export default function Footer1() {
    return (
        <div className={styles.footer1}>
               <Row>
                            {footer&&footer.map((data,index)=>(
                    <div className={styles.Modulecontent} key={index}>
                        <Col sm={4} xs={12} className={styles.mrb25}>
                                    <div className={styles.titleF}>
                                    <h5>{data.title}</h5>
                                    {data.desc}
                                    </div>
                           <input type="text" className={styles.inputtext} placeholder='Địa chỉ email'/>
                            <input type="submit" value="Đăng Kí" className={styles.key}/>
                        </Col>
                        <Col sm={4} xs={12} className={styles.mrb25}>
                            <div className={styles.itemdowload}>
                          <a href='https://www.novaland.com.vn/Data/Sites/1/media/brochure/2021/vn_novaland_group_brochure_mini_0701.pdf'><img src='https://www.novaland.com.vn/Data/Sites/1/media/Default/download_bttn.png' alt="" /></a>
                          <div className={styles.media_body}>
                            <h5>{data.title2}</h5>
                            <p>{data.desc2}</p>
                            <a href="">Tải brochure</a></div>
                        </div>
                        </Col>
                        <Col sm={4} xs={12} className={styles.mrb25}>
                            <div className={styles.media}>
                            <p><span><strong>Tổng đài CSKH:</strong></span>
                                <span><strong><a href="tel:1900636666">1900 63 6666</a></strong></span></p>
                            <p><span><strong>Email:&nbsp;</strong></span>
                                <strong><a href="mailto:chamsockhachhang@novaland.com.vn">chamsockhachhang@novaland.com.vn</a>
                        </strong></p>
                        </div>
                        </Col>
                    </div>
                     ))}
                     </Row>
                </div>
    )
}