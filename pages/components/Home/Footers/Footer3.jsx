import React from "react";
import styles from "./Footer3.module.scss";
import {Row, Col } from "react-bootstrap";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer3() {
  return (
    <div className={styles.Footer3}>
      <Row className={styles.mrb15}>
        <Col xl={10}>
          <div className="ModuleContent">
            <p>
              <a href="" target="_blank">
                Chính sách bảo mật
              </a>
            </p>
            <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA</p>
            <p>
              Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do Sở Kế hoạch
              và Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992
            </p>
            <p>
              Tòa nhà văn phòng Novaland, 65 Nguyễn Du, P.Bến Nghé, Quận 1, TP.
              HCM - ĐT:&nbsp;<a href="tel:84906353838 ">(84) 906 35 38 38</a>
              &nbsp;- Hotline:<a href="tel:1900636666">1900 63 6666</a>
            </p>
            © 2016. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các
            quyền được bảo hộ.&nbsp;
          </div>
        </Col>
        <Col xl={2}>
            <div>
                <ul className={styles.items}>
                    <li>
                        <a href=""><FacebookIcon className={styles.icon}/></a>
                    </li>
                    <li>
                        <a href=""><YouTubeIcon className={styles.icon}/></a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="https://www.novaland.com.vn/Data/Sites/1/media/Default/logosalenoti-(1).png" width="150px" height= '58px'/>
            </div>
        </Col>
      </Row>
    </div>
  );
}
