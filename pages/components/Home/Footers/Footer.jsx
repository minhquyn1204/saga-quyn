import React from 'react'
import styles from './Footer.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer1 from './Footer1';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                speed: 500,
                rows: 6,
                centerPadding: "0px",
            },
        },
    ],
};
const consoures = [
    {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg",
        title:'THE GRAND MANHATTAN',
        Links:'/THE GRAND MANHATTAN'
    },
      {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg",
        title:'NovaHills Mui Ne Resort & Villas',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
        title:'NovaWorld Phan Thiet',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/beach.jpg",
        title:'NovaBeach Cam Ranh Resort & Villas',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
      {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/crop-sunrisecity.jpg",
        title:'a2',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/orchard-garden.jpg',
        title:'Orchard Garden',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lexington.jpg",
        title:'a1',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
      {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/the-sun-avenue_no-use.jpg",
        title:'a2',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
        title:'a3',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg",
        title:'a1',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
      {
        img: "https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg",
        title:'Aqua City',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
    {
        img: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
        title:'NovaWorld Ho Tram',
        Link:'/NovaHills Mui Ne Resort & Villas'
    },
]
export default function Footer() {
    return (
        <div className={styles.FooterMain}> 
       <div className={styles.titleFooter}> <h2>Dự án tiêu biểu</h2></div> 
        <Slider {...settings}>
            {consoures.map((data,index)=>(
          <div className={styles.full} key={index}>
              <>
              <img src={data.img} alt=""/>
              <a className={styles.full_link} href={data.Link}>{data.title}<ArrowRightIcon/></a>
              </>
          </div>
            ))}
        </Slider>
        <Footer1 />
        <Footer2/>
        <Footer3/>
      </div>
    );
}
