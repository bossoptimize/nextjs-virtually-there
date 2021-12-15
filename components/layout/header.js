import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import classes from "./header.module.css";
import { Fragment } from "react/cjs/react.production.min";

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const buttonRef = useRef();
    const mobileNavRef = useRef();

    const slideOutAnimation = () => {
        if (mobileNavRef.current) {
            document.getElementById("mobile-nav").style.animation = "slide_out 500ms";
            setTimeout(() => { setMobileNav(false) }, 400)
        }
    }

    useEffect(() => {

        // if (mobileNavRef.current !== undefined) {
        const onBodyClick = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                if (mobileNavRef.current) {
                    slideOutAnimation();

                }
                // setTimeout(() => { setMobileNav(false) }, 500)

            }
        };
        document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, {
                capture: true,
            });
        };
        // }
    }, [mobileNav]);

    return (
        <Fragment>
            <div className={classes.app__header}>
                <div className={classes.main__header}>
                    <div className={classes.main__header__brand}>
                        <Link href='/'>Home</Link>
                    </div>
                    <nav className={classes.main__nav}>
                        <button
                            ref={buttonRef}
                            className={classes.toggle__button}
                            onClick={() => { mobileNavRef.current ? slideOutAnimation() : setMobileNav(!mobileNav); }}
                        >
                            <span className={classes.toggle__button__bar}></span>
                            <span className={classes.toggle__button__bar}></span>
                            <span className={classes.toggle__button__bar}></span>
                        </button>
                        <ul className={classes.main__nav__items}>
                            <li className={classes.main__nav__item}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={classes.main__nav__item}>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className={classes.main__nav__item, classes.main__nav__item__cta}>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {mobileNav ? (
                    <nav ref={mobileNavRef} id="mobile-nav" className={classes.mobile__nav} onClick={() => slideOutAnimation()}>
                        <ul className={classes.mobile__nav__items}>
                            <li className={classes.mobile__nav__item}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={classes.mobile__nav__item}>
                                <Link href='/about-us'>About Us</Link>
                            </li>
                            <li className={classes.mobile__nav__item, classes.mobile__nav__item__cta}>
                                <Link href='/contact-us' >Contact Us</Link >
                            </li >
                        </ul >
                    </nav >
                ) : (
                    ""
                )
                }
            </div >
        </Fragment >
    );
};

export default Header;
