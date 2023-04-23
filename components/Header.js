import React from 'react';
import { useRouter } from 'next/router';
import Dropdown from './Dropdown';

const Header = () => {
  const router = useRouter();

  return (
    <div className='sticky top-0 h-24 flex justify-between
     items-center px-5'>
      <p onClick={() => router.push("/")}
        className='text-2xl md:text-xl lg:text-2xl cursor-pointer
       text-[rgb(251,247,245)]'>Nathan Pare</p>
      <Dropdown />
    </div>
  );
}

export default Header;
