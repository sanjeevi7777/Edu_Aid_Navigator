import { Card, Image, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, CardHeader } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Course() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [user, setUser] = useState({});
  const [newEnroll, setNewEnroll] = useState({
    enrolledId: 1,
    date: "string",
    status: "not started", 
    user: null,
    courses: null
  });
 const token=localStorage.getItem('jwtToken');
 const id=localStorage.getItem('id');
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    axios.get('http://localhost:8989/getAllCourses').then((response) => {
      setAllCourses(response.data);
    });
    axios.get('http://localhost:8989/getEnroll',{params:{id:id}}).then((response) => {
      setEnrolledCourses(response.data);
    });
  }, []);

  useEffect(() => {
    const email = localStorage.getItem('email');
    axios.get(`http://localhost:8989/user/getSignIn/${email}`).then((response) => setUser(response.data));
  }, []);

  const getCoursedetails = (course_id) => {
    const selectedCourse = allCourses.find((course) => course.course_id === course_id);
    setNewEnroll((prevEnquiry) => ({
      ...prevEnquiry,
      courses: selectedCourse,
      user: user
    }));
    onOpen();
  };

  const enroll = async () => {
    await axios.post('http://localhost:8989/user/postEnroll', newEnroll).then((response) => {
      console.log(response.data);
    });
    onClose();
    getEnrolledCourses();
  };

  const getEnrolledCourses = () => {
    axios.get('http://localhost:8989/getAllEnrolls').then((response) => {
      setEnrolledCourses(response.data);
    });
  };

  return (
    <div className='h-full w-full flex flex-row bg-gray-700'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: studentlinks, currentlinks: 'All Courses', role: 'user' }} />
      </div>
      <div className='ml-40'>
        <span className="text-2xl font-bold mx-5 text-white">All Courses:</span>

        <SimpleGrid spacing={4} columns={[1, 2, 3, 4,]} mt='5'>
          {allCourses.map(course => (
            !enrolledCourses.some(enrolledCourse => enrolledCourse.courses.course_id === course.course_id) && (
              <Card key={course.course_id} backgroundColor='gray.800'>
                <CardHeader>
                  <Heading size='md' color='white'>{course.course_name}</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    mx="auto"
                    width="100%"
                    maxH="120px"
                    src={course.imageUrl}
                    alt={`Course ${course.id}`}
                    borderRadius='lg'
                  />
                </CardBody>
                <Text fontSize='smaller' padding='10px' color='white'>{course.description}</Text>
                <CardFooter
                  maxH='10rem'
                  display="flex"
                  p='4'
                  justifyContent="space-evenly"
                  alignItems="flex-end"
                >
                  <Button size="xs" variant="solid" colorScheme="teal" px={2} py={4} onClick={() => { getCoursedetails(course.course_id) }} >
                    Enroll course
                  </Button>
                  <Text fontSize='xs' color='gray.500' alignSelf='end' ml='3' display=''>
                    <span className='text-gray-100'>Level :  <span
                      className={`${course.level === 'Basic'
                          ? 'text-teal-500'   // Teal color for basic level
                          : course.level === 'Intermediate'
                            ? 'text-orange-400' // Orange color for intermediate level
                            : 'text-red-600'     // Red color for other levels
                        } font-bold`}
                    >
                      {course.level}
                    </span></span><br />
                    <span className='text-gray-100'> Duration : </span>  <span className='text-teal-100 font-bold ml-1'> {course.duration}  </span>
                  </Text>
                </CardFooter>
              </Card>
            )
          )
          )}
        </SimpleGrid>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='gray.700'>
          <ModalHeader color='orange' textAlign='center'>Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color='white' textAlign='center'>Are You Surely Want to <span className='text-teal-200'>Enroll the Course</span></Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={enroll} justifySelf='center'>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Course;
