import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
import { useState ,useEffect} from 'react';
import axios from 'axios';
function Course() {
  const [courses,setAllCourses]=useState([]);
  // useEffect(() => {
    const token=localStorage.getItem('jwtToken');
    useEffect(()=>{
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    axios.get('http://localhost:8989/getAllCourses').then((response)=>{setAllCourses(response.data)})
  
  },[])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [level,setLevel]=useState('');
  const [url,setUrl]=useState('');
  const handleEdit = (courseId) => {
    const selectedCourse = courses.find((course) => course.course_id === courseId);
    
    if (selectedCourse) {
      setCourseId(selectedCourse.course_id);
      setCourseTitle(selectedCourse.course_name);
      setCourseDescription(selectedCourse.description);
      setCoursePrice(selectedCourse.fees);
      setCourseDuration(selectedCourse.duration);
      setLevel(selectedCourse.level);
      setUrl(selectedCourse.imageUrl)
      setLevel(selectedCourse.level)
      // console.log(url);
      onOpen();
    }

    console.log(`Editing course with ID: ${courseId}`);
    console.log(selectedCourse)
   
  };

  const handleDelete = (courseId) => {
    // Handle delete logic here
    alert('sure want to delete')
    setAllCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
    axios.delete(`http://localhost:8989/admin/deleteCourses`, { params: { id: courseId } })
  .then((response) => {console.log(response);
     axios.get('http://localhost:8989/getAllCourses').then((response)=>{setAllCourses(response.data)});
  })
  .catch((error) => console.log(error));
   
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:8989/admin/updateCourses/${courseId}`,{ course_name: courseTitle,
    description: courseDescription,
    duration: courseDuration,
    fees: coursePrice,
    imageUrl:url,
    level:level
  }).then(() => {
      onClose();
      axios.get('http://localhost:8989/getAllCourses').then((response)=>{setAllCourses(response.data)})
      // Reset state here if needed
    });
    // setCourseId('');
    // setCourseTitle('');
    // setCourseDescription('');
    // setCoursePrice('');
    // setCourseDuration('');
  };

  return (
    <div className='flex flex-row'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: adminlinks, currentlinks: 'Courses',role:'admin' }} />
      </div>
      <div className='ml-40 bg-gray-700'>
        <span className="text-2xl font-bold mx-5 text-white ">All Courses:</span>
        <Table variant='simple' mt={6} p={6}>
          <Thead>
            <Tr backgroundColor='gray.700'>
              <Th color='white'>Course Name</Th>
              <Th color='white'>Description</Th>
              <Th color='white'>Duration</Th>
              <Th color='white'>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {courses.map((course,index) => (
              <Tr key={course.id} backgroundColor={index % 2 === 0 ? 'gray.300' : 'gray.400'}>
                <Td border='none'>{course.course_name}</Td>
                <Td border='none'>{course.description}</Td>
                <Td border='none'>{course.duration}</Td>
                <Td display='flex' border='none' mt='2'>
                  <Button colorScheme="teal" size="xs" mr={2} onClick={() => handleEdit(course.course_id)}>
                    Edit
                  </Button>
                  <Button colorScheme="red" size="xs" onClick={() => handleDelete(course.course_id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay bg='blackAlpha.600' backdropFilter='blur(10px) hue-rotate(0deg)' />
          <ModalContent>
            <ModalHeader backgroundColor='gray.700' color='white' textAlign='center'>Edit Course</ModalHeader>
            <ModalCloseButton color='white'/>
            <ModalBody backgroundColor='gray.700' >
              {/* Form inside the modal */}
              <div className='flex justify-between'>
                <div>
                <lable className='text-gray-200 font-bold'>CourseName:</lable> <input
                name="name"
                className='w-50 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="CourseName"
                // textColor='gray.400'
              />
                </div>
                <div className='justify-space'>
                <lable className='text-gray-200 font-bold'>Level:</lable>
                <select className=" mb-5 w-40 cursor-pointer border-2 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={level} onChange={(e)=>{setLevel(e.target.value)}}>
                    <option>
                      Basic
                    </option >
                    <option>
                      Intermediate
                    </option>
                    <option>
                      Advanced
                    </option>
                   </select>
                   </div>
              </div>
            
                <lable className='text-gray-200 font-bold'>Description:</lable>
              <textarea
                name="description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                placeholder="Description"
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full'
              />
              <div className='flex justify-between'>
<div>

                <lable className='text-gray-200 font-bold'>Fees:</lable>
              <input
                name="price"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                placeholder="Price"
                color='gray.400'
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full'
              />
</div>
<div>

                <lable className='text-gray-200 font-bold'>Duration:</lable>
              <input
                name="duration"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                placeholder="Duration"
                className= 'mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full'
              />
  </div>
              </div>
               <lable className='text-gray-200 font-bold'>Image URL:</lable>
              <input
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="url"
                className='mb-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full'
              />
            </ModalBody>
            <ModalFooter backgroundColor='gray.700' >
              <Button colorScheme="teal" onClick={handleSubmit}>
                Save Changes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Course;
