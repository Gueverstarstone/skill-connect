import software_developer from "../assets/software_developer.jpg";
import plumber from "../assets/Plumber.jpg";
import electrician from "../assets/electrician.jpeg";
import lawyer from "../assets/lawyer.jpeg";
import mama_fua from "../assets/mama_fua.jpeg";
import rider from "../assets/rider.jpeg";

const workers = [
  {
    id: 1,
    name: "Joseph Mungai",
    title: "Software Developer",
    country: "Kenya",
    img: { src: software_developer, alt: "Software Developer" },
    phone: "+254-234-567-890",
    ratings: "4.2",
    experience: "3 years experience",
    // used on the card
    summary:
      "A software developer who designs and builds applications for clients and businesses.",
    // extra info ONLY for details page
    about:
      "Joseph is a full-stack developer with experience in React, Node.js, and PostgreSQL. He has worked on multiple client projects in e-commerce, fintech, and logistics.",
    services: [
      "Web application development",
      "API integration",
      "Bug fixing & optimization",
    ],
    languages: ["English", "Swahili"],
    availability: "Available for new projects",
    hourlyRate: "Ksh. 3,500/hr",
    googleMapsLink: "https://www.google.com/maps/...",
  },
  {
    id: 2,
    name: "Philip Kamau",
    title: "Plumber",
    country: "Kenya",
    img: { src: plumber, alt: "Plumber" },
    phone: "+254-234-567-890",
    ratings: "5.0",
    experience: "15 years experience",
    // used on the card
    summary:
      "Expert plumber specializing in pipe installation, drainage systems, and emergency repairs.",

    /* FULL DETAILS – used only inside the ClientDetails page */
    about:
      "Philip is a certified plumber with over 12 years of hands-on experience handling domestic and commercial plumbing systems. He has completed over 350 projects including bathroom installations, drainage repairs, water tank setups, and emergency pipe fixes across Nairobi.",

    services: [
      "Emergency plumbing repairs",
      "Leak detection & pipe fixing",
      "Bathroom & toilet installation",
      "Drainage system unclogging",
      "Water tank installation",
      "General plumbing maintenance",
    ],

    languages: ["English", "Swahili"],

    availability: "Available 6 days a week (Mon–Sat)",

    hourlyRate: "KSh 1,500/hr",
    googleMapsLink: "https://www.google.com/maps/...",
  },

  {
    id: 3,
    name: "Brian Melita",
    title: "Lawyer",
    country: "Kajiado",
    img: { src: lawyer, alt: "Lawyer" },
    phone: "+254-234-567-890",
    ratings: "4.9",
    experience: "7 years experience",
    summary:
      "Experienced advocate specializing in family law, contracts, and corporate legal advisory.",

    /* FULL BIO FOR DETAILS PAGE */
    about:
      "Sarah is an Advocate of the High Court of Kenya with over 8 years of experience in family, corporate, and commercial law. She has represented clients in divorce and child custody matters, drafted contracts for SMEs, and advised startups on compliance and regulatory issues. Sarah is known for her clear communication, confidentiality, and client-focused approach.",

    services: [
      "Divorce and child custody matters",
      "Drafting & reviewing contracts",
      "Company registration & compliance",
      "Employment and labour law advisory",
      "Debt recovery and demand letters",
      "Legal consultation for startups and SMEs",
    ],

    languages: ["English", "Swahili"],

    availability: "Available by appointment (Mon–Fri)",

    hourlyRate: "KSh 4,000/hr",

    googleMapsLink: "https://www.google.com/maps/...",
  },

  {
    id: 4,
    name: "Mary Mwende",
    title: "Electrician",
    country: "Naivasha",
    img: { src: electrician, alt: "Electrician" },
    phone: "+254-234-567-890",
    ratings: "4.5",
    experience: "2 years experience",
    summary:
      "Reliable electrician specializing in wiring, lighting installation, and electrical repairs.",

    /* FULL DETAILS FOR DETAILS PAGE */
    about:
      "Mary is a certified electrician with 2 years of experience in residential and commercial electrical work. She handles wiring installation, lighting setup, circuit repairs, and electrical safety testing. Known for her attention to detail and strict adherence to safety standards, Mary has served clients across Nairobi and its surrounding areas.",

    services: [
      "Electrical wiring (residential & commercial)",
      "Lighting installation & upgrades",
      "Circuit breaker repairs",
      "Electrical fault detection",
      "Switch & socket installation",
      "Electrical safety inspection",
    ],

    languages: ["English", "Swahili"],

    availability: "Available Mon–Sat, 8am to 6pm",

    hourlyRate: "KSh 1,200/hr",
    googleMapsLink: "https://www.google.com/maps/...",
  },

  {
    id: 5,
    name: "Christine Njoki",
    title: "Mama Fua",
    country: "Kayole",
    img: { src: mama_fua, alt: "Mama Fua" },
    phone: "+254-234-567-890",
    ratings: "4.4",
    experience: "1 years experience",
    ummary:
      "Trusted Mama Fua offering laundry, ironing, and deep cleaning services for homes and apartments.",

    /* FULL PROFILE (Shown in ClientDetails page) */
    about:
      "Grace is a highly reliable Mama Fua with 6 years of experience providing laundry, ironing, and home cleaning services across Nairobi. She is known for her punctuality, attention to detail, and excellent customer service. Grace has worked with families, bachelors, businesses, and Airbnb owners to keep their spaces clean, organized, and fresh.",

    services: [
      "Laundry (washing, drying, folding)",
      "Ironing & garment care",
      "Deep house cleaning",
      "Kitchen & bathroom cleaning",
      "Apartment & bedsitter cleaning",
      "Office cleaning on request",
    ],

    languages: ["Swahili", "Kikuyu", "Basic English"],

    availability: "Available Mon–Sat • 7am–6pm",

    hourlyRate: "KSh 300–500/hr (depending on workload)",
    googleMapsLink: "https://www.google.com/maps/...",
  },

  {
    id: 6,
    name: "Phineas lesie",
    title: "Boda Boda Rider",
    country: "Meru",
    img: { src: rider, alt: "Boda Boda Rider" },
    phone: "+254-234-567-890",
    ratings: "4.6",
    experience: "4 years experience",
    summary:
      "Trusted Mama Fua offering laundry, ironing, and deep cleaning services for homes and apartments.",

    /* FULL PROFILE (Shown in ClientDetails page) */
    about:
      "Grace is a highly reliable Mama Fua with 6 years of experience providing laundry, ironing, and home cleaning services across Nairobi. She is known for her punctuality, attention to detail, and excellent customer service. Grace has worked with families, bachelors, businesses, and Airbnb owners to keep their spaces clean, organized, and fresh.",

    services: [
      "Laundry (washing, drying, folding)",
      "Ironing & garment care",
      "Deep house cleaning",
      "Kitchen & bathroom cleaning",
      "Apartment & bedsitter cleaning",
      "Office cleaning on request",
    ],

    languages: ["Swahili", "Kikuyu", "Basic English"],

    availability: "Available Mon–Sat • 7am–6pm",

    hourlyRate: "KSh 300–500/hr (depending on workload)",
    googleMapsLink: "https://www.google.com/maps/...",
  },
];

export default workers;
