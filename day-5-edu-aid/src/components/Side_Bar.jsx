
import { Textarea, useDisclosure } from '@chakra-ui/react';
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
import { useState } from 'react';
function ProfileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setEditing] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [location, setLocation] = useState('city');
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState('January 1, 1990');
  const [portfolioLink, setPortfolioLink] = useState('https://example.com/portfolio');
  const [githubLink, setGithubLink] = useState('https://github.com/example');
  const [summary, setSummary] = useState('passionate engineering student');

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setSaved(true);
    setChangesMade(false);
    setEditing(false); // Exit edit mode after saving
  };

  const handleInputChange = (e) => {
    setChangesMade(true);
    setSaved(false);
    const { name, value } = e.target;

    if (name === 'gender') {
      setGender(value);
    } else if (name === 'birthDate') {
      setBirthDate(value);
    } else if (name === 'location') {
      setLocation(value);
    } else if (name === 'portfolioLink') {
      setPortfolioLink(value);
    } else if (name === 'githubLink') {
      setGithubLink(value);
    } else if (name === 'summary') {
      setSummary(value);
    }
  };

  const handleProfileClick = () => {
    onOpen();
    setEditing(false); // Reset to display mode when opening
  };

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
          <Avatar name='sanjeevi v' bg="teal.500" size="sm">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay bg='blackAlpha.600' backdropFilter='blur(10px) hue-rotate(0deg)' />
        <ModalContent>
          <ModalHeader textAlign='center' fontSize='x-large'>PROFILE</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" mb="4">
              <Avatar size="lg" name="Sabari" src="path/to/user-image.jpg" mr="2" />
              <Text fontWeight="bold" fontSize="xl">Sanjeevi V</Text>
            </Flex>
            <Flex alignItems="center" mb="4" ml="">
              <Text fontWeight="bold" fontSize="1xl">Email : </Text>
              <Text fontWeight="" fontSize="1xl"> &nbsp;sanjeevi.@gmail.com</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Box width="48%">
                {isEditing ? (
                  <>
                    <Text>
                      <strong>Gender:</strong>
                      <Input name="gender" value={gender} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong>Birth Date:</strong>
                      <Input name="birthDate" value={birthDate} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong>Location:</strong>
                      <Input name="location" value={location} onChange={handleInputChange} />
                    </Text>
                  </>
                ) : (
                  <>
                    <Text>
                      <strong>Gender:</strong> <br/>{gender}
                    </Text>
                    <Text>
                      <strong>Birth Date:</strong><br/> {birthDate}
                    </Text>
                    <Text>
                      <strong>Location:</strong> <br/>{location}
                    </Text>
                  </>
                )}
              </Box>

              <Box width="48%">
                {isEditing ? (
                  <>
                    <Text>
                      <strong>Portfolio:</strong>
                      <Input name="portfolioLink" value={portfolioLink} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong>Github:</strong>
                      <Input name="githubLink" value={githubLink} onChange={handleInputChange} />
                    </Text>
                    <Text>
                      <strong>Summary:</strong>
                      <Textarea name="summary" value={summary} onChange={handleInputChange} />
                    </Text>
                  </>
                ) : (
                  <>
                    <Text>
                      <strong>Portfolio:</strong> {portfolioLink}
                    </Text>
                    <Text>
                      <strong>Github:</strong> {githubLink}
                    </Text>
                    <Text>
                      <strong>Summary:</strong> {summary}
                    </Text>
                  </>
                )}
              </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            {isEditing ? (
              <Button colorScheme="teal" mr={3} onClick={handleSaveClick} isDisabled={!changesMade}>
                {isSaved ? (
                  <Flex alignItems="center">
                    Saved {/* Add your success icon here */}
                  </Flex>
                ) : (
                  'Save'
                )}
              </Button>
            ) : (
              <Button colorScheme="teal"mr={3} onClick={handleEditClick}>
                Edit
              </Button>
            )}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// SideBar.js

// import { ProfileModal } from './ProfileModal'; // Adjust the path as needed

function SideBar({ links }) {
  
  // eslint-disable-next-line react/prop-types
  const link = links.studentlinks;
  // eslint-disable-next-line react/prop-types
  const activeLink = links.currentlinks;

  return (
    <>
      <div className="flex">
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className='flex'>
            <img className="w-auto h-6 sm:h-7" src={logo} alt="" /><span className='ml-2 text-lg text-white'>Edu_Aid</span>
          </a>

          <div className="relative mt-6">
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
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {link.map((link) => (
                <a
                  key={link.name}
                  className={`mb-5 flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-teal-500 dark:hover:bg-teal-500 ${activeLink === link.name ? 'dark:bg-teal-600' : ''
                    }`}
                  href={link.link}
                >
                  <span className="mx-4 font-medium">{link.name}</span>
                </a>
              ))}

              <ProfileModal />
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
