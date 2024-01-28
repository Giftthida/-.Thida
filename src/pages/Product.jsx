import React from "react";
import MainLayout from "../Layouts/MainLayout";
import กำไรข้อเท้า from './กำไรข้อเท้า.jpg';
import  สร้อยข้อมือเปลือกหอย from './สร้อยข้อมือเปลือกหอย.jpg';
import  สร้อยข้อมือเปลือกหอยสีเงิน from './สร้อยข้อมือหอยสีเงิน.jpg';
import สร้อยคอโช้กเกอร์ from './สร้อยคอโช้กเกอร์ .jpg';
import สร้อยคอเปลือกหอยปลาดาว from './สร้อยคอเปลือกหอยปลาดาว.jpg';
import สร้อยข้อมือเปลือกหอยเบี้ยสีทอง from './สร้ออข้อมือเปลือกหอยเบี้ยสีทอง.jpg';
const Product = (props) => {
  const product = [
    {
      image: กำไรข้อเท้า,
      name: "กำไรหอยเบี้ย",
      price: "150.-",
      details:"สร้อยข้อเท้าเปลือกหอยธรรมชาติสไตล์โบฮีเมียนสำหรับแฟชั่นสำหรับผู้หญิงกำไลข้อมือแบบเชือกถักสไตล์โบฮีเมียนเครื่องประดับสำหรับปาร์ตี้ชายหาด " ,
    
    },
    {
      image: สร้อยข้อมือเปลือกหอย,
      name: "หอยเบี้ย+มุก",
      price: "100.-",
      details:"สร้อยข้อมือเปลือกหอยสไตล์โบฮีเมียนสำหรับผู้หญิงในช่วงฤดูร้อน" ,
      
    },
    {
      image: สร้อยข้อมือเปลือกหอยสีเงิน,
      name: "สร้อยข้อมือเปลือกหอยสีเงิน",
      price: "170.-",
      details:"ร้อยข้อมือถักมือเปลือกหอยธรรมชาติ" ,
    },
    {
      image: สร้อยคอเปลือกหอยปลาดาว,
      name: " สร้อยคอเปลือกหอยปลาดาว",
      price: "150.-",
      details:"ไตล์โบฮีเมียน เหมาะกับเดินชายหาด" ,
      
    },
    {
      image: สร้อยคอโช้กเกอร์,
      name: "สร้อยคอโช้กเกอร์",
      price: "120.-",
      details:"ไตล์โบฮีเมียน เหมาะกับเดินชายหาด ของขวัญ เครื่องประดับ" ,
      
    },
    {
      image: สร้อยข้อมือเปลือกหอยเบี้ยสีทอง,
      name: "สร้อยข้อมือเปลือกหอยเบี้ยสีทอง",
      price: "180.-",
      details:"กำไลข้อมือเปลือกหอยแท้มีสายเลื่อนปรับได้หลายแบบหลาย" ,
      
    },
  ];

  return (
    <MainLayout>
      <div style={{ marginTop: 20 }}>
        {product.map((c) => (
          <ProductCard
            name={c.name}
            price={c.price}
            details={c.details}
            image={c.image}
          />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductCard = (props) => {
  return (
    <>
      <div style={divStyle}>
      <img src={props.image} alt={props.name} style={{ display: 'block', margin: '0 auto', maxWidth: '50%', height: 'auto', marginBottom: 20 }} />
        <p style={textStyle}>{props.name}</p>
        <p style={textStyle}>Price: {props.price}</p>
        <p style={textStyle}>Details: {props.details}</p>
      </div>
    </>
  );
};

const divStyle = {
  border: "1px solid black",
  borderRadius: 5,
  padding: 20,
  marginLeft: "20%",
  marginRight: "20%",
  marginBottom: 15,
  fontWeight: "bold",
  fontFamily: "courier",
};

const textStyle = {
  marginBottom: 10,
};


export default Product;