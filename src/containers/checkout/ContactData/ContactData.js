import React,{useState} from 'react';
import classes from './ContactData.module.css';
import Button from "../../../components/UI/Button/Button";
import axios from "./../../../axios-orders";
import Input from "../../../components/UI/input/input";
const ContactData =(props)=>{

    const [orderForm,setOrderForm] = useState([
        {
            name: {
                elementType: 'input',
                elementConfig:{
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        {
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        {
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minlength:5,
                    maxlength:5,
                },
                valid: false
            }
        },
        {
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            }
        },
        {
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        }
    ]);
    const [loading,setLoading]=useState(false);
   const helper = (obj) => {
        const values = Object.values(obj)

        values.forEach(val =>
            val && typeof val === "object" ?
                helper(val) : console.log(val))
    }
// console.log(helper(orderForm[0]));
    const orderHandler = (event) => {
        const formData={};
        for(let formElementIdentifier  in orderForm)
        {
            formData[formElementIdentifier]=orderForm[formElementIdentifier].value;

        }
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData:formData,
        }
         event.preventDefault();
         axios.post('/orders.json',order)
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

    let formElementsArray=[];
    for (let key in orderForm){
        formElementsArray.push(
            {
                id: key,
                config: orderForm[key]
            });
        console.log(orderForm[key])
    }
   const inputChangedHandler=(event,inputIdentifier)=>{
        const updatedOrderForm = {
           ...orderForm
       };
       const updatedFormElement = {
           ...updatedOrderForm[inputIdentifier]
       };
       updatedFormElement.value = event.target.value;
       updatedOrderForm[inputIdentifier] = updatedFormElement;
       setOrderForm(updatedOrderForm);
   }

    return(

        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form onSubmit={orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        inputType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => inputChangedHandler(event,formElement.id)}
                    />
                ))}
                <Button btnType="Success" >ORDER</Button>
            </form>

        </div>
    );
}
export default ContactData;