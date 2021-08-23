import React,{useState} from 'react';
import classes from './ContactData.module.css';
import Button from "../../../components/UI/Button/Button";
import axios from "./../../../axios-orders";
const ContactData =(props)=>{
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [address,setAddress]=useState({ street: ' ' }, {postalCode:' '});
   const [loading,setLoading]=useState(false);

    const orderHandler = (event) => {
        console.log(props.ingredients);
        console.log(props.totalPrice);

         event.preventDefault();
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.totalPrice,
            customer: {
                name: 'Amir Zouerami',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '9174582541',
                    country: 'Iran'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(
                response => {
                  props.history.push('/');
            }
            )
            .catch(
                error => {
                    setLoading( 'false');
            }
            );
    }
    return(

        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
            </form>
        </div>
    );
}
export default ContactData;