import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/event-search'
// import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-util";
import { useRouter } from "next/router";
import { Fragment } from 'react';
import Head from 'next/head';
export default function AllEventsPage(props) {
  // const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);

  }

    return (
      <Fragment>
        <Head>
          <title>All Events</title>
          <meta name="description" content="Find a lot of great events that allow you to envolve..." />
        </Head>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList items={props.events}/>
      </Fragment>
    )
  }

  export async function getStaticProps(){
    const featuredEvents = await getAllEvents();
    return {
      props: {
        events: featuredEvents
      },
      revalidate: 60
    }
  }