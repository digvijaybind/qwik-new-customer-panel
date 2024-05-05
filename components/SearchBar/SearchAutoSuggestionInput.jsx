import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './Searchbar.module.css'


const SearchAutoSuggestionInput = ({
    name,
    type,
    placeholder,
    onFocus,
    value,
    onChange,
    className,
}) => {
    return (
        <div className="flex justify-around items-center bg-[#fff]  px-2 py-1 h-[50px] w-[240px] rounded shadow-2xl  shadow-[#e2e0e0]">
            <div className={`pr-2 ${className}`}>
                <FaSearch />
            </div>
            <input
                className={`bg-transparent py-3 focus:outline-none ${styles.InputText}`}
                name={name}
                type={type}
                placeholder={placeholder}
                onFocus={onFocus}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default SearchAutoSuggestionInput