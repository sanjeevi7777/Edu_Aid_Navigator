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
} from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
import { useState } from 'react';

function Course() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Explore the foundational concepts of JavaScript, laying the groundwork for web development.',
      price: 450,
      duration: 3,
      progress: 10,
      level: 'Intermediate',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Techniques',
      description: 'Dive deep into advanced JavaScript techniques and gain insights into complex web development scenarios.',
      price: 550,
      duration: 4,
      progress: 15,
      level: 'Advanced',
    },
    {
      id: 3,
      title: 'React.js Essentials',
      description: 'Master the fundamentals of React.js, a popular JavaScript library for building user interfaces.',
      price: 500,
      duration: 3,
      progress: 12,
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'Node.js for Backend Development',
      description: 'Learn how to use Node.js to build scalable and efficient backend applications for your web projects.',
      price: 600,
      duration: 4,
      progress: 18,
      level: 'Advanced',
    },
    {
      id: 5,
      title: 'Frontend Web Development with Vue.js',
      description: 'Explore Vue.js and its capabilities in creating dynamic and interactive user interfaces for web applications.',
      price: 550,
      duration: 3,
      progress: 14,
      level: 'Intermediate',
    },
    {
      id: 6,
      title: 'Full Stack Development with MERN Stack',
      description: 'Become proficient in full-stack development using the MERN (MongoDB, Express.js, React.js, Node.js) stack.',
      price: 700,
      duration: 5,
      progress: 20,
      level: 'Advanced',
    },
    {
      id: 7,
      title: 'Node.js for Backend Development',
      description: 'Learn how to use Node.js to build scalable and efficient backend applications for your web projects.',
      price: 600,
      duration: 4,
      progress: 18,
      level: 'Advanced',
    },
    // Add more courses as needed
  ]);
  

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [courseDuration, setCourseDuration] = useState('');

  const handleEdit = (courseId) => {
    const selectedCourse = courses.find((course) => course.id === courseId);

    if (selectedCourse) {
      setCourseId(selectedCourse.id);
      setCourseTitle(selectedCourse.title);
      setCourseDescription(selectedCourse.description);
      setCoursePrice(selectedCourse.price);
      setCourseDuration(selectedCourse.duration);

      onOpen();
    }

    console.log(`Editing course with ID: ${courseId}`);
  };

  const handleDelete = (courseId) => {
    // Handle delete logic here
    alert('sure want to delete')
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== courseId));
  };

  const handleSubmit = () => {
    // Handle form submission logic
    // Update the course details in the 'courses' state
    const updatedCourses = courses.map((course) =>
      course.id === courseId
        ? {
            ...course,
            title: courseTitle,
            description: courseDescription,
            price: coursePrice,
            duration: courseDuration,
          }
        : course
    );

    setCourses(updatedCourses);

    // Reset form state
    setCourseId('');
    setCourseTitle('');
    setCourseDescription('');
    setCoursePrice('');
    setCourseDuration('');

    // Don't forget to close the modal after submission
    onClose();
  };

  return (
    <div className='flex flex-row'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: adminlinks, currentlinks: 'Courses' }} />
      </div>
      <div className='ml-64 bg-gray-700'>
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
            {courses.map((course) => (
              <Tr key={course.id} backgroundColor={course.id % 2 === 0 ? 'gray.300' : 'gray.400'}>
                <Td border='none'>{course.title}</Td>
                <Td border='none'>{course.description}</Td>
                <Td border='none'>{course.duration} weeks</Td>
                <Td display='flex' border='none' mt='2'>
                  <Button colorScheme="teal" size="xs" mr={2} onClick={() => handleEdit(course.id)}>
                    Edit
                  </Button>
                  <Button colorScheme="red" size="xs" onClick={() => handleDelete(course.id)}>
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
             <lable className='text-gray-200 font-bold'>Title:</lable> <Input
                name="title"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                placeholder="Title"
                textColor='gray.400'
              />
                <lable className='text-gray-200 font-bold'>Description:</lable>
              <Textarea
                name="description"
                value={courseDescription}
                onChange={(e) => setCourseDescription(e.target.value)}
                placeholder="Description"
                color='gray.400'
              />
                {/* <lable className='text-black font-bold'>:</lable>
              <Input
                name="price"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                placeholder="Price"
              /> */}
                <lable className='text-gray-200 font-bold'>Duration:</lable>
              <Input
                name="duration"
                value={courseDuration}
                onChange={(e) => setCourseDuration(e.target.value)}
                placeholder="Duration"
                color='gray.400'
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
