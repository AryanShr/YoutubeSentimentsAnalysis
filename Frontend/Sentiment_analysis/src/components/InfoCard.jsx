import React from 'react'

function InfoCards(props) {
    return (
        <div className='p-4 w-full'>
            <div className="bg-[#141430] text-white rounded-lg shadow-lg h-full p-6">
                <div className="flex flex-wrap flex-row items-center justify-center">
                    <div className="flex-shrink max-w-full w-1/2 text-center">
                        <h5 className="text-white mb-1">{props.title}</h5>
                        {/* <h3 className='text-lg font-bold mb-1' >{props.number}</h3>
                        <p>{props.percen}</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCards