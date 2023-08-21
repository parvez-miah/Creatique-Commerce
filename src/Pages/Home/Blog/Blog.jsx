import React from 'react'
import './Blog.css'

const Blog = () => {
    return (
        <div >
            <div className='title-section'>
                <h3  className="text-3xl"><b>Latest<span style={{ color: '#0088ff', padding:'20px' }}>News</span></b></h3>
                <p>Get updated with the latest news of new technologies and gadgets </p>
            </div>
            {/* blogq */}

            <div className='blogelements'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/cb82R3X/blog5.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            A Place of Silence
                            <div className="badge badge-accent">Technology</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                        </div>
                    </div>
                </div>

                {/* third */}


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Lpd3T0s/blog1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            How to create a Logo like a Pro
                            <div className="badge badge-success">Draw</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                        </div>
                    </div>
                </div>
                {/* second */}


                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/jDgwQDg/blog4.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">

                            Principles of Coldness
                            <div className="badge badge-secondary">Health</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Blog