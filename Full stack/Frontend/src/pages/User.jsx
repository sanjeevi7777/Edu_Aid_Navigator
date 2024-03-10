// import Navbar from './Nav_Bar'
// import image from '../assets/images/back.gif'
import SideBar from '../components/Side_Bar';
// import Recommended_Courses from'./Recomended_Courses'
// import Your_Courses from'./Recomended_Courses'
import { studentlinks } from '../assets/constants/Side_Constants';
function User() {
    return ( <div>
        <div>
            <SideBar links={{studentlinks:studentlinks,currentlinks:'Dashboard',role:'admin'}}/>
            
        </div>
       
    </div> );
}

export default User;