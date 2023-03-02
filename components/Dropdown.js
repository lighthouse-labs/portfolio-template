import React from 'react';

const Dropdown = () => {
  return (
    <div>
      <button id="dropdownDefaultButton"
       data-dropdown-toggle="dropdownId"
       className="text-black bg-[#F7AB0A] hover:bg-[#F7AB0A]
        focus:outline-none rounded-lg
        text-sm px-4 py-2.5 text-center inline-flex items-center
        dark:bg-[#F7AB0A] dark:hover:bg-[#F7AB0A] outline-none font-semibold"
       type="button">More<svg className="w-4 h-4 ml-2" aria-hidden="true"
       fill="none" stroke="currentColor" viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg"><path
       strokeLinecap="round" strokeLinejoin="round"
       strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
       <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
    </div>
  );
}

export default Dropdown;
