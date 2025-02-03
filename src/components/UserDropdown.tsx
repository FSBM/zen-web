import React, { useEffect, useState } from 'react';
import { PiUserCircleThin } from "react-icons/pi";

interface UserDropdownProps {
    DropDownItems: string;
    toPage: string;
}



function UserDropdown({Items} : {Items:UserDropdownProps[]} ): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [DropItems , setDropItems] = useState<UserDropdownProps[]>([]);

    useEffect(() => {
        setDropItems(Items);
    }, [Items]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleDropClick = (toPage : string) => {
        console.log(toPage);
    };

    return (
        <>
            <button
                id="dropdownUserAvatarButton"
                onClick={toggleDropdown}
                className="flex text-sm rounded-full md:me-0 absolute top-0 relative"
                type="button"
            >
                <span className="sr-only">Open user menu</span>
                <PiUserCircleThin className="w-9 h-9 text-white" />
            </button>

            <div
                className={`absolute right-1 top-[50px] z-10 border-[1px] 
                    border-[#7B7575] backdrop-blur-sm divide-y 
                    divide-[#7B7575] rounded-lg shadow-sm w-44 transition-all ease-in-out duration-300
                    ${isOpen ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-10 translate-x-2'}`}
            >
                    {DropItems.length>0 && DropItems.map((item, index) => (
                        <button className='text-white p-2 text-sm' key={index} onClick={()=>handleDropClick(item.toPage)}>{item.DropDownItems}</button>
                    ))}
                    <div>
                        <button className='text-white p-2 text-sm' onClick={()=>handleDropClick("./Logout")}>Log Out</button>
                    </div>

            </div>
        </>
    );
}

export default UserDropdown;
