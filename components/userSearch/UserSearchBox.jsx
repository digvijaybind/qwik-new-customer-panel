import React, { useCallback, useState } from 'react'
import styles from "./UserSearchBox.module.css"
import _debounce from "l"
const UserSearchBox = ({handleSubmit,formData,handleInputChange,isMobile=false,className}) => {
    const[isOpen,setIsOpen]=useState(false);
    const[selectDate,setSelectDate]=useState(null);
    const[value,setValue]=useState('');
    const[activeInput,setActiveInput]=useState(null);
    const[displayText,setDisplayText]=useState('');
    const[searchResults,setSearchResults]=useState([]);
    const[originFocus,setOriginFocus]=useState('');
    const[destinationFocus,setDestinationFocus]=useState(false);
    const[originSearch,setOriginSearch]=useState('');
    const[originSearchSelected,setoriginSearchSelected]=useState(null);
    const[destinationSearch,setDestinationSearch]=useState('');
    const[destinationSearchSelected,setdestinationSearchSelected]=useState('');
    const[searchLoading,setSearchLoading]=useState(false);

    const handleDivClick=(index)=>{
        setActiveInput(index);
    }

    const searchCity=useCallback(
        _debounce((text)=>{
            
        })
    )
  return (
   <div className=''>


   </div>
  )
}

export default UserSearchBox