import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Sign_Up.jsx";
import RecommendedCourses from './pages/Recomended_Courses.jsx';
import ViewCourses from './pages/View_Courses.jsx';
import AddEnquiry from './pages/Add_Enquiry.jsx';
import Profile from './pages/profile.jsx';
import ViewEnquiryAdmin from './pages/View_Enquiry.jsx';
import ViewCoursesAdmin from './pages/View_Courses_Admin.jsx';
import Admin_DashBoard from "./pages/Admin_Dashboard.jsx";
import Add_Courses_Admin from "./pages/Add_Courses_Admin.jsx";
import View_Enquiry from "./pages/View_Enquiry_User.jsx";
import Settings from "./pages/Settings.jsx";
import Staff from "./pages/Staff.jsx";
import { useEffect } from 'react';
import Contact_Us from './pages/Contact_Us.jsx';

function App() {
  let token='';
  let isLoggedIn=true;
  token = localStorage.getItem("jwtToken");
  isLoggedIn = !!token && token.length >= 1; // Convert token to boolean
  console.log(isLoggedIn);
  // useEffect(()=>{
  // },[])
  
  return (
    <Router>
      <Routes>

        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user/dashboard" element={<RecommendedCourses />} />
            <Route path="/user/allcourse" element={<ViewCourses />} />
            <Route path="/user/addenquiry" element={<AddEnquiry />} />
            <Route path="/user/viewenquiry" element={<View_Enquiry />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/admin/dashboard" element={<Admin_DashBoard />} />
            <Route path="/admin/courses" element={<ViewCoursesAdmin />} />
            <Route path="/admin/addcourses" element={<Add_Courses_Admin />} />
            <Route path="/admin/viewallenquiry" element={<ViewEnquiryAdmin />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/staff" element={<Staff />} />
          </>

        ) : (
          <>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/contactus'element={<Contact_Us/>}/>
          </>
        )}

      </Routes>
    </Router>
  );
}

export default App;
