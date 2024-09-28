import { Fragment, ReactNode, useEffect, useRef, useState } from "react";

type DropdownPropTypes = {
  children: string | ReactNode;
  btnChild: string | ReactNode;
  btnClass?: string;
  alignment?: string;
};

const Dropdown = ({
  children,
  btnChild,
  btnClass = "",
  alignment = "right",
}: DropdownPropTypes) => {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  null;

  const handleClick = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      // Clicked outside of the menu, close the menu
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    // Cleanup the event listener when the component unmounts
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className={"relative " + btnClass}
      >
        {btnChild}
      </button>
      {showMenu && (
        <ul
          className={`absolute top-[3.25rem] right-0 min-h-10 py-2 list-none w-72 max-h-[200px] overflow-y-auto  bg-white dark:bg-black scroll-thin`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
