import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { ChakraProvider ,CSSReset } from '@chakra-ui/react';
import store from'./features/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ChakraProvider>
    <CSSReset/>
  <App />
</ChakraProvider>
</Provider>
)
