import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
// import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51HbPzVIFXqESKnoCknNZjDweddZH4EBq9JV1fAym2s4ywAIwomgq8Ue9swCkjnw88AiKpBMFt0B0A8p1FMBIe5au00i8EEG0Sj');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
      {/* <SplitCardForm></SplitCardForm> */}
    </Elements>
  );
};

export default ProcessPayment;