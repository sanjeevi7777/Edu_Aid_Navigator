import { Spinner ,Text} from '@chakra-ui/react'
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';
import { useState } from 'react';
import Enquiry from '../assets/images/enquiry.png'
function Course() {
  const [loading, setLoading] = useState(false);
  const courses=["java","node.js","python","c++"]
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (<div className='flex'>
    <SideBar links={{ studentlinks: studentlinks, currentlinks: 'Add Enquiry' }} />
    <section class="bg-gray-50 dark:bg-gray-700 w-full ">
      <div class="flex flex-row px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className=' bg-gray-800' style={{width:"40%", borderTopLeftRadius:10,borderBottomLeftRadius:10}}>
         <div className='flex justify-center'><img src={Enquiry} width='120' ></img></div> 
          <Text className='p-4 text-white leading-relaxed'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We appreciate your interest in our courses and welcome your inquiries about the subjects we offer. To ensure a smooth and efficient process, we kindly request that you adhere to the following rules when submitting an enquiry. First, please provide accurate and detailed information regarding the specific subjects or courses you are interested in. This will help our team better understand your needs and provide you with relevant and timely assistance. Additionally, ensure that your contact details are correct, including a valid email address and phone number, so that we can reach out to you promptly. We value clear communication and look forward to assisting you on your educational journey.</Text>
          </div>
        <div class="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700" style={{borderTopRightRadius:10,borderBottomRightRadius:10}}>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
          Give Your Enquiry here....
        </h1>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

            <form class="space-y-4 md:space-y-6 display-flex" action="#">
              <div className='flex space-x-3'>
                <div style={{ width: '50%' }}>
                  <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    {/* You can add the options dynamically if needed */}
                    <option value="" disabled selected>
                      Select a course
                    </option>
                    {courses.map((course)=>( <option value={`${course}`}  >{course}</option>))}
                  </select>

                </div>
                <div  style={{ width: '50%' }}>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Enquiry Type
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    {/* You can add the options dynamically if needed */}
                    <option value="" disabled selected>
                      Select enquiry type
                    </option>
                    {courses.map((course)=>( <option value={`${course}`}  >{course}</option>))}
                  </select>

                </div>
              </div>
              {/* <div className='flex flex space-x-3'> */}
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                </div>
              {/* </div> */}
              <div>
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea type="text" name="description" id="password" placeholder="Write text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></textarea>
              </div>
              <button
                type="submit"
                className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <Spinner color='teal.200' /> : 'Submit'}
              </button>


            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Course;