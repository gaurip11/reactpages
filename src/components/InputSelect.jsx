import React from 'react'

const InputSelect = ({ label, name, list, handleFunction }) => {
    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
            <select
                name={name}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
                {list && list.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
            </div>
        </>
    )
}

export default InputSelect