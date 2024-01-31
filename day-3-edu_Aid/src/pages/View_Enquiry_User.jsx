import { useState } from 'react';
import { Card, CardBody, CardFooter, Heading, Text, Button, SimpleGrid, CardHeader, Avatar, Textarea } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';

const View_Enquiry_Admin = () => {
    const [enquiries, setEnquiries] = useState([
        { enquiryId: 1, course: 'java', name: 'john', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
        { enquiryId: 2, course: 'Node', name: 'sabari', desc: 'How advance this course is.', reply: 'We will teach lot of things' },
        { enquiryId: 3, course: 'Python', name: 'vasan', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
        { enquiryId: 4, course: 'java', name: 'vinoth', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
        { enquiryId: 5, course: 'React', name: 'sanjeevi', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
        { enquiryId: 6, course: 'css', name: 'alice', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
        { enquiryId: 7, course: 'c++', name: 'bob', desc: 'Whether this course is good.', reply: 'Yeah ,ofCourse.' },
    ]);




    return (
        <div className='bg-gray-600'>
            <div className='fixed z-50'>
                <SideBar links={{ studentlinks: studentlinks, currentlinks: 'View Enquiry' }} />
            </div>
            <Text className='text-white ml-64 text-2xl font-bold mb-5'>Recent Reply,</Text>
            <SimpleGrid marginLeft='64' spacing={10} columns={[1, 2]}>
                {enquiries.map((enquiry) => (
                    <Card backgroundColor='gray.700' colorScheme='dark' key={enquiry.enquiryId}>
                        <CardHeader>
                            <div className='flex align-center items-center'>
                                {/* <Avatar name={`${enquiry.name}`} src='https://bit.ly/broken-link' /> */}
                                {/* <Heading size='md' color='white' ml='2'>
                  {enquiry.name}
                </Heading> */}
                            </div>
                        </CardHeader>
                        <Heading size='md' color='gray.400' ml='5'>
                            <span className='text-white'>Course Name: </span>
                            {enquiry.course}
                        </Heading>
                        <CardBody>
                                <Heading size='xs' color='white' mt='2'>Enquiry:</Heading>
                            <div className='flex mt-5 align-center items-center '>

                                <Avatar name="sanjeevi" size='xs' ></Avatar>
                                <Text className='text-gray-400' ml='2'>you</Text>
                            </div>
                            <Text color='gray.400'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {enquiry.desc}
                            </Text>
                                <Heading size='xs' color='white' mt='2'>Reply:</Heading>
                            <div className='flex mt-5'>
                                <Avatar name="john paul" size='xs'></Avatar>
                                <Text className='text-gray-400' ml='2'>john paul</Text>
                            </div>
                            <Text color='gray.400'>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {enquiry.reply}
                            </Text>
                        </CardBody>
                        <CardFooter alignItems='center' justifyContent='center'>

                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    );
};

export default View_Enquiry_Admin;