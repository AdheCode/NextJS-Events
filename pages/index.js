import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";

export default function HomePage(props) {
  // const featuredEvents =  getFeaturedEvents();
  return (
    <>
    <Head>
      <title>NextJS Events</title>
      <meta name="description" content="Find a lot of great events that allow you to envolve..." />
    </Head>
    <div className={styles.container}>
      {/* <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul> */}
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
    </>
  );
}

export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 30
  }
}
