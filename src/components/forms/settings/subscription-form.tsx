'use client'
import { Loader } from '@/components/loader'
import SubscriptionCard from '@/components/settings/subscription-card'
import { Button } from '@/components/ui/button'
import React, { useState, useEffect } from 'react'

type Props = {
  plan: 'STANDARD' | 'PRO' | 'ULTIMATE'
}

const SubscriptionForm = ({ plan }: Props) => {
  const [loading, setLoading] = useState(false)
  const [payment, setPayment] = useState<string | null>(plan)

  const onSetPayment = (newPayment: string) => {
    setPayment(newPayment)
  }

  const onUpdateToFreeTier = async () => {
    try {
      setLoading(true)
      // Simulate a network request (replace with real API call if needed)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setPayment('STANDARD')
    } catch (error) {
      console.error('Failed to update to free tier', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Loader loading={loading}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {/* {['STANDARD', 'PRO', 'ULTIMATE'].map((tier, index) => (
            <SubscriptionCard
              key={index}
              title={tier}
              description={`Perfect if you’re just getting started with SAAS-Nvidia`}
              price={tier === 'STANDARD' ? '0' : tier === 'PRO' ? '15' : '35'}
               onPayment={onSetPayment}
              id={tier}
            />
          ))} */}
        </div>

        

        {payment === 'STANDARD' && (
          <Button onClick={onUpdateToFreeTier}>
            <Loader loading={loading}>Confirm</Loader>
          </Button>
        )}
      </div>
    </Loader>
  )
}

export default SubscriptionForm
