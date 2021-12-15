import React from "react";
import classes from "./landing-page.module.css"

const LandingPage = () => {
    return (
        <div>
            <section id="landing-page__slider">
                <div id="landing-page__logo">
                    <div className="landing-page__logo--placeholder">LOGO</div>
                </div>
                <h2>Save money and keep business growing without the overhead!</h2>
                <h1 className="landing-page__tagline">YOUR SATISFACTION IS OUR PRIORITY</h1>
            </section>
        </div>
    );
};

export default LandingPage;
