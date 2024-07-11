import React from 'react'


const InputField = ({icon, txtname, onChange}) => {
    return (
        <div className="relative mt-2">
          <input
            type="text"
            onChange={onChange}
            className="w-full h-[56px] inp  rounded-[20px] border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder={txtname}
            style={{ paddingLeft: '48px' }}
          />
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            {icon}
          </div>
        </div>
      );
}

export default InputField