import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Onboarding1 from "../components/Onboarding1";

function OnboardLayout() {
    return (
        <div className="flex flex-col h-screen align-middle justify-between overflow-x-hidden">
            <Header />
                <Onboarding1 />
            <Footer />
        </div>

    );
}

export default OnboardLayout;   