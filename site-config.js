/* ==========================================================
   SUSAN DIGITAL GROWTH — EDIT THIS FILE TO UPDATE THE SITE
   Contact details, social links, prices and portfolio items
   all live here. Leave a value empty ("") until you have it:
   the site will hide or soften anything that is not set yet.
   ========================================================== */
window.SDG = {
  brand: "Susan Digital Growth",
  tagline: "Your Growth. Our Strategy. Greater Digital Visibility.",

  /* ---- CONTACT (fill these in) ---- */
  // WhatsApp number: country code + number, digits only. Example: "2348012345678"
  whatsappNumber: "2349038650388",
  whatsappMessage: "Hello Susan Digital Growth, I'd like to discuss a project.",
  email: "kemisolafatima34@gmail.com",                // e.g. "hello@yourdomain.com"
  // Optional: paste a Formspree (or similar) endpoint to receive form entries by email.
  // Example: "https://formspree.io/f/xxxxxxx"
  formEndpoint: "",
  discord: "susan_tee",    // Discord username (shown as text; Discord has no public profile link)
  siteUrl: "",              // e.g. "https://www.yourdomain.com" (used for SEO tags)

  /* ---- PROFESSIONAL & SOCIAL LINKS (paste full URLs) ---- */
  links: {
    fiverr: "https://www.fiverr.com/s/2pQG63e",
    upwork: "https://www.upwork.com/freelancers/~014632fd9df4d6020e?mp_source=share",
    linkedin: "https://www.linkedin.com/in/fatimo-olasunkanmi-a93445310",
    instagram: "https://www.instagram.com/just_fatimo?mdxt=cmJ1cWx0ZW52YmFp",
    tiktok: "",
    youtube: "https://www.youtube.com/@boostwithsusan",
    twitch: "",
    facebook: "https://www.facebook.com/profile.php?id=100090092845839",
    x: "https://x.com/fatima_kemisola"
  },

  /* ---- PRICING (USD). Edit prices, names and features freely. ----
     prefix: "From" shows "From $300". Leave "" for a fixed price.
     featured: true highlights a card visually (not a popularity claim). */
  packages: [
    {
      id: "twitch",
      title: "Twitch Promotion Packages",
      billing: "per campaign",
      blurb: "Confirmed campaign prices for Twitch channel and streamer promotion.",
      tiers: [
        { name: "Basic", price: 300, prefix: "", unit: "per campaign", features: [
          "Twitch channel promotion", "Streamer visibility strategy", "Campaign setup and execution", "Performance updates" ] },
        { name: "Standard", price: 500, prefix: "", unit: "per campaign", featured: true, features: [
          "Everything in Basic", "Expanded promotional campaign", "Additional content promotion", "Audience discovery strategy", "Campaign monitoring" ] },
        { name: "Premium", price: 800, prefix: "", unit: "per campaign", features: [
          "Everything in Standard", "Comprehensive promotional strategy", "Extended campaign support", "Multi-channel promotional opportunities", "Detailed performance reporting" ] }
      ]
    },
    {
      id: "youtube",
      title: "YouTube Promotion Packages",
      billing: "starting rates",
      blurb: "Starting rates for video and channel promotion. Final quotes depend on your project.",
      tiers: [
        { name: "Starter", price: 300, prefix: "From", unit: "per campaign", features: [
          "YouTube video promotion", "Promotional strategy", "Campaign setup", "Performance summary" ] },
        { name: "Growth", price: 400, prefix: "From", unit: "per campaign", features: [
          "Multiple video promotion", "Expanded campaign strategy", "Channel visibility support", "Campaign monitoring" ] },
        { name: "Premium", price: 700, prefix: "From", unit: "per campaign", features: [
          "Comprehensive YouTube promotion", "Multiple content campaigns", "Channel visibility strategy", "Performance reporting", "Growth recommendations" ] }
      ]
    },
    {
      id: "social",
      title: "Social Media Promotion Packages",
      billing: "starting rates",
      blurb: "For TikTok, Instagram, Facebook and X.",
      tiers: [
        { name: "Starter", price: 100, prefix: "From", unit: "per campaign", features: [
          "Single-platform promotion", "Basic visibility campaign", "Campaign summary" ] },
        { name: "Growth", price: 200, prefix: "From", unit: "per campaign", features: [
          "Expanded promotional campaign", "Content visibility strategy", "Audience targeting", "Performance monitoring" ] },
        { name: "Premium", price: 350, prefix: "From", unit: "per campaign", features: [
          "Advanced promotional strategy", "Extended campaign support", "Multi-content promotion", "Performance reporting" ] }
      ]
    },
    {
      id: "management",
      title: "Social Media Management",
      billing: "monthly subscription",
      blurb: "Ongoing management with an agreed service scope each month.",
      tiers: [
        { name: "Basic", price: 300, prefix: "From", unit: "/month", features: [
          "One social media platform", "Content planning", "Content scheduling", "Monthly performance report" ] },
        { name: "Standard", price: 600, prefix: "From", unit: "/month", features: [
          "Up to three platforms", "Content planning and scheduling", "Account management", "Community engagement", "Monthly performance report" ] },
        { name: "Premium", price: 1000, prefix: "From", unit: "/month", features: [
          "Up to five platforms", "Comprehensive social media strategy", "Content management", "Community management", "Performance tracking", "Monthly strategy review" ] }
      ]
    }
  ],

  /* ---- PORTFOLIO (add real projects here; none are invented) ----
     Each item: { category, title, objective, services, description, result, image, feedback }
     category: youtube | twitch | tiktok | instagram | management | digital
     image: path/URL to a screenshot (optional). Leave the list empty to show placeholders. */
  portfolio: [
    { category: ["twitch", "digital", "management"], title: "Twitch Channel Promotion",
      image: "images/work-twitch.png",
      description: "Cover from my Fiverr service: organic Twitch channel marketing to help streamers grow their audience.",
      services: "Twitch channel promotion, audience growth strategy",
      result: "Fiverr gig rated 4.6 from 13 reviews",
      feedback: "Awesome work from Fatima delivered on time and better results then I could of imagined" },
    { category: ["youtube", "digital", "management"], title: "YouTube Video & Channel Promotion",
      image: "images/work-youtube.png",
      description: "Cover from my Fiverr service: organic YouTube video and channel promotion for creators.",
      services: "YouTube video promotion, channel promotion",
      result: "Fiverr gig rated 4.9 from 12 reviews",
      feedback: "Great work that she did for me. I never once complained and got great results" },
    { category: ["tiktok", "digital", "management"], title: "TikTok Promotion",
      image: "images/work-tiktok.png",
      description: "Cover from my Fiverr service: organic promotion of TikTok videos to increase reach and visibility.",
      services: "TikTok video promotion, content promotion",
      result: "Fiverr gig rated 4.9 from 7 reviews",
      feedback: "Great person to work with!! Did everything asked for, and was very nice" },
    { category: ["design", "digital"], title: "Portfolio & Profile Design",
      image: "images/work-design1.png",
      description: "A portfolio layout I designed to present a social media strategist's services, skills and experience.",
      services: "Graphic design, layout and branding" }
  ],

  /* ---- CLIENT VIDEOS ----
     Use file (a video in the videos folder), youtubeId, or driveId (Drive link set to "Anyone with the link"). */
  videos: [
    { title: "Client video", description: "A video from a client project.",
      file: "videos/client-video.mp4" }
  ],

  /* ---- TESTIMONIALS (add genuine ones only) ----
     Each item: { name, project, quote, image } */
  testimonials: [
    { name: "Fiverr client, United Kingdom", source: "Fiverr", rating: 5,
      project: "Twitch channel promotion",
      quote: "Awesome work from Fatima delivered on time and better results then I could of imagined" },
    { name: "Fiverr client, United States", source: "Fiverr", rating: 5,
      project: "Twitch channel promotion (ongoing client)",
      quote: "I've been working with Susan for a while now and I have to say she's always on point! puts more effort into her work than most would. Even when she's sick she tries to Ensure her work doesn't suffer. always amazing working with you!" },
    { name: "Fiverr client, United States", source: "Fiverr", rating: 5,
      project: "YouTube video promotion",
      quote: "Great work that she did for me. I never once complained and got great results" },
    { name: "Fiverr client, United States", source: "Fiverr", rating: 4,
      project: "Twitch channel promotion",
      quote: "Very polite and professional, has proactive attitude towards getting the job done right." },
    { name: "Fiverr client, United States", source: "Fiverr", rating: 5,
      project: "YouTube video promotion",
      quote: "She is so understanding,, and easy to work with and she delivers fast and is so considerate, i recommend her. She is the best" },
    { name: "Fiverr client, United States", source: "Fiverr", rating: 4.3,
      project: "TikTok promotion",
      quote: "Great person to work with!! Did everything asked for, and was very nice" },
    { name: "Verified Upwork client", source: "Upwork", rating: 5, date: "May 12, 2026",
      project: "Optimize 10 YouTube Videos: SEO, Titles, Tags & Thumbnails",
      quote: "Amazing to work with as always" },
    { name: "Verified Upwork client", source: "Upwork", rating: 5, date: "April 28, 2026",
      project: "Optimize 10 YouTube Videos: SEO, Titles, Tags & Thumbnails",
      quote: "It's been amazing! She understands what she doing and even while juggling multiple clients she still makes time to insure she checks in and provides advice or ideas. Will continue..." },
    { name: "Verified Upwork client", source: "Upwork", rating: 5, date: "January 24, 2026",
      project: "Optimize 10 YouTube Videos: SEO, Titles, Tags & Thumbnails",
      quote: "This freelancer will walk you through every step of the way if you ask. Very open and straightforward about the process and what it takes as well as giving advice to help you move..." }
  ],

  /* Rating summaries shown above the testimonials (copy from your live profiles) */
  reviewSummary: [
    { source: "Fiverr YouTube gig", text: "4.9 from 12 reviews", url: "https://www.fiverr.com/teemah__kay/promote-and-monetize-your-youtube-channel-with-google-ads" },
    { source: "Fiverr Twitch gig", text: "4.6 from 13 reviews", url: "https://www.fiverr.com/teemah__kay/market-your-twitch-channel-organically-and-help-you-grow-real-viewers" },
    { source: "Fiverr TikTok gig", text: "4.9 from 7 reviews", url: "https://www.fiverr.com/teemah__kay/promote-your-tiktok-account-organically" },
    { source: "Upwork", text: "5.0 rating from 5 reviews · 6 completed jobs", url: "https://www.upwork.com/freelancers/~014632fd9df4d6020e?mp_source=share" }
  ]
};
