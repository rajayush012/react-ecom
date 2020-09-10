import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const onToken = token => {
        console.log(token);
        alert("Payment Successful!")
    }
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_m7ltFnHSd4IR7ItEO0GB80Cx00g1qDTx61';
    return(
        <StripeCheckout 
            label='Pay now'
            name='React Ecom Ltd.'
            amount = {priceForStripe}
            currency="INR"
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is Rs.${price}`}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton