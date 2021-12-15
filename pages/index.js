import Head from 'next/head';
import { Fragment } from 'react/cjs/react.production.min';
import classes from '../styles/landing-page.module.css';

export default function Home() {
  return (
    <div>
      <section className={classes.landing__page__slider}>
        <div className={classes.landing__page__logo}>
          <div className={classes.landing__page__logo__placeholder}>LOGO</div>
        </div>
        <h2>Save money and keep business growing without the overhead!</h2>
        <h1 className={classes.landing__page__tagline}>YOUR SATISFACTION IS OUR PRIORITY</h1>
      </section>
    </div>
  )
}
