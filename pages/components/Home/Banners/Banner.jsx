import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from './Banner.module.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Tabs } from './Tabs';


export default function Banner() {
    const content=[
        {
            id:1,
            img:"https://www.novaland.com.vn/Data/Sites/1/News/8610/700x394/novagroup---edit1.png",
            time:"05/03/1110",
            title:"NOVAGROUP ĐẠT GIẢI THƯỞNG THƯƠNG HIỆU VÀNG TPHCM 2021",
            titledaital:"Ngày 6/1/2022, NovaGroup nhận giải thưởng Thương hiệu Vàng TPHCM do..."
        },
        {
            id:2,
            img:"https://www.novaland.com.vn/Data/Sites/1/News/8608/500x282/t%E1%BA%ADp-%C4%91o%C3%A0n-novaland-%E1%BB%A7ng-h%E1%BB%99-20-t%E1%BB%B7-%C4%91%E1%BB%93ng-chung-tay-h%E1%BB%97-tr%E1%BB%A3-qu%E1%BB%B9-v%C3%AC-ng%C6%B0%E1%BB%9Di-ngh%C3%A8o-t%E1%BB%89nh-l%C3%A2m-%C4%91%E1%BB%93ng.jpg",
            time:"08/01/2022",
            title:"TẬP ĐOÀN NOVALAND TRAO 20 TỶ ĐỒNG CHUNG TAY CÙNG QUỸ “VÌ NGƯỜI NGHÈO” TỈNH LÂM ĐỒNG",
            titledaital:"..."
        },
        {
            id:3,
            img:"https://www.novaland.com.vn/Data/Sites/1/News/8606/500x282/microsoftteams-image-(39).png",
            time:"06/01/2022",
            title:"NOVALAND KÝ KẾT ĐỒNG HÀNH CÙNG CÁC ĐỐI TÁC TRONG LĨNH VỰC XÂY DỰNG",
            titledaital:"..."
        },
        

    ]
    const data = content.slice(1,3)
    return (
        <div className={styles.Banner}>
             <div className={styles.title}><h2>Thông tin mới</h2></div>
             <Row className={styles.Rowcontent}>
                    <Col lg={8} className={styles.allContent}>  
                    <div className={styles.mainContent}>
                        <div className={styles.content1}>
                        <>
                           <img src={content[0].img} alt="" /> 
                            <div className={styles.new_home_content}>
                                <AccessTimeIcon className={styles.icontime}/>{content[0].time}
                                <a href='/'> 
                                <h3>{content[0].title}<ArrowRightIcon className={styles.icon}/></h3></a>
                                <p>{content[0].titledaital}</p>
                            </div>
                        </>
                            
                        </div>
                        <Row className={styles.content2}>
                            <Col sm={6} className={styles.mrb30}>
                                <img src={content[1].img} alt="" />
                                <div className={styles.new_home_content2}>
                                <AccessTimeIcon className={styles.icontime}></AccessTimeIcon>{content[1].time}
                                <a href='/'> 
                                <h3>{content[1].title}<ArrowRightIcon className={styles.icon}/></h3></a>
                                </div>
                            </Col>
                            <Col sm={6} className={styles.mrb30}>
                                <img src={content[2].img} alt="" />
                                <div className={styles.new_home_content2}>
                                <AccessTimeIcon className={styles.icontime}></AccessTimeIcon>{content[2].time}
                                <a href='/'> 
                                <h3>{content[2].title}<ArrowRightIcon className={styles.icon}/></h3></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col lg={4} className={styles.tabContent}>
                        <div className={styles.titleContent}>
                            <Tabs/>
                        </div>
                    </Col>
             </Row>
        </div>
    )
}
