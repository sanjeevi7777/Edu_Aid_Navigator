
import { Textarea, useDisclosure, IconButton } from '@chakra-ui/react';
import logo from '../assets/images/logo.png';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  Input,
  Box,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
function ProfileModal() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setEditing] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [user,setUser]=useState({});
  const token=localStorage.getItem('jwtToken');
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
    const email = localStorage.getItem('email');
    axios.get(`http://localhost:8989/user/getSignIn/${email}`).then((response) => setUser(response.data));
    console.log(user)
  }, []);
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setSaved(true);
    setChangesMade(false);
    setEditing(false); 
    axios.post('http://localhost:8989/user/saveSignIn',user).then((response) => setUser(response.data));
  };

  const handleInputChange = (e) => {
    setChangesMade(true);
    setSaved(false);
    const { name, value } = e.target;
    console.log(value)
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
    console.log(user);
  };
  const handleProfileClick = () => {
    onOpen();
    setEditing(false); // Reset to display mode when opening
  };
const logout=()=>{
  // localStorage.clear();
  user.status=null;
  axios.post('http://localhost:8989/user/saveSignIn',user).then((response) => setUser(response.data));
  navigate('/');
}
  return (
    <>
      <div className="flex justify-center">
        <Button
          bg="gray.700"
          onClick={handleProfileClick}
          borderRadius="full"
          p={1}
          _hover={{ bg: 'teal' }}
          position="relative"
        >
          <Avatar name='sanjeevi v' bg="teal.500" size="xs">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay bg='blackAlpha.600' backdropFilter='blur(10px) hue-rotate(0deg)' />
        <ModalContent backgroundColor='gray.800' color='white'  size='sm'>
          <ModalHeader textAlign='center' fontSize='x-large'>PROFILE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" mb="4">
              <Avatar size="lg" name={user.user_name} src="path/to/user-image.jpg" mr="2" />
              <Text fontWeight="bold" fontSize="3xl">{user.user_name}</Text>
            </Flex>
            <Flex alignItems="center" mb="4" ml="">
              <Text fontWeight="bold"color='gray' fontSize="1xl">Email : </Text>
              <Text fontWeight="" fontSize="1xl"> &nbsp;{user.email}</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Box width="48%">
                {isEditing ? (
                  <>
                    <Text>
                      <strong style={{color:'gray'}}>Gender:</strong>
                      <Input name="gender" value={user.gender} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong style={{color:'gray'}}>Birth Date:</strong>
                      <Input name="dob" value={user.dob} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong style={{color:'gray'}}> Address:</strong>
                      <Input name="address" value={user.address} onChange={handleInputChange} />
                    </Text>
                  </>
                ) : (
                  <>
                    <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Gender:</strong> <br />{user.gender}
                    </Text >
                    <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Birth Date:</strong><br /> {user.dob}
                    </Text>
                    <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Address:</strong> <br />{user.address}
                    </Text>
                  </>
                )}
              </Box>

              <Box width="48%">
                {isEditing ? (
                  <>
                    <Text>
                      <strong style={{color:'gray'}}>Portfolio:</strong>
                      <Input name="port" value={user.port} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong style={{color:'gray'}}>Github:</strong>
                      <Input name="github" value={user.github} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong style={{color:'gray'}}>Summary:</strong>
                      <Textarea name="summary" value={user.summary} onChange={handleInputChange} />
                    </Text>
                  </>
                ) : (
                  <div className='inline-block'>  
                  <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Portfolio:</strong><br/>
                      <a target="_blank" href={user.port} style={{textDecoration:'underline'}}> {user.port}</a>
                  </Text>
                  <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Github:</strong> <br/>
                      <a target="_blank" href={user.github} style={{textDecoration:'underline'}}>{user.github}</a>
                  </Text>
                  <Text style={{ marginBottom: '10px' }}>
                      <strong style={{color:'gray'}}>Summary:</strong><br/>
                      {user.summary}
                  </Text>
              </div>
              
                )}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton
              icon={<FaSignOutAlt />}
              aria-label="Logout"
              variant="solid"
              size='sm'
              colorScheme='red'
              onClick={() => logout()}
            />
            <Flex>
              {isEditing ? (
                <Button colorScheme="teal" mr={3} size='sm' onClick={handleSaveClick} isDisabled={!changesMade}>
                  {isSaved ? (
                    <Flex alignItems="center">
                      Saved {/* Add your success icon here */}
                    </Flex>
                  ) : (
                    'Save'
                  )}
                </Button>
              ) : (
                <Button colorScheme="teal" mr={3} size='sm'onClick={handleEditClick}>
                  Edit
                </Button>
              )}
              <Button size='sm' onClick={onClose}>Cancel</Button>
            </Flex>
          </ModalFooter>

        </ModalContent>
      </Modal>
    </>
  );
}

// SideBar.js

// import { ProfileModal } from './ProfileModal'; // Adjust the path as needed

function SideBar({ links }) {
  // console.log(links)
  const [icons] = useState([
    { id: 1, icon: <MdCheckCircle size="1.5em" />, label: 'Check' },
    // Add more icons as needed
  ]);
  // eslint-disable-next-line react/prop-types
  const link = links.studentlinks;
  // eslint-disable-next-line react/prop-types
  // console.log(link)
  const activeLink = links.currentlinks;
  const role = links.role;

  return (
    <>
      <div className="flex">
        <aside className="flex flex-col w-40 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700">
          <a href="/" className='flex'>
            <img className="w-auto h-6 sm:h-7" src={logo} alt="" /><span className='ml-2 text-lg text-white'>Edu_Aid</span>
          </a>
            <hr style={{backgroundColor:'white', height:'2px',marginTop:'10px',width:'full'}}></hr>

          {/* <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div> */}

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {link.map((link) => (
                <a
                  key={link.name}
                  className={`mb-5 text-xs flex items-center px-1 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-teal-500 dark:hover:bg-teal-500 ${activeLink === link.name ? 'dark:bg-teal-600' : ''
                    }`}
                  href={link.link}
                >
                  <span className="mx-4 font-medium">{link.name}</span>
                </a>
              ))}
              {link.length===4 ?(
              <ProfileModal />
              ):(<>h</>)
                  }
            </nav>
          </div>
        </aside>
        <div>
          {/* Additional content */}
        </div>
      </div>
    </>
  );
}

export default SideBar;
