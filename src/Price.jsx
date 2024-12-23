import { useEffect, useState } from "react";
import PriceDetails from "./PriceDetails";



const Price = () => {

    const [price, setPrice] = useState([])

    useEffect( () => {

     fetch('gym.json')
     .then( res => res.json())
     .then( data => setPrice(data) )


    } , [])


    return (
        <div className=" price-box flex justify-center ">


            <div className=" grid  md:grid-cols-3 gap-10 ">

                {

                   price.map( priceZ =>  <PriceDetails key={priceZ.id} priceZ={priceZ} ></PriceDetails> )

                }

            </div>
            
        </div>
    );
};

export default Price;