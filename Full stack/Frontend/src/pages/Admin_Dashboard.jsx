import React, { useEffect, useState } from 'react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Text, Heading, Avatar } from '@chakra-ui/react';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Admin_DashBoard() {
  const [courses, setAllCourses] = useState([]);
  const [enroll, setAllEnroll] = useState([]);
  const [users, setAllUsers] = useState([]);
  const [count, setCount] = useState(0);
  const token = localStorage.getItem('jwtToken')
  let tcount = 0;
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:8989/getAllCourses').then((response) => { setAllCourses(response.data) })

  }, [])
  useEffect(() => {

    axios.get('http://localhost:8989/getAllEnrolls').then((response) => { setAllEnroll(response.data) })

  }, [])
  useEffect(() => {
    axios.get('http://localhost:8989/user/getAllSignIn').then((response) => { setAllUsers(response.data) })

  }, [])
  useEffect(() => {
    axios.get('http://localhost:8989/getEnrollCount').then((response) => { setCount(response.data) })

  }, [])
  var ccount = courses.length
  const user = useSelector(selectUser);
  for (var i = 0; i < count.length; i++) {
    tcount = tcount + count[i];
  }
  console.log(count);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null)
  return (
    <div className='flex flex-row'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: adminlinks, currentlinks: 'Dashboard', role: 'admin' }} />
      </div>

      <div className='bg-gray-700 ml-40 h-full w-full'>
        <div className='bg-gray-700 text-3xl p-2 m-2 text-white rounded font-bold'>Welcome back <span className='text-teal-500'>{user.username},</span></div>
        <div style={{ display: 'flex' }}>

        <div className='bg-gray-100 p-2 text-black text-center text-2xl rounded' style={{ width: '50%', margin: 5, marginBottom: 0, position: 'relative' }}>
    <div className='card w-38 '>
        <span className='font-bold text-lg text-gray-600' >Total Number Of Courses</span>  <br />
        <span className='font-bold text-lg text-gray-800' >{ccount}</span>
    </div>
    <hr style={{ backgroundColor: 'blue', height: '3px', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
</div>
<div className='bg-gray-100 p-2 text-black text-center text-2xl rounded' style={{ width: '50%', margin: 5, marginBottom: 0, position: 'relative' }}>
    <div className='card w-38'>
        <span className='font-bold text-lg text-gray-600' >Total Number Of Users</span>  <br />
        <span className='font-bold text-lg text-gray-900' >{users.length}</span>
    <hr style={{ backgroundColor: 'teal', height: '3px', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </div>
</div>
<div className='bg-gray-100 p-2 text-black text-center text-2xl rounded' style={{ width: '50%', margin: 5, marginBottom: 0, position: 'relative' }}>
    <div className='flex card'>
        <div className='card w-full'>
            <span className='font-bold text-lg text-gray-600' >Total Number Of Enrollments</span>  <br />
            <span className='font-bold text-lg text-gray-800' >{count}</span>
        </div>
        <div className='w-100 items-center justify-center'>
            <Button style={{ float: 'right', marginTop: '10px' }} colorScheme='orange' variant='solid' size="xs" onClick={onOpen}>
                More
            </Button><br />
        </div>
    </div>
    <hr style={{ backgroundColor: 'orange', height: '3px', position: 'absolute', bottom: 0, left: 0, right: 0 }} />
</div>



        </div>
        <Heading mt='10' size='lg' color='white' ml='5'>List of Students</Heading>
        <div>
          <Table variant='simple' mt={6} p={1}>
            <Thead>
              <Tr backgroundColor='gray.700'>
                <Th color='white'>Profile</Th>
                <Th color='white'>User Name</Th>
                <Th color='white'> User Email</Th>
                <Th color='white'>status</Th>
                {/* <Th color='white'>Students</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {users.map((course, index) => (
                <Tr key={course.user_id} backgroundColor={index % 2 === 0 ? 'gray.300' : 'gray.400'}>
                  {console.log(course.user_id)}
                  <Td>   <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' /></Td>
                  <Td>{course.user_name}</Td>
                  <Td >
                    <a className='text-teal-800' href={`mailto:${course.email}`}>{course.email}</a>
                  </Td>
                  <Td>
                    {course.status ? (
                      <p className="w-12 bg-teal-400 text-center rounded text-xs text-teal-700 font-bold" style={{ fontSize: '10px' }}>Active</p>
                    ) : (
                      <p className="bg-red-300 text-center rounded text-xs text-red-700 font-bold " style={{ fontSize: '9px', width: '60px' }}>Not Active</p>
                    )}
                  </Td>


                  {/* <Td display='flex'>
                  

                </Td> */}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size='full'  >
        <ModalOverlay bg='blackAlpha.600'
          backdropFilter='blur(10px) hue-rotate(0deg)' />
        <ModalContent>
          <ModalHeader backgroundColor='gray.800' color='white' textAlign='center'>Enrolled List</ModalHeader>
          <ModalCloseButton color='gray.100' />
          <ModalBody backgroundColor='gray.800'>
            <Table variant='simple' mt={6} p={1}>
              <Thead>
                <Tr backgroundColor='gray.700'>
                  <Th color='white'>Profile</Th>
                  <Th color='white'>User Name</Th>
                  <Th color='white'> User Email</Th>
                  <Th color='white'>Enrolled Course Name</Th>
                  {/* <Th color='white'>Students</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {enroll.map((course, index) => (
                  <Tr key={course.user.user_id} backgroundColor={index % 2 === 0 ? 'gray.300' : 'gray.400'}>
                    {console.log(course.user.user_id)}
                    <Td><Avatar size='sm' name={course.user.user_name} src='https://bit.ly/broken-link' /></Td>
                    <Td className='text-xs font-bold'>{course.user.user_name}</Td>
                    <Td >
                      <a className='text-xs text-teal-800' href={`mailto:${course.user.email}`}>{course.user.email}</a>
                    </Td>

                    <Td className='text-lg font-bold'>{course.courses.course_name}</Td>
                    {/* <Td display='flex'>
                  

                </Td> */}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter backgroundColor='gray.800'>
            <Button colorScheme='teal' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Admin_DashBoard;






