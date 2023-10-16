import React from 'react'

function InfoCards() {
    return (
        <div className='p-4'>
            <div className="bg-[#141430] text-white rounded-lg shadow-lg h-full p-6">
                <div className="flex flex-wrap flex-row items-center">
                    <div className="flex-shrink max-w-full w-1/2">
                        <h5 className="text-gray-500 mb-1">Views</h5>
                        <h3 className='text-lg font-bold mb-1' > 143.210 </h3>
                        <p>46.2%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCards