import React from "react";
import classes from "./ImageGroup.module.scss";

const ImageGroup = () => {
  const imgURL = [
    "https://st.ielts-fighter.com/src/ielts-fighter-file/2024/04/08/ee806696-56f2-4b64-bb93-4ff56fe11c1c.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter-file/2022/02/15/8cb59dd5-168c-4610-a42e-5ecfc10e9946.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2021/07/27/tu-ha-giang-den-an-giang-co-khoa-hoc-ielts-truc-tuyen-giup-chung-minh-dat-7-0-7-5-ielts-1.jpg",
    "https://st.ielts-fighter.com/src/ielts-fighter-file/2024/04/09/613636c6-2be0-4e20-ab2d-fcfa0bdec0d2.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter-file/2022/02/15/fbd5c5a1-3da6-459c-87c7-4121eeae8023.jpg",
    "https://st.ielts-fighter.com/src/ielts-fighter-file/2023/12/25/fb9a3de5-c00a-4f73-9faf-7ce6d569fd7b.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2022/01/06/review-ielts-fighter-tu-top-5-hoc-vien-dat-8-0-ielts-1.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter-file/2022/02/18/44b1bf19-d835-4e92-a618-65807647bac3.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2021/10/15/bo-doi-cao-thu-chia-se-cach-hoc-8-0-ielts-hieu-qua-2.jpg",
    "https://sb.tinhte.vn/2021/04/5424553_kinh-nghiem-tang-tu-4-5-len-7-review-ielts-fighter-2.jpg",
    "https://vcdn-vnexpress.vnecdn.net/2021/11/15/anh-bia-thuy-tien-ngoc-bao1-2795-1636968587.png",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2021/08/06/cach-hoc-7-0-7-5-ielts-cua-bo-doi-ielts-fighter-cong-hoa-bao-thy-1.jpg",
    "https://st.ielts-fighter.com/src/ielts-fighter-file/2024/01/11/0211a4f1-1430-4ddd-b092-09b098aa20bf.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2018/07/19/5-hoc-vien-diem-cao-2.png",
    "https://st.ebomb.edu.vn/src/ielts-fighter/Oanh%20HCM/HV%C4%90C/th%C3%B9y%20d%C6%B0%C6%A1ng-ho%C3%A0i%20th%C6%B0%C6%A1ng/d%C6%B0%C6%A1ng-%2B-th%C6%B0%C6%A1ng.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2021/10/05/cach-hoc-ielts-cua-bo-tu-ielts-fighter-xa-dan-2.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/Y%C3%AAn%20-%20HV%C4%90C%20IELTS/B%C3%8D%20K%C3%8DP%20H%E1%BB%8CC%20IELTS%20D%C3%80NH%20CHO%20SINH%20VI%C3%8AN%20THEO%20CHIA%20S%E1%BA%BA%20C%E1%BB%A6A%20B%E1%BB%98%20BA%2070%20IELTS/B%C3%8D%20K%C3%8DP%20H%E1%BB%8CC%20IELTS%20D%C3%80NH%20CHO%20SINH%20VI%C3%8AN%20THEO%20CHIA%20S%E1%BA%BA%20C%E1%BB%A6A%20B%E1%BB%98%20BA%207.0%20IELTS-3.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/2021/05/31/kinh-nghiem-hoc-7-0-ielts-bat-dau-tu-lo-trinh-chuan-3.jpg",
    "https://st.ebomb.edu.vn/src/ielts-fighter/Oanh%20HCM/HV%C4%90C/Qu%C3%BD%20V%E1%BB%B5/vo-quy-vy-bang-diem.jpg",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.image_group}>
        {imgURL.map((img, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${img})` }}
            className={classes[`img_${index.toString().padStart(2, "0")}`]}
          ></div>
        ))}
      </div>
      <div className={classes.image_group_text}>
        <h5>Bạn sẽ góp mặt trong này chứ? 😊 </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 300 300"
          fill="#000"
          className={classes.svg_element}
        >
          <path d="M29.2,181.1l-8,11.5l-2.5-13.6c-3.1-17.4-8.3-26.2-8.3-26.2s-1.7,10.1,1.4,27.5l4.2,23.4l1.2,6.7l4.1-5.9   L34.9,185c10.1-14.5,12.7-24.4,12.7-24.4S39.3,166.6,29.2,181.1z"></path>
          <path d="M25.6,180.3c0,0,1.5-0.8,1.8-2.5l0.3-1.8l0.1-0.7l0.4-1.8c0.4-1.7-0.7-3-0.7-3c0,0-1.6,0.6-2,2.4l-0.4,1.9    l-0.1,0.7l-0.3,1.9C24.3,179.2,25.6,180.3,25.6,180.3z"></path>
          <path d="M38.2,147.2c1.7-3.1,1.9-3.3,1.9-3.3l0.7-1.2c0,0,0.1-0.2,2-3.2c2-2.9,2.1-5.3,2.1-5.3c0,0-2.3,0.7-4.4,3.8 c-2,3-2.1,3.3-2.1,3.3l-0.7,1.2c0,0-0.2,0.2-1.9,3.4c-1.8,3.2-1.3,5.6-1.3,5.6C34.4,151.5,36.5,150.3,38.2,147.2z"></path>
          <path d="M66.7,114.7l1.1-0.8c0,0,0.2-0.2,3.1-2.1c3-1.9,4-4.1,4-4.1c0,0-2.4-0.2-5.5,1.7c-3,2-3.2,2.2-3.2,2.2 l-1.2,0.8c0,0-0.2,0.1-3.1,2.3c-2.9,2.3-3.4,4.7-3.4,4.7c0,0,2.4-0.3,5.1-2.5C66.5,114.8,66.7,114.7,66.7,114.7z"></path>
          <path d="M107,93.6l-3.7,1l-1.4,0.4l-3.7,1.1c-3.5,1.1-4.9,3.1-4.9,3.1c0,0,2.3,0.6,5.7-0.5l3.6-1.1l1.4-0.4l3.7-1   c3.5-0.8,5.1-2.6,5.1-2.6C112.7,93.7,110.5,92.7,107,93.6z"></path>
          <path d="M143.5,88.9l-1.4,0l-3.9,0.2c-3.6,0.2-5.5,1.8-5.5,1.8c0,0,2.1,1.2,5.6,1l3.8-0.2l1.4,0l3.8-0.1    c3.6,0,5.6-1.4,5.6-1.4c0,0-1.9-1.4-5.6-1.4L143.5,88.9z"></path>
          <path d="M184.1,91.3l-1.4-0.2l-3.8-0.5c-3.6-0.5-5.7,0.7-5.7,0.7c0,0,1.8,1.6,5.3,2l3.8,0.5l1.4,0.2l3.7,0.7  c3.5,0.7,5.7-0.2,5.7-0.2c0,0-1.6-1.8-5.2-2.5L184.1,91.3z"></path>
          <path d="M229.5,111.2c0,0-0.7-2.4-3.7-4.4c-3.1-2-3.3-2.1-3.3-2.1c-0.4-0.3-0.8-0.5-1.2-0.7c0,0-0.2-0.2-3.4-1.9    c-3.3-1.7-5.7-1.2-5.7-1.2c0,0,1.2,2,4.4,3.7c3.1,1.7,3.3,1.8,3.3,1.8c0.4,0.2,0.8,0.5,1.2,0.7c0,0,0.2,0.1,3.2,2   C227.2,111.1,229.5,111.2,229.5,111.2z"></path>
          <path d="M251.4,138.4c-1.3-3.5-1.5-3.7-1.4-3.7l-0.6-1.3c0,0,0-0.3-1.8-3.5c-1.8-3.2-4.2-4-4.2-4c0,0,0,2.4,1.7,5.4    c1.7,3.1,1.7,3.3,1.7,3.3l0.6,1.3c0,0,0.2,0.2,1.4,3.5c1.1,3.3,2.8,4.9,2.8,4.9C251.5,144.3,252.6,142,251.4,138.4z"></path>
          <path d="M247.7,168.9c-1.5,3.1-1.7,3.3-1.7,3.3c-0.2,0.4-0.5,0.8-0.7,1.2c0,0,0,0.2-2.1,3c-2.1,2.7-2.6,5-2.5,5.1    c0,0,2.5-0.4,4.8-3.4c2.2-3,2.2-3.3,2.3-3.2c0.3-0.4,0.5-0.8,0.8-1.3c0,0,0.2-0.1,1.8-3.5c1.6-3.4,0.7-5.8,0.7-5.8  C250.9,164.3,249.1,165.7,247.7,168.9z"></path>
          <path d="M210.2,198.2c3.6-0.6,3.8-0.8,3.8-0.8l1.4-0.3c0,0,0.2,0,3.8-1.1c3.5-1.2,4.8-3.3,4.8-3.3c0,0-2.3-0.4-5.6,0.7 c-3.4,1.1-3.6,1-3.6,1.1l-1.3,0.3c0,0-0.2,0.1-3.7,0.7c-3.4,0.6-5.3,2-5.3,2C204.4,197.5,206.5,198.8,210.2,198.2z"></path>
          <path d="M170.7,189.5c3,2.2,3.3,2.2,3.3,2.2l1.3,0.8c0,0,0.2,0.2,3.5,1.8c3.4,1.6,5.8,0.8,5.8,0.8c0,0-1.4-1.9-4.6-3.3    c-3.1-1.5-3.3-1.7-3.3-1.7l-1.2-0.7c0,0-0.2,0-3.1-2.1c-2.7-2.1-5-2.5-5.1-2.5C167.3,184.8,167.7,187.3,170.7,189.5z"></path>
          <path d="M158.4,167.1c0,0,1-2.1,1.1-5.5c0.1-3.5,0.3-3.7,0.3-3.7l0.2-1.4c0,0,0-0.2,0.7-3.7c0.8-3.4,0.2-5.6,0.2-5.7    c0,0-2,1.4-2.9,5c-0.8,3.6-0.7,3.9-0.7,3.9l-0.2,1.5c0,0-0.1,0.2-0.3,3.9C156.6,165.3,158.4,167.1,158.4,167.1z"></path>
          <path d="M175.1,126.2c2.4-2.7,2.6-2.8,2.5-2.8l1-1c0,0,0.1-0.2,2.7-2.6c2.6-2.4,3.3-4.6,3.3-4.7c0,0-2.4,0.1-5.2,2.6 c-2.7,2.5-2.8,2.7-2.8,2.7l-1,1c0,0-0.2,0.1-2.6,2.9c-2.4,2.8-2.5,5.3-2.5,5.2C170.5,129.6,172.7,128.8,175.1,126.2z"></path>
          <path d="M211.8,100.8c0,0,0.2-0.1,3.5-1.4c3.3-1.2,4.8-3.1,4.8-3.1c0,0-2.3-0.7-5.7,0.5c-3.4,1.3-3.6,1.4-3.6,1.4   l-1.3,0.5c0,0-0.2,0.1-3.5,1.6c-3.3,1.5-4.4,3.7-4.4,3.7c0,0,2.4,0.3,5.6-1.2c3.2-1.5,3.5-1.5,3.5-1.5L211.8,100.8z"></path>
          <path d="M259.8,89.3c0,0-2-1.3-5.7-1l-3.8,0.4l-1.4,0.2l-3.8,0.5c-3.6,0.5-5.3,2.2-5.3,2.2c0,0,2.2,1,5.7,0.6l3.8-0.5    l1.4-0.1l3.8-0.3C257.9,90.8,259.8,89.3,259.8,89.3z"></path>
          <path d="M285.5,88.4l-0.7-0.1l-1.9-0.1c-1.8-0.1-2.8,1.2-2.8,1.2c0,0,0.9,1.4,2.7,1.6l1.9,0.1l0.7,0.1l1.9,0.2    c1.8,0.2,2.9-1.1,2.9-1.1c0,0-0.8-1.5-2.6-1.6L285.5,88.4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ImageGroup;
