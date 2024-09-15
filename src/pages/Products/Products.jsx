import axios from "axios"
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axiosInstance  from "../../AxiosConfig/AxiosConfig";

export default function Products() {
  const nav = useNavigate()
  const [products, setproducts] = useState([])
  useEffect(() => {
    axiosInstance.get('products').then((res) => {
      setproducts(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)

    })
    
  }, [])

  return <>
    <Row xs={1} md={2} className="g-4">
      {products.map((prd) => (
        <Col>
          <Card style={{width:"300px",marginLeft:"40px"}}>
            <Card.Img variant="top" src={prd.image} />
            <Card.Body>
              <Card.Title>{prd.title}</Card.Title>
              <Card.Text>
                {prd.description}
              </Card.Text>
            </Card.Body>
            <button className="btn btn-primary" onClick={() => {
              nav(`/productdetails/${prd.id}`)

            }}> details</button>

          </Card>
        </Col>
      ))}
    </Row>

  </>

}