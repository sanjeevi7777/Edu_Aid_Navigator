import { useState, useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';
import axios from 'axios';

const View_Enquiry_Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const id = localStorage.getItem('id');
  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    axios.get(`http://localhost:8989/user/getEnquiry/${id}`).then((response) => {
      setEnquiries(response.data);
    });
  }, []);

  return (
<div className='h-screen bg-gray-600'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: studentlinks, currentlinks: 'View Enquiry', role: 'admin' }} />
      </div>
      <div className='ml-40 bg-gray-700'>
      <Text className='text-white text-2xl font-bold mb-5'>Enquiries,</Text>
      {enquiries.length !== 0 ? (
        <Table mt={6} p={6}>
          <Thead>
            <Tr backgroundColor='gray.700' >

              <Th color='white'>Course Name</Th>
              <Th color='white'>Description</Th>
              <Th color='white'>Admin Reply</Th>
              {/* <Th color='white'>Actions</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {enquiries.map((enquiry, index) => (
              <Tr backgroundColor={index % 2 === 0 ? 'gray.300' : 'gray.400'} key={enquiry.enquiry_id}>
                {/* <Td className=''><img src={enquiry.courses.imageurl}></img></Td> */}
                {/* {console.log(enquiry.courses.imageUrl)} */}
                <Td className=' flex text-sm font-bold'><img width='30px' className='rounded mr-2'src={enquiry.courses.imageUrl}></img>{enquiry.courses.course_name}</Td>
                <Td>{enquiry.description}</Td>
                <Td className='text-xs'>{!enquiry.reply? 'no reply' : enquiry.reply}</Td>

                
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <div className='bg-gray-600 h-full flex justify-center items-center'>
          <h1 className='text-center text-white text-2xl'>No Enquiries Were Found Here...</h1>
        </div>
      )}
      </div>
    </div>
  );
};

export default View_Enquiry_Admin;
