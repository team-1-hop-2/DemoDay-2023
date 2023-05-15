import React from 'react'

export const Navbar = () => {
  return (
    <div className='bg-black '>
        <div className='flex flex-row w-screen h-20 bg-browngrey justify-between p-10 '>
            <div className='text-2xl text-white font-semibold flex items-center'>
                Wallet.
            </div>
            <div className='flex flex-row text-white font-normal text-xl gap-12 items-center '   >
                <div className=''>Contact</div>
                <div>About me</div>
                <div>Work</div>
            </div>
        </div>
    </div>
  )
}
export default Navbar