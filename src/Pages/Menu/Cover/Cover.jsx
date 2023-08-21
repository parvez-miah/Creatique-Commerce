import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({ img }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(innerWidth < 768);


      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize)
      }

    }

  }, [])

  return (
    <div>
    {
        isMobile ? <>          <h1 className="mobileHeaderTitle">Order Your Favorite Food Now</h1></> : <><Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          bgImageAlt="the dog"
          strength={-200}
        >
          <div style={{ height: 'auto' }} >

            <div className="hero min-h-screen" >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in.</p>

                </div>
              </div>
            </div>
          </div>



        </Parallax></>
    }
    </div>


  )
}

export default Cover;