import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    useColorModeValue,
    createIcon,
    Icon,
} from '@chakra-ui/react';
import NavBar from '../components/Nav_Bar';
import image from '../assets/images/back.gif';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import React from 'react';
export default function CallToActionWithAnnotation() {
    const color = localStorage.getItem('sitetheme');
    const content=localStorage.getItem('sitecontent');
    const contentheading=localStorage.getItem('sitecontentheading');
    const isDarkMode = color === 'dark'
    const gradientColor = isDarkMode
        ? 'rgba(0,0,0,0.8), rgba(0,0,0,0.8)'
        : 'rgba(0,0,0,0.2), rgba(0,0,0,0.2)';
    const navigate = useNavigate();
    React.useEffect(() => {
        document.body.classList.add('overflow-y-hidden');
        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, []);
    return (
        <>
            <NavBar />
            <Box
                style={{
                    backgroundImage: `linear-gradient(45deg, ${gradientColor}), url(${image})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'fixed',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
                color={'white'}
                minHeight="100vh"
            >
                <Container maxW={'5xl'}>
                    <Stack
                        as={Box}
                        textAlign={'center'}
                        spacing={{ base: 20, md: 10 }}
                        py={{ base: 120, md: 36 }} // Adjusted the top padding for smaller screens
                    >
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '5xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}
                            color={isDarkMode?'white':'black'} 
                            >
                            
                            {contentheading}
                            <Text as={'span'} color={'teal.400'}>
                                &nbsp;Edu_Aid
                            </Text>
                        </Heading>
                        <Text color={!isDarkMode ? 'black' : 'gray.100'}>
                           {content}
                           {/* Education is a transformative process that empowers individuals with knowledge, skills, and critical thinking abilities, fostering personal growth and societal advancement. It plays a pivotal role in shaping informed citizens, promoting equality, and driving innovation, ultimately contributing to the development of a more enlightened and prosperous world. */}

                        </Text>

                        <Stack
                            direction={'column'}
                            spacing={3}
                            align={'center'}
                            alignSelf={'center'}
                            position={'relative'}>
                            {/* <Button
                colorScheme={'teal'}
                bg={'teal.400'}
                rounded={'full'}
                px={6}
                py={6}
                fontSize={16}
                _hover={{
                  bg: 'teal.500',
                }}
                onClick={() => navigate('/camera')}>
                Get Started
              </Button> */}
                            <button onClick={() => navigate('/login')} className="cursor-pointer font-bold transition-all duration-200 py-2 px-4 rounded-full bg-teal-600 border border-transparent flex items-center text-base hover:bg-teal-500 active:transform active:scale-95">
                                <span>Continue</span>
                                <svg className="w-6 ml-2 transform transition-transform duration-300 ease-in-out hover:translate-x-2" width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37" cy="37" r="35.5" stroke="black" strokeWidth="3"></circle>
                                    <path className="transition-transform duration-300 ease-in-out" d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                </svg>
                            </button>




                            <Box>
                                <Icon
                                    as={Arrow}
                                    color={useColorModeValue('white.800', 'gray.300')}
                                    w={71}
                                    position={'absolute'}
                                    right={-71}
                                    top={'10px'}
                                />
                                <Text
                                    fontSize={'lg'}
                                    fontFamily={'Caveat'}
                                    position={'absolute'}
                                    right={'-125px'}
                                    top={'-15px'}
                                    transform={'rotate(10deg)'}>
                                    Starting at FREE
                                </Text>
                            </Box>
                        </Stack>
                    </Stack>
                </Container>
                <Footer />
            </Box>
        </>
    );
}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
            fill="currentColor"
        />
    ),
})