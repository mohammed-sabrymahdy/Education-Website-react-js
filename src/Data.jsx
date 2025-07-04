import { CiMap } from "react-icons/ci";
import { FaImages, FaCreditCard } from "react-icons/fa";

const cardData = [
  {
    img: <CiMap />,
    bgColor: "#f0f4f8",
    color: "#2c3e50",
    id: 1,
    title: "Web Development",
    description: "Learn how to build modern websites.",
  },
  {
    id: 2,
    img: <FaImages />,
    bgColor: "#e8f5e9",
    color: "#1b5e20",
    title: "Data Science",
    description: "Explore data analysis and machine learning.",
  },
  {
    id: 3,
    img: <FaCreditCard />,
    bgColor: "#fff3e0",
    color: "#bf360c",
    title: "Graphic Design",
    description: "Master the art of visual communication.",
  },
];

export const coursesData = [
  {
    id: 1,
    img: "/public/ui-ux.jpg",
    department: "Graphic Design",
    title: "UI & UX Design",
    rating: "4.7",
    description:
      "Unlock your creativity with our UI & UX course! Learn essential design principles, master industry-leading tools, and create stunning visuals to bring your ideas to life.",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: "/public/project-design.jpg",
    department: "Software Development",
    title: "Project Design",
    rating: "4.6",
    description:
      "Transform ideas into actionable plans with our Project Design course! Learn to structure, organize, and execute projects effectively using professional tools and techniques.",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 Lessons",
  },
  {
    id: 3,
    img: "/public/html-css.jpg",
    department: "Web development",
    title: "HTML & CSS",
    rating: "4.9",
    description:
      "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, responsive websites from scratch with hands-on projects and practical skills.",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "16hr 40min",
    lessons: "107 Lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: "★★★★★",
    img: "/public/person1.jpg",
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: "★★★★★",
    img: "/public/person2.jpg",
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Omar Mohamed",
    job: "Developer",
  },
  {
    id: 3,
    stars: "★★★★★",
    img: "/public/person3.jpg",
    description:
      "This course exceeded my expectations! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Islam Tarek",
    job: "Designer",
  },
];

export default cardData;
