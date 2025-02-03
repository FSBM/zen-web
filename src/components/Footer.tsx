import React from 'react';
import Button from '../components/Button';

function Footer() {
    return (
        <div className="">
            <div className="w-full bg-gray-200 rounded-full h-1 mb-2 dark:bg-gray-900">
                <div className="bg-gradient-to-r from-white to-[#873EE8] h-1 rounded-full w-[30%]"></div>
            </div>
            <div className="w-full flex justify-between px-2">
                <Button label="<" color='white' borderColor='white'  textClr='white'/>
                <Button label="Next" color='[#873EE8]' borderColor='white' textClr='black'/>
            </div>
        </div>

);
}


export default Footer;