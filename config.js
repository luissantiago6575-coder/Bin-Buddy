// BINBUDDY CONFIG
window.APP_CONFIG = {
  businessName: "BinBuddy",
  contactEmail: "L.santiago2@icloud.com",

  booking: {
    // Replace with your real Calendly link, e.g. https://calendly.com/binbuddy/15min
    calendlyEmbedUrl: "booking: {
  // Replace with your real Calendly link
  calendlyEmbedUrl:"mailto:luis.santiago6575@gmail.com?subject=BinBuddy%20Scheduling&body=Name:%0AAddress:%0APickup%20day:%0APhone:%0ANotes:"
  },

  services: [
    {
      id: "takeout_weekly",
      name: "Weekly Bin Take-Out",
      desc: "We roll your trash bins to the curb every pickup day.",
      price: "$10 / week",
      badge: "Popular",
      // Replace with your real Stripe Payment Link
      paymentLink: "https://buy.stripe.com/REPLACE_THIS_TAKEOUT"
    },
    {
      id: "takeout_return_weekly",
      name: "Take-Out + Return (Weekly)",
      desc: "We take bins out and bring them back after pickup.",
      price: "$15 / week",
      paymentLink: "https://buy.stripe.com/REPLACE_THIS_TAKEOUT_RETURN"
    },
    {
      id: "monthly_clean_addon",
      name: "Monthly Bin Cleaning (Add-On)",
      desc: "Once-a-month bin rinse & deodorize. Add to any plan.",
      price: "+$10 / month",
      paymentLink: "https://buy.stripe.com/REPLACE_THIS_CLEANING"
    }
  ]
};
