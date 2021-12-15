import { Fragment } from "react";
import classes from './layout.module.css';
import Header from "./header";
import Footer from './footer';

function Layout(props) {

    return (
        <Fragment>
            <div className={classes.layout}>
                <div className={classes.header}>
                    <Header />
                </div>
                <main className={classes.main}>
                    {props.children}
                </main>
                <div className={classes.footer}>
                <Footer />
                </div>
            </div>

        </Fragment >
    );
}

export default Layout;