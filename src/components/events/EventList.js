import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import EventManager from '../../modules/EventManager';

const EventList = (props) => {
    const [events, setEvents] = useState([];);

    const getEvents = () =>{
        return EventManager.getAll().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    };
    useEffect(() => {
        getEvents();
    }, []);

    return (
        <>
        <section className="section-content">
        <button type="button"
        onClick={[] => {props.history.push("/animals/new")}}>
            Admit EventCard
            </button>
        </section>

    )
}