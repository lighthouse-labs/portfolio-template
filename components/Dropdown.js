import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { useRouter } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const router = useRouter();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#F7AB0A] px-3 py-2 text-sm md:text-md font-semibold text-black">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#F7AB0A] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => router.push("/services")}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Services
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => router.push("/portfolio")}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Portfolio
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => router.push("/contact")}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-black' : 'text-black',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Contact Me
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
