
import Button from '../components/Button';

interface Props{
    leftDisabled?: boolean,
    handleLeftClick: () => void
    handleRightClick: () => void
    step:number;
    isFinal?: boolean
}

function Footer({leftDisabled, handleLeftClick,handleRightClick,step,isFinal}: Props) {
    

    
    return (
        <div className="">
            <div className="w-full bg-gray-200 rounded-full h-1 mb-2 dark:bg-gray-900">
                <div className={`bg-gradient-to-r from-white to-[#873EE8] h-1 rounded-full 
                transition-all duration-300 ease-in-out`}
                style={{ width: `${(step / 4) * 100}%` }}></div>
''            </div>
            <div className="w-full flex justify-between px-2 py-1">
                <Button label="<" color='white' borderColor='white'  textClr='white' isDisabled={leftDisabled} 
                onClick={handleLeftClick}/>
                <Button label={isFinal ? "Submit" : "Next"} color='[#873EE8]' borderColor='white' textClr='white'
                onClick={handleRightClick}/>
            </div>
        </div>

);
}


export default Footer;