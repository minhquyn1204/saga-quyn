import { useState } from "react";
import styles from './Tab.module.scss'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const titletab =[
    {
      time:"04/01/2022",
      title:"CẬN CẢNH THẢM NHỰA CAO TỐC PHAN THIẾT - DẦU GIÂY NGÀY ĐẦU NĂM 2022",
      titledaital:'Tận dụng "thời gian vàng" các nhà thầu thi công cao tốc Phan Thiết - Dầu Giây đang thi công ngày đêm không nghỉ Tết dương lịch 2022.'
    },
    {
      time:"21/12/2021",
      title:"BỐN DỰ ÁN THÀNH PHẦN CAO TỐC BẮC NAM SẼ HOÀN THÀNH NĂM 2022",
      titledaital:"Bộ Giao thông vận tải (GTVT) dự kiến 4 dự án thành phần cao tốc Bắc Nam phía Đông giai đoạn 2017 - 2020 sẽ hoàn thành, đưa vào khai thác trong năm 2022."
    },
    {
      time:"21/12/2021",
      title:"CAO TỐC PHAN THIẾT - DẦU GIÂY QUA ĐỒNG NAI PHẤN ĐẤU VƯỢT TIẾN ĐỘ 3 THÁNG",
      titledaital:"Những mét đường đầu tiên cao tốc Phan Thiết - Dầu Giây bắt đầu được nhà thầu thảm nhựa, dự án phấn đấu hoàn thành vượt tiến độ 3 tháng.",
    }
  ]
const titletab2=[
  {
    time:"06/01/2022",
    title:"CỤM SÂN GOLF PGA TẠI NOVAWORLD PHAN THIET SẴN SÀNG CHO CÁC GIẢI ĐẤU",
    titledaital:"Cụm sân golf PGA độc quyền duy nhất tại Việt Nam sẽ vận hành toàn khu từ đầu năm 2022. Nova Golf Clubs - đơn vị vận hành cụm sân vừa hợp tác với Binh Minh Golf - Entertainment, nhằm đồng hành mở rộng chuỗi giải đấu lớn tại đây.",
  },
  {
    time:"22/12/2021",
    title:"NOVAWORLD CENTER MANG TRẢI NGHIỆM “VÒNG QUANH THẾ GIỚI” TẠI PHAN THIẾT",
    titledaital:"NOVAWORLD CENTER MANG TRẢI NGHIỆM “VÒNG QUANH THẾ GIỚI” TẠI PHAN THIẾT",
  },
  {
    time:"16/12/2021",
    title:"ĐI TÌM CHUẨN SỐNG LA DOLCE VITA Ở AQUA CITY",
    titledaital:"Kể từ thời điểm Pietro Riva sáng lập ra thương hiệu du thuyền mang tên mình vào năm 1842 tại Sarnico - một thị trấn nhỏ xinh ở miền bắc nước Ý - thương hiệu du thuyền này đã trở thành biểu tượng tiêu biểu cho phong cách sống thượng lưu.",
  },
]
  return (<>
    <div className={styles.container}>
      <div className={styles.bloc_tabs}>
        <button
          className={toggleState === 1 ?  styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(1)}
        >
          Thông tin thị trường
        </button>
        <button
          className={toggleState === 2 ? styles.active_tabs : styles.tabs}
          onClick={() => toggleTab(2)}
        >
          Tin dự án
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={toggleState === 1 ? styles.active_content : styles.content}
        >{titletab.map((data,index)=>(
          <article className={styles.clearfix} key={index}>
          <time> <AccessTimeIcon className={styles.icontime}></AccessTimeIcon>
          {data.time}</time>
          <h3>
            <a className={styles.transition} target="_self" href="">
              {data.title}<ArrowRightIcon className={styles.icon}/></a>
              </h3>
              {data.titledaital}
            </article>
            ))}
        </div>

        <div
          className={toggleState === 2 ? styles.active_content : styles.content}
        >{titletab2.map((data,index)=>(
            <article className={styles.clearfix} key={index}>
          <time> <AccessTimeIcon className={styles.icontime}></AccessTimeIcon>
         {data.time}</time>
          <h3>
          <a className={styles.transition} target="_self" href="">
              {data.title}<ArrowRightIcon className={styles.icon}/>
             </a>
              </h3>
              {data.titledaital}
            </article>
        ))}
        </div>
      </div>
    </div>
    <div className={styles.all}>
      <h3>xem tất cả<ArrowRightIcon className={styles.icon}/></h3>
    </div>
    </>
  );
}
