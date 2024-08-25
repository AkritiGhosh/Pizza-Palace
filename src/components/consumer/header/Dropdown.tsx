import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";

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
  const dropdownRef = useRef(null);

    // const handleClick = (e) => {
    //   if(dropdownRef.current.contains(e.target))
//   };

  useEffect(() => {
    // document.onclick(handleClick)
  }, []);
  return (
    <Fragment>
      <button
        onClick={() => setShowMenu(true)}
        ref={dropdownRef}
        className={"relative " + btnClass}
      >
        {btnChild}
      </button>
      {showMenu && (
        <ul
          ref={dropdownRef}
          className={`absolute top-20 ${alignment}-0 min-h-10 py-2 list-none w-72 max-h-[200px] overflow-y-auto divide-y divide-slate-300 bg-white dark:bg-black `}
        >
          {children}
        </ul>
      )}
    </Fragment>
  );
};

export default Dropdown;
