import React from 'react'
import LineChart from './LineChart'

function Cards() {
    return (
        // <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
        //     <div className="flex flex-wrap flex-row items-center">
        //         <div className="flex-shrink max-w-full w-1/2">
        //             <h5 className="text-gray-500 mb-1">Total view</h5>
        //             <h3 className="text-lg font-bold mb-1">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-block ltr:mr-2 rtl:ml-2 -mt-1 bi bi-eye" viewBox="0 0 16 16">
        //                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
        //                     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
        //                 </svg> 143.210
        //             </h3>
        //             <p className="text-sm text-green-500">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-4 h-4 bi bi-arrow-up-short" viewBox="0 0 16 16">
        //                     <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path>
        //                 </svg>
        //                 46.2%
        //             </p>
        //         </div>
        //         <div className="flex-shrink max-w-full w-1/2">
        //             <canvas className="max-w-100" id="LineAreaSm" style="display: block; box-sizing: border-box; height: 69.6px; width: 141.6px;" width="177" height="87"></canvas>
        //         </div>
        //     </div>
        // </div>
        <div className='p-4'>
            <div className="bg-[#141430] text-white rounded-lg shadow-lg h-full p-6">
                <div className="flex flex-wrap flex-row items-center">
                    <div className="flex-shrink max-w-full w-1/2">
                        <h5 className="text-gray-500 mb-1">Views</h5>
                        <h3 className='text-lg font-bold mb-1' > 143.210 </h3>
                        <p>46.2%</p>
                    </div>
                    <div className="flex-shrink max-w-full  m-4">
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards