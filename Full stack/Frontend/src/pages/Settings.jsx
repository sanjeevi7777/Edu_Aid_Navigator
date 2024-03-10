import React, { useState } from 'react';
import { Spinner } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { adminlinks } from '../assets/constants/Side_Constants';
import axios from 'axios';

function Settings() {
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const [content, setContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [contentHeading, setContentHeading] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            id: 1,
            theme: theme,
            head: contentHeading,
            content: content
        };

        try {
            await axios.post("http://localhost:8989/api/v1/auth/admin/saveSettings", data);
            // Successful submission
            // You can do something here, like showing a success message
        } catch (error) {
            setErrorMessage("Failed to save settings. Please try again."); // Set error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col bg-gray-700'>
            {/* Your Sidebar Component */}
            <div className='fixed z-50'>
                {/* Replace SideBar component with your actual Sidebar component */}
                <SideBar links={{ studentlinks: adminlinks, currentlinks: 'Settings', role: 'admin' }} />
            </div>

            {/* Main Content */}
            <div className='ml-64 bg-gray-700'>
                <span className="text-2xl font-bold mx-5 text-white "><span className='text-teal-600'>USER SIDE </span>Site Settings:</span>
            </div>

            {/* Form Section */}
            <div className="min-h-screen flex items-center justify-center">
                <div className="sm:w-full max-w-md bg-white rounded-lg shadow-md dark:border dark:bg-transparent dark:border-gray-700"
                    style={{
                        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'fixed',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div className="p-6 space-y-4 md:space-y-6">
                        <form className="space-y-4 md:space-y-6 px-4" action="#">
                            <div>
                                <label htmlFor="theme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Theme
                                </label>
                                <select
                                    id="theme"
                                    value={theme}
                                    onChange={(e) => setTheme(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="heading" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Home Heading
                                </label>
                                <textarea
                                    id="contentHeading"
                                    value={contentHeading}
                                    onChange={(e) => setContentHeading(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter New Heading"
                                />
                            </div>
                            <div>
                                <label htmlFor="additionalSettings" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Home Content
                                </label>
                                <textarea
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter New Content"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full bg-teal-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? <Spinner color='teal.200' /> : 'Change'}
                            </button>
                            {errorMessage && (
                                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;
