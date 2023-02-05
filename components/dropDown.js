import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import bullet from "../public/bulletblack.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent(props) {
  return (
    <Menu as="div" className="relative inline-block whiteBox">
      <div>
        <Menu.Button className="py-1 px-3 xl:text-[22px] lg:text-[20px] sm:text-[18px] text-[16px] font-medium drop-shadow-2xl text-black bg-white    focus:outline-none  whiteBox">
          <div className=" flex items-center justify-between py-[1rem] xl:px-[3rem]">
            <div className="rounded-md text-left">
              <span className="benifitsTopics">{props.name}</span>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 ml-2 -mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
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
        <Menu.Items className="  w-full mt-2 origin-top-right bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? " text-gray-900" : "text-gray-700",
                    "block px-6 py-4 text-sm"
                  )}
                >
                  {props.content.map((n) => (
                    <div className=" rounded-md flex items-center justify-start  xl:text-xl lg:text-lg md:text-lg xl:leading-[197%] lg:leading-[197%] md:leading-[197%] sm:leading-[197%] leading-[197%] font-medium text-gray-700 py-2">
                      <Image
                        src={bullet}
                        width={30}
                        height={30}
                        className="mr-3"
                      />
                      {n}
                    </div>
                  ))}
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
