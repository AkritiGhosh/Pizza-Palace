import React from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string;
  setValue: (value: string | ((prevVar: string) => string)) => void;
};

const FloatingLabelInput = ({
  id,
  name,
  value,
  label,
  type = "text",
  setValue,
  ...props
}: InputProps) => {
  return (
    <div id={id} className="w-full relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="w-full h-10 rounded-lg text-base px-2 bg-transparent border-2 border-gray-300 focus:border-amber-500 !outline-0 peer"
        {...props}
      />
      <label
        className="text-base text-gray-500 absolute left-2 top-2/4 -translate-y-1/2 pointer-events-none duration-300 
          peer-focus:text-xs peer-focus:top-0 peer-focus:px-1 peer-focus:bg-white dark:peer-focus:bg-slate-900
          peer-valid:text-xs peer-valid:top-0 peer-valid:px-1 peer-valid:bg-white dark:peer-valid:bg-slate-900 peer-focus:text-amber-800 dark:peer-focus:text-amber-400 "
        htmlFor="floating_label_input"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
