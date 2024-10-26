'use client'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { Loader } from '../loader'
 import { PaymentForm } from './payment-form'

type StripeElementsProps = {
  payment: 'STANDARD' | 'PRO' | 'ULTIMATE'
}

export const StripeElements = ({ payment }: StripeElementsProps) => {
  const StripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!)
   return (
    <div></div>
     
  )
}
