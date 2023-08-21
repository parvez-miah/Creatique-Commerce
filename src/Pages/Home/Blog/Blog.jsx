import React from 'react';
import { FaBloggerB } from 'react-icons/fa';

const Blog = () => {
    return (
        <div className="p-8 md:p-16 lg:p-20">
            <h2 className="text-2xl md:text-3xl font-semibold flex items-center text-red-600 mt-6">
                <FaBloggerB className="mr-2" />
                <span className="text-black">Latest <span className="text-blue-500">Blog's</span></span>
            </h2>
            {/* blog */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="card bg-base-100 shadow-xl">
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
                <div className="card bg-base-100 shadow-xl">
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
                <div className="card bg-base-100 shadow-xl">
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
    );
}

export default Blog;
