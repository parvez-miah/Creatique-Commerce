import React from 'react'
import { Parallax, Background } from 'react-parallax';


const Cover = ({img}) => {
  return (
<Parallax
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
        
        
        
    </Parallax>
    
   
  )
}

export default Cover;