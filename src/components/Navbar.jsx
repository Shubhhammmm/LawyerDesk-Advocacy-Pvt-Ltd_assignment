import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  HomeIcon,
  NewspaperIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
const navigation = [
  {
    name: "News feed",
    href: "#",
    current: false,
    icon: <NewspaperIcon className="size-5" />,
  },
  {
    name: "Find lawyers",
    href: "#",
    current: false,
    icon: <UserGroupIcon className="size-5" />,
  },
  {
    name: "Home",
    href: "#",
    current: true,
    icon: <HomeIcon className="size-5" />,
  },
  {
    name: "Connections",
    href: "#",
    current: false,
    icon: <CubeTransparentIcon className="size-5" />,
  },
  {
    name: "Chats",
    href: "#",
    current: false,
    icon: <ChatBubbleBottomCenterTextIcon className="size-5" />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="">
      <Disclosure className="bg-gray-200  ">
        {({ open }) => (
          <>
            <div className=" w-full bg-gray-200 px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex ml-24 flex-shrink-0 items-center">
                    <img
                      className="h-9 w-auto"
                      src="https://advocase.ai/assets/images/brand_round/advocase_full.png" // logo
                      alt="Your Company"
                    />
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex lg:ml-64 space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#025BD4] text-white"
                              : "text-gray-800 hover:bg-gray-700 hover:text-white",
                            "rounded-full px-4 py-1 text-sm font-medium flex gap-2"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.icon} {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center  mr-24 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Cog8ToothIcon className="size-8 text-gray-900" />
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-3"
                  >
                    <BellIcon className="size-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://media.istockphoto.com/id/2152906574/photo/sexy-young-businessman-in-formal-grey-tuxedo-posing-standing-in-office-library.jpg?s=2048x2048&w=is&k=20&c=6oMytWl9nTtan4EO5VNnu79IqQgBINdmDgAzxSdwhv0="
                          alt=""
                        />
                      </MenuButton>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <DisclosurePanel className=" sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-gray-800"
                        : "text-gray-900 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
