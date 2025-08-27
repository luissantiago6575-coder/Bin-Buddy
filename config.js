// EDIT this file with your business info, scheduler link, and Stripe Payment Links
window.APP_CONFIG = {
  businessName: "Your Business",
  contactEmail: "you@example.com",
  booking: {
    // Calendly inline embed URL OR Cal.com public booking URL
    calendlyEmbedUrl: "https://calendly.com/your-handle/30min"
  },
  services: [
    {
      id: "basic30",
      name: "Standard Service (30 min)",
      desc: "Great for quick jobs, consults, or small tasks.",
      price: "$25",
      badge: "Popular",
      paymentLink: "https://buy.stripe.com/test_replace_me_basic"
    },
    {
      id: "premium60",
      name: "Premium Service (60 min)",
      desc: "Deeper work session. Ideal for bigger needs.",
      price: "$49",
      paymentLink: "https://buy.stripe.com/test_replace_me_premium"
    }
  ]
};