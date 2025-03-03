
import crewo_icon from "../assets/crewo_icon.svg";
import UserDropdown from "./UserDropdown";

function Header() {
    return (
            <div className="flex justify-between items-center w-full p-3 border-b-[1px] border-[#7B7575] relative ">
                <img src={crewo_icon} alt="" className="min-h-[32px]" />
                <UserDropdown Items={[{DropDownItems : "Profile", toPage:"./Page"}]} />
            </div>
    );
}

export default Header;