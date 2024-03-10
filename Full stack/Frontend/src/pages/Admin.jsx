// import Navbar from './Nav_Bar'
// import image from '../assets/images/back.gif'
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
function Admin() {
    return ( <div>
        <div>
        <SideBar links={{studentlinks:adminlinks,currentlinks:'Dashboard',role:'admin'}}/>
        </div>
       
    </div> );
}

export default Admin;