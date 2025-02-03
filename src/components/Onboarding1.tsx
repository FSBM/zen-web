import React from "react";
import SkillInput from "./SkillInput";

function Onboarding1() {
    return (
        <div className="flex">
            <div className="flex flex-col items-center justify-center lg:w-1/2 text-white text-md">
                <div className="self-start p-4 space-y-2">
                    <p className="text-[14px]">1/4</p>
                    <h2 className="text-3xl">What work are you here to do?</h2>
                    <p>Your skills help us recommend the best projects for you.</p>
                </div>
                <SkillInput />
            </div>
            <div></div>
        </div>

    );
}
export default Onboarding1;



