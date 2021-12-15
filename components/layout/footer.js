import Link from "next/link";
import classes from "./footer.module.css";

const Footer = () => {
    return (
        <div className={classes.app_footer}>
            <nav>
                <ul className={classes.main__footer__links}>
                    <li className={classes.main__footer__link}>
                        <Link href='/about-us'>About Us</Link>
                    </li>
                    <li className={classes.main__footer__link}>
                        <Link href='/contact-us'>Contact Us</Link >
                    </li>
                    <li className={classes.main__footer__link}></li>
                </ul>
                <div className={classes.app__footer__copyright}>
                    {" "}
                    Copyright &copy; 2021 Virtually There LLC
                </div>
            </nav >
        </div >
    );
};

export default Footer;
