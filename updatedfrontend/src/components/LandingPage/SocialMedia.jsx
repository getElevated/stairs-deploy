import React from 'react'

const SocialMedia = () => {
  return (
    <div>
          <div className="max-w-7xl flex  flex-col rounded-lg p-4 font-poppins mt-20 m-auto  ">
                  <div className="bg-[#D9D9D9] rounded-lg p-6">
                    <div className="bg-[#FCBD01] p-2 relative w-20 h-20 rounded-full">
                         <FaDiscord className="text-7xl absolute top-0 left-1" />
                    </div>
                        <h1 className="font-semibold mt-4 text-2xl font-poppins">JOIN STAIRS COMMUNITY</h1>
                        <h1 className="mt-4 text-xl">Join our vibrant community of innovators, where ideas thrive, collaboration
                        soars, and together, we're shaping the future of in good way </h1> 
                            <button className="px-20 text-xl mt-4 rounded-lg w-72 py-4 bg-black font-semibold text-neutral-100">
                             Join Discord
                             </button>
                     </div>
            </div>
    </div>
  )
}

export default SocialMedia
