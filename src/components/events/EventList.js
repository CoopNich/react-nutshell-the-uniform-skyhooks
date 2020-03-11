import React, { useState, useEffect } from 'react';
import EventCard from "./EventCard";
import EventManager from '../../modules/EventManager';
import "./Events.css";
import { Button } from "react-bootstrap"


const EventList = (props) => {
    const [events, setEvents] = useState([]);

    const getEvents = () => {
        return EventManager.getAll().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        })
    }
    const deleteEvent = id => {
        EventManager.delete(id)
            .then(() => EventManager.getAll().then(setEvents))
    }

    useEffect(() => {
        getEvents()
    }, [])

return (
    <>
        <section className="section-content">
            <Button bg="dark" variant="dark"
                type="button"
                className="btn"
                onClick={() => { props.history.push("/events/new") }}>
                Add Event
            </Button>
        </section>
        <div className="container-cards">
            {events.sort((a, b) => new Date(a.date) - new Date(b.date)).map(event =>
                <EventCard
                    key={event.id}
                    event={event}
                    deleteEvent={deleteEvent}
                    {...props}
                />
            )}
        </div>
    </>
)
}

export default EventList