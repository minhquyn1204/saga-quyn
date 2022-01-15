import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import ReorderIcon from "@material-ui/icons/Reorder";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import GTranslateIcon from "@material-ui/icons/GTranslate";
import TransitionsModal from "./TransitionsModal";
let Nav = [
  {
    name: "TRANG CHỦ",
    link: "/",
  },
  {
    name: "GIỚI THIỆU",
    link: "/",
  },
  {
    name: "DỰ ÁN",
    link: "/",
  },
  {
    name: "QUAN HỆ ĐẦU TƯ",
    link: "/",
  },
  {
    name: "TIN TỨC",
    link: "/",
  },
  {
    name: "PHÁT TRIỂN BỀN VỮNG",
    link: "/",
  },
  {
    name: "TUYỂN DỤNG",
    link: "/",
  },
  {
    name: "LIÊN HỆ",
    link: "/",
  },
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const handleClick = () =>{ setVisible((prevState) =>!prevState)}
  return (
    <div className={styles.Navbar}>
      <div className={styles.hotline}>
        <h3>
          Tổng đài CSKH:
          <strong>
            <a href="tel:1900 63 6666">1900 63 6666</a>
          </strong>
        </h3>
      </div>
      <ul className={isMobile ? styles.Navbarlinks_mobile : styles.Navbarlinks}>
        {Nav &&
          Nav.map((data, index) => (
            <a key={index} className={styles.links} href={data.link}>
              <li className={styles.items}>{data.name}</li>
            </a>
          ))}
        {/* <Button onClick={handleClick} className={styles.icon2} ><SearchIcon /></Button>
              {visible && <div className={styles.search}>aaaa</div>} */}
       <div className={styles.icon1}> <TransitionsModal /></div>
        <div className={styles.icon2}>
          <GTranslateIcon />
        </div>
      </ul>

      <Button
        className={styles.ButtonIcon}
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <CloseIcon color="primary">add_circle</CloseIcon>
        ) : (
          <ReorderIcon color="primary">add_circle</ReorderIcon>
        )}
      </Button>
    </div>
  );
}
