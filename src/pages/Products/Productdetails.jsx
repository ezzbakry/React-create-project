import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axiosInstance  from "../../AxiosConfig/AxiosConfig";


export default function Productdetails(){
    const{id}=useParams()
    const[product,setproduct]=useState([])
    useEffect(()=>{
        async function getproductbyID(){
            try{
                const res=await axiosInstance.get(`products/${id}`)
                setproduct(res.data)
            }catch(err){
                console.log(err)
            }

        }
        getproductbyID()
    })
    return <>
     <Card style={{width:"200px",height:"200px",marginLeft:"40px"}}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
            {/* <button className="btn btn-primary" onClick={()=>{
                nav(`/productdetails/${prd.id}`)

            }}> details</button> */}

          </Card>
    </>

}