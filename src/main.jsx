import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './app.css'
import router from './Routes/Routes.jsx';
import {
  RouterProvider,
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/authProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl, mx-auto, nonito-font	'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>

      </HelmetProvider >

    </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
