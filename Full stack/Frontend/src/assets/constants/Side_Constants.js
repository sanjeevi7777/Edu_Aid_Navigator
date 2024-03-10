// import {
//     createCampaign,
//     dashboard,
//     payment,
//     profile,
//     withdraw,
//   } from "../assets";
  
const courses = [
  {
    id: 1,
    title: 'Java Script',
    description: 'The JavaScript course provides a concise yet thorough examination of JavaScript, a key programming language for web development.',
    price: 450,
    duration: 3,
    progress: 10,
    level: 'Intermediate',
    imageUrl: 'https://res.cloudinary.com/duc6xzza7/image/upload/v1707749135/g4y64mvskvl8xof8ktvs.jpg',
  },

  {
    id: 2,
    title: 'Node.js',
    description: 'This Node.js course provides a succinct yet thorough journey into Node.js, a powerful JavaScript runtime.',
    price: 300,
    duration: 2,
    progress: 10,
    level: 'Advanced',
    imageUrl: 'https://res.cloudinary.com/duc6xzza7/image/upload/v1707749348/ofetgaugpfrgqdhjdxfy.jpg',
  },
  {
    id: 3,
    title: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    price: 450,
    duration: 1,
    progress: 0,
    level: 'Intermediate',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE_q5nMYJb_-tAWycjy5qnZaQ0XhTcL0_cozayBityA&s',
  },
  {
    id: 4,
    title: 'React',
    description: 'This React course offers a concise yet comprehensive exploration of React, a JavaScript library for building user interfaces. ',
    price: 350,
    progress: 66,
    duration: 1,
    level: 'Basic',
    imageUrl: 'https://res.cloudinary.com/duc6xzza7/image/upload/v1707749401/qxrn61owtt5dzupat88h.jpg',
  },
  {
    id: 5,
    title: 'Python',
    description: 'The Python course offers a succinct yet comprehensive exploration of Python, a versatile and beginner-friendly programming language.',
    price: 300,
    duration: 1,
    progress: 89,
    level: 'Intermediate',
    imageUrl: 'https://res.cloudinary.com/duc6xzza7/image/upload/v1707749445/a7b2npw9sditdxfcuhaj.jpg',
  },
  
  // Add more courses as needed
];
  export const studentlinks = [
    {
      name: "Dashboard",
    //   imgUrl: dashboard,
      link: "dashboard",
    },
    {
      name: "All Courses",
    //   imgUrl: createCampaign,
      link: "/user/allcourse",
    },
    {
      name: "Add Enquiry",
    //   imgUrl: payment,
      link: "/user/addenquiry",
      disabled: true,
    },
    {
      name: "View Enquiry",
    //   imgUrl: withdraw,
      link: "/user/viewenquiry",
      disabled: true,
    },
   
  ];
  export const adminlinks = [
    {
      name: "Dashboard",
    //   imgUrl: dashboard,
      link: "/admin/dashboard",
    },
    {
      name: "Courses",
    //   imgUrl: createCampaign,
      link: "/admin/courses",
    },
    {
      name: "Add Courses",
    //   imgUrl: payment,
      link: "/admin/addcourses",
      disabled: true,
    },
    {
      name: "View Enquiry",
    //   imgUrl: withdraw,
      link: "/admin/viewallenquiry",
      disabled: true,
    },
    {
      name: "Settings",
      // imgUrl: logout,
      link: "/admin/settings",
      disabled: true,
    },
    // {
    //   name: "logout",
    //   imgUrl: logout,
    //   link: "/",
    //   disabled: true,
    // },
  ];

  export const Stafflinks = [
   
    {
      name: "View Enquiry",
    //   imgUrl: withdraw,
      link: "/",
      disabled: true,
    },
    {
        name: "Reply Enquiry",
      //   imgUrl: withdraw,
        link: "/",
        disabled: true,
      },
    {
      name: "profile",
    //   imgUrl: profile,
      link: "/profile",
    },
    // {
    //   name: "logout",
    //   imgUrl: logout,
    //   link: "/",
    //   disabled: true,
    // },
  ];