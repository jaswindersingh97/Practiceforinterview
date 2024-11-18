import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Api() {
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        try{       
        let config = {
            method : 'get',
            url: 'https://Real-Time-Amazon-Data.proxy-production.allthingsdev.co/v2/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL&min_price=105&max_price=110&brand=null',
            headers : {
            'x-apihub-key': 'XAI8l0DLvhoK4rkYDvrzQBqaZJEuUXHc4aXh-aXln6bKTn-mDa', 
            'x-apihub-host': 'Real-Time-Amazon-Data.allthingsdev.co', 
            'x-apihub-endpoint': '2bdcdbad-e6a5-4d34-9d32-d5376691a986'
            }
        };
        const Res = await axios.request(config);
        setData(Res.data.data.products);
        }
        catch(error){
            console.log("something went wrong", error);
        }
    }
    return (
    <div>
      {data ? data.map((item,index) =>(
        <p key={index}>{item.product_title}</p>
      )):
      <p>"Loading..."</p> 
      }
    </div>
  )
}

export default Api
