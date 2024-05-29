import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MoreMenu = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="lg:inline-flex lg:w-auto w-full py-2 text-center rounded text-grey-800 text-1xl font-medium hover:text-primary_green-0 hover:text-lg transition-all link link-underline link-underline-black">
          MORE
          <ChevronDownIcon
            className="-mr-1 mb-2 mt-1 ml-1 h-15 w-15 hover:motion-safe:animate-ping"
            aria-hidden="true"
          />
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
        <Menu.Items className="origin-top-right absolute -right-5 mt-2 w-56 rounded-md shadow-lg ring-1 bg-white ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link href="/codeofconduct">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? "hover:text-primary_green-0"
                        : "hover:text-primary_green-0",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Code of Conduct
                  </a>
                )}
              </Menu.Item>
            </Link>
            <Link href="/info">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active
                        ? "hover:text-primary_green-0"
                        : "hover:text-primary_green-0",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Eligibility Criteria
                  </a>
                )}
              </Menu.Item>
            </Link>
            
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MoreMenu;
