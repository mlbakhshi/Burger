import React,{useState,useEffect} from 'react';
import Order from "../../components/order/order";
import axios from "./../../axios-orders"

const Orders=(props)=>{
    const [orders,setOrders]=useState([]);
    const [loading,setLoading]=useState(true);

   useEffect(() => {
      axios.get("/orders.json")
           .then(res => {
               const fetchedOrders=[];
               for(let key in res.data){
                   fetchedOrders.push({
                       ...res.data[key],
                       id:key
                   });
               }
               setOrders(fetchedOrders);
               setLoading(false);
           })
           .catch(error => console.error('Unable to get items.', error));

   },[])

    return(
        <div>
            {
                orders.map(order=>(
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.totalPrice}
                        />
                    )
                )
            }
        </div>
    )
}
export default Orders;