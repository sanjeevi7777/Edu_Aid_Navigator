import { useState, useEffect } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
import axios from 'axios';

const View_Enquiry_Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [reply, setReply] = useState('');
  const [replyOpen, setReplyOpen] = useState({});
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const token=localStorage.getItem('jwtToken');
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    axios.get("http://localhost:8989/admin/getAllEnquries").then((response) => {
      setEnquiries(response.data);
    });
  }, []);

  const send = (enquiry) => {
    const enq = { ...enquiry, reply: reply };
    axios.put(`http://localhost:8989/user/updateEnquiry/${enquiry.enquiry_id}`, enq)
      .then(() => {
        setEnquiries(prevEnquiries => prevEnquiries.filter(item => item.enquiry_id !== enquiry.enquiry_id));
        setReply('');
        closeReplyBox();
      })
      .catch(error => console.error("Error sending reply:", error));
  };

  const openReplyBox = (enquiryId) => {
    setSelectedEnquiry(enquiryId);
    setReplyOpen(prev => ({ ...prev, [enquiryId]: true }));
  };

  const closeReplyBox = () => {
    setReplyOpen(prev => ({ ...prev, [selectedEnquiry]: false }));
    setSelectedEnquiry(null);
  };

  return (
    <div className='h-screen bg-gray-600'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: adminlinks, currentlinks: 'View Enquiry', role: 'admin' }} />
      </div>
      <div className='ml-40 bg-gray-700'>
      <Text className='text-white text-2xl font-bold mb-5'>Enquiries,</Text>
      {enquiries.length !== 0 ? (
        <Table mt={6} p={6}>
          <Thead>
            <Tr backgroundColor='gray.700' >
              <Th color='white'>User Name</Th>
              <Th color='white'>Course Name</Th>
              <Th color='white'>Description</Th>
              <Th color='white'>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {enquiries.map((enquiry, index) => (
              <Tr backgroundColor={index % 2 === 0 ? 'gray.300' : 'gray.400'} key={enquiry.enquiry_id}>
                <Td>{enquiry.user.user_name}</Td>
                <Td className=' flex text-sm font-bold mt-1'><img width='30px' className='rounded mr-2'src={enquiry.courses.imageUrl}></img>{enquiry.courses.course_name}</Td>
                <Td>{enquiry.description}</Td>
                <Td>
                  {!replyOpen[enquiry.enquiry_id] ? (
                    <Button colorScheme='teal'size='xs' onClick={() => openReplyBox(enquiry.enquiry_id)}>Reply</Button>
                  ) : (
                    <Modal isOpen={replyOpen[enquiry.enquiry_id]} onClose={closeReplyBox}>
                     <ModalOverlay bg='blackAlpha.600'
          backdropFilter='blur(10px) hue-rotate(0deg)' />
                      <ModalContent>
                        <ModalHeader backgroundColor='gray.700' color='white' textAlign='center'>Reply to Enquiry</ModalHeader>
                        <ModalBody backgroundColor='gray.700' color='white' textAlign='center'>
                          <Textarea placeholder="Give Your Reply.........."value={reply} onChange={(e) => setReply(e.target.value)} />
                        </ModalBody>
                        <ModalFooter backgroundColor='gray.700' color='white' textAlign='center' justifyContent='space-around'>
                          <Button colorScheme='red' size='sm' onClick={closeReplyBox}>Cancel</Button>
                          <Button colorScheme='teal' size='sm' onClick={() => send(enquiry)} ml='3'>Send</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  )}
                </Td>
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
