import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { Carousel } from "react-bootstrap";

const slider = [
  {
    id: 1,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
    title: 'Sứ Mệnh',
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
  {
    id: 2,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-web-novagroup-1440x609px---florida---resize.jpg",
    title: "title2",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
   
  },
  {
    id: 3,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609.png",
    title: "Tập đoàn kinh tế hàng đầu trong các lĩnh vực",
    titledaital:['- BẤT ĐỘNG SẢN','- KIẾN TẠO ĐIỂM ĐẾN DU LỊCH','- PHÁT TRIỂN HẠ TẦNG GIAO THÔNG']
  },
  {
    id: 4,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/cover-15112021_1440x609.jpg",
    title: "GIÁ TRỊ CỐT LÕI",
    titledaital:['HIỆU QUẢ - CHÍNH TRỰC - CHUYÊN NGHIỆP']
  },
  {
    id: 5,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/banner-1440-x-609-100.jpg",
    title: "title5",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
  {
    id: 6,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
    title: "title6",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
  {
    id: 7,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
    title: "title7",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
  {
    id: 8,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
    title: "title8",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
  {
    id: 9,
    img: "https://www.novaland.com.vn/Data/Sites/1/Banner/1440x605/1banner-1440-x-609.png",
    title: "title9",
    titledaital:['- Kiến tạo cộng đồng','- Xây dựng điểm đến','- Vun đắp niềm vui']
  },
];

export default function Slider() {
  return (
    <>
      <div className={styles.Slider}>
            <div>
              <Carousel fade>
            {slider.map((data, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={data.img}
                    alt="First slide"
                  />
                  <Carousel.Caption className={styles.stitlebox}>
                    <div  className={styles.stitle}>

                    <p>
                     {data.title}</p>
                     {slider[index].titledaital&&slider[index].titledaital.map((item,i) => (
                       <p key={i}>{item}</p>
                       ))}   
                      
                       </div>
                  </Carousel.Caption>
                </Carousel.Item>
                  ))}
              </Carousel>
            </div>
      </div>
      <div className={styles.None}></div>
    </>
  );
}
