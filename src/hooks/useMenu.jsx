import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

const useMenu = () => {
  
 

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {

    //   fetch('https://creatique-commerce-server.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data =>{
    //             setMenu(data);
              
             
    //             });
     
      
    // }, [])



  const { data: menu = [], isLoading: loading , refetch} = useQuery({

    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('https://creatique-commerce-server.vercel.app/menu');
      return res.json();
    }
  })



  return [

    menu, loading, refetch
  ]
}

export default useMenu