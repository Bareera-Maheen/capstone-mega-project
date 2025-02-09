import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Get Stripe Secret Key
const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not defined!");

const stripe = new Stripe(stripeKey, {
  apiVersion: "2025-01-27.acacia", // Use stable Stripe API version
});

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    // Validate input
    if (!amount) {
      return NextResponse.json({ error: "Amount is required" }, { status: 400 });
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    return NextResponse.json({ error: "Failed to create PaymentIntent" }, { status: 500 });
  }
}
