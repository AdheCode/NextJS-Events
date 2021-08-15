import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

export default function HomePage() {
  const featuredEvents =  getFeaturedEvents();
  return (
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
      <EventList items={featuredEvents} />
    </div>
  );
}
