// import {
//     createCampaign,
//     dashboard,
//     payment,
//     profile,
//     withdraw,
//   } from "../assets";
  
  export const studentlinks = [
    {
      name: "Dashboard",
    //   imgUrl: dashboard,
      link: "dashboard",
    },
    {
      name: "View All Courses",
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