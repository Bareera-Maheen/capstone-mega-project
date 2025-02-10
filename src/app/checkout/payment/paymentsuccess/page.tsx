import React from 'react';

// searchParams ka type define karein
type PaymentSuccessProps = {
  searchParams: { amount?: string };
};

// Page component
export default function PaymentSuccess({ searchParams }: PaymentSuccessProps) {
  // amount ko searchParams se extract karein (agar nahi hai toh "0" use karein)
  const amount = searchParams.amount || "0";

  return (
    <div>
      <h1>Payment Successful</h1>
      <p>Amount: {amount}</p>
    </div>
  );
}