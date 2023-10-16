import React from 'react'

function CommentTable(props) {
    console.log(props)
    return (
        <div>
            <table className="w-full table-auto">
                <thead className='shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]'>
                    <tr className="text-xs font-semibold font-opensans tracking-wide text-center text-gray-900 bg-[#D9D9D94D]">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Comment</th>
                        <th className="px-4 py-3">Sentiment</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {props.data.map(item => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <tr className="text-black">
                                <td className="px-4 py-3 ">
                                    <div className="flex items-center text-sm">
                                        <div className="hidden relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div className='w-full md:w-min'>
                                            <p className="font-semibold text-black text-xs font-algreya">{item.clientName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className=" py-3 text-[10px] font-normal font-sans">{123}</td>
                                <td className="px-4 py-3 text-ms font-normal text-xs text-center">{123}</td>
                                <td className="py-3 text-center items-center justify-center flex ">
                                    {/* <div className={`py-1 px-2 font-medium font-inter text-white max-w-[100px] text-[10px]/[12px] ${!item.offlineBooking ? "bg-[#35DBA2]" : "bg-[#FFCA28]"} rounded-full`}> {item.cat === "offline_bookings" ? "Offline Payment" : "Online Payment"}</div> */}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CommentTable