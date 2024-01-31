import { useState } from 'react';
import { Card, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, CardHeader, Avatar, Textarea } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';


const View_Enquiry_Admin = () => {
  const [enquiries, setEnquiries] = useState([
    {enquiryId:1,course:'java',name:'john',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:2,course:'Node',name:'sabari',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:3,course:'Python',name:'vasan',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:4,course:'java',name:'vinoth',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:5,course:'React',name:'sanjeevi',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:6,course:'css',name:'alice',desc:'View a summary of all your customers over the last month.'},
    {enquiryId:7,course:'c++',name:'bob',desc:'View a summary of all your customers over the last month.'},
  ]);

  const [replyOpen, setReplyOpen] = useState({});
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const openReplyBox = (enquiryId) => {
    setSelectedEnquiry(enquiryId);
    setReplyOpen((prev) => ({ ...prev, [enquiryId]: true }));
  };

  const closeReplyBox = () => {
    if (replyOpen[selectedEnquiry]) {
      setEnquiries((prevEnquiries) => prevEnquiries.filter((enquiry) => enquiry.enquiryId !== selectedEnquiry));
    }

    setSelectedEnquiry(null);
    setReplyOpen((prev) => ({ ...prev, [selectedEnquiry]: false }));
  };

  return (
    <div className='bg-gray-600'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: adminlinks, currentlinks: 'View Enquiry' }} />
      </div>
      <Text className='text-white ml-64 text-2xl font-bold mb-5'>Enquiries,</Text>
      <SimpleGrid marginLeft='64' spacing={10} columns={[1, 2]}>
        {enquiries.map((enquiry) => (
          <Card backgroundColor='gray.700' colorScheme='dark' key={enquiry.enquiryId}>
            <CardHeader>
              <div className='flex align-center items-center'>
                <Avatar name={`${enquiry.name}`} src='https://bit.ly/broken-link' />
                <Heading size='md' color='white' ml='2'>
                  {enquiry.name}
                </Heading>
              </div>
            </CardHeader>
            <Heading size='xs' color='gray.400' ml='5'>
              <span className='text-white'>Course Name: </span>
              {enquiry.course}
            </Heading>
            <CardBody>
              <Text color='white'>Enquiry description:</Text>
              <Text color='gray.400'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {enquiry.desc}
              </Text>
              {replyOpen[enquiry.enquiryId] && (
                <Textarea
                  mt={3}
                  placeholder='Type your reply here...'
                  resize='vertical'
                  color='white'
                  onChange={(e) => console.log(e.target.value)}
                />
              )}
            </CardBody>
            <CardFooter alignItems='center' justifyContent='center'>
              {!replyOpen[enquiry.enquiryId] && (
                <Button colorScheme='teal' onClick={() => openReplyBox(enquiry.enquiryId)}>
                  Reply
                </Button>
              )}
              {replyOpen[enquiry.enquiryId] && (
                <div>
                  <Button colorScheme='red' onClick={closeReplyBox}>
                    Cancel
                  </Button>
                  <Button colorScheme='teal' onClick={closeReplyBox} ml='10'>
                    Send
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default View_Enquiry_Admin;