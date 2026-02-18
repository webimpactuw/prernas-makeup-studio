/**
 * Centralized content layer.
 *
 * All CMS-managed content is accessed through these async functions.
 * Currently returns static placeholder data. When Sanity is connected,
 * replace each function body with a GROQ query via fetchSanity().
 *
 * Data shapes match expected Sanity document schemas so components
 * won't need any changes when switching to live CMS data.
 */

// import { fetchSanity } from "./sanity";

export async function getHomeContent() {
  // ── Future GROQ query ──
  // return fetchSanity(`{
  //   "hero": *[_type == "homePage"][0] {
  //     heading, subheading, ctaText, image
  //   },
  //   "services": *[_type == "service"] | order(order asc) {
  //     _key, name, price, category, image
  //   },
  //   "serviceCategories": *[_type == "serviceCategory"] | order(order asc).name,
  //   "testimonials": *[_type == "testimonial"] | order(order asc) {
  //     _key, name, text, avatar
  //   }
  // }`);

  return {
    hero: {
      heading: "YOUR SIGNATURE LOOK, PERFECTED!",
      subheading:
        "Prerna\u2019s Makeup Studio is a full-service beauty destination offering professional makeup for weddings, photoshoots, and special events.",
      ctaText: "Book Now",
      image: null,
    },
    serviceCategories: ["Specials", "Eyes", "Wedding", "Makeup"],
    services: [
      { _key: "s1", name: "Lash Extension", price: "$100.00", image: null },
      { _key: "s2", name: "Brow Treatment", price: "$75.00", image: null },
      { _key: "s3", name: "Eye Lift/Primer", price: "$95.00", image: null },
      { _key: "s4", name: "Lash Extension", price: "$110.00", image: null },
      { _key: "s5", name: "Lash Cosmetic", price: "$85.00", image: null },
      { _key: "s6", name: "Brow Treatment", price: "$75.00", image: null },
      { _key: "s7", name: "Lash/Lift Perm", price: "$90.00", image: null },
      { _key: "s8", name: "Lash Extension", price: "$100.00", image: null },
    ],
    testimonials: [
      {
        _key: "t1",
        name: "Sarah M.",
        text: "Prerna made me feel absolutely beautiful on my wedding day! Her attention to detail is unmatched.",
        avatar: null,
      },
      {
        _key: "t2",
        name: "Anita K.",
        text: "The most professional and talented makeup artist I\u2019ve ever worked with. Highly recommend!",
        avatar: null,
      },
      {
        _key: "t3",
        name: "Jessica L.",
        text: "I keep coming back for every event. She truly understands my style and always delivers.",
        avatar: null,
      },
      {
        _key: "t4",
        name: "Meera P.",
        text: "An incredible experience from consultation to the final look. I felt like the best version of myself.",
        avatar: null,
      },
    ],
  };
}

export async function getAboutContent() {
  // ── Future GROQ query ──
  // return fetchSanity(`*[_type == "aboutPage"][0] {
  //   heading, subtitle, portrait,
  //   "bio": bio[],
  //   "stats": stats[] { value, label },
  //   philosophy { heading, text, ctaText }
  // }`);

  return {
    heading: "About Prerna Makeup Studio",
    subtitle: "Creating timeless beauty with a modern touch.",
    portrait: null,
    bio: [
      "With over a decade of experience in the beauty industry, Prerna has become a sought-after name for bridal and editorial makeup. Her philosophy is simple: makeup should enhance, not mask.",
      "Trained in London and Paris, she brings international techniques to every client, ensuring a flawless, long-lasting application that looks beautiful both in person and on camera.",
    ],
    stats: [
      { value: "12+", label: "Years Experience" },
      { value: "500+", label: "Happy Brides" },
      { value: "25", label: "Awards Won" },
      { value: "100%", label: "Satisfaction" },
    ],
    philosophy: {
      heading: "Our Philosophy",
      text: "We believe that every face tells a story. Our goal is to make you feel like the most confident version of yourself. Whether it\u2019s a soft, natural glow or a dramatic, smoky eye, we customize every look to suit your personality and occasion.",
      ctaText: "Book a Consultation",
    },
  };
}
