import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import { getFeaturedEvents, getEventById } from "../../helpers/api-util";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Comments from "../../components/input/comments";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";

export default function EventDetailPage(props) {
  // const router = useRouter();
  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);
  const event = props.event;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths(){
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({
    params: {eventId: event.id}
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  }
}