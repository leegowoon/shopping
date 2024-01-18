import React, { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();
  

  const getProducts = async () => {
    const searchQuery = query.get("q")||"";
    console.log(searchQuery)
     //let url = `http://localhost:3004/products?q=${searchQuery}`;
     //let url = `http://localhost:3004/products`;
     let url = `https://my-json-server.typicode.com/leegowoon/shopping/products?q=${searchQuery}`;
    let response = await fetch(url); //fetch : 비동기 //async
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts(); //여기 넣으면 호출이 한번만 된다.
  }, [query]); //배열이 비어있을 경우에는 ProductAll이 실행될 때 한번만 실행됨

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3} >
              <ProductCard key={menu.id} item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
