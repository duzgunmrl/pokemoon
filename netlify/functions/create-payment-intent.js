const Stripe = require("stripe");

exports.handler = async (event) => {
  console.log("🚀 Function triggered!");

  try {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("❌ Missing secret key");
      return {
        statusCode: 500,
        body: "Missing STRIPE_SECRET_KEY"
      };
    }

    const body = event.body ? JSON.parse(event.body) : null;

    if (!body || !body.amount) {
      console.error("❌ No amount provided");
      return {
        statusCode: 400,
        body: "Missing amount"
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: body.amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true }
    });

    console.log("✅ PaymentIntent created:", paymentIntent.id);

    return {
      statusCode: 200,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    };

  } catch (error) {
    console.error("💥 ERROR in function:", error);
    return {
      statusCode: 500,
      body: "Error: " + error.message
    };
  }
};
