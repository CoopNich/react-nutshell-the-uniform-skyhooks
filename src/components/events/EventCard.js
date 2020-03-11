import React from "react";
import "./Events.css";


const EventCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Event: <span className="card-eventName">
                    {props.event.eventName}
                </span></h3>
                <p>Date: {props.event.date}</p>
                <p>Location: {props.event.location}</p>
                <button type="button" onClick={() => props.deleteEvent(props.event.id)}>Delete</button>
                <button type="button" onClick={() => props.history.push(`/events/${props.event.id}/edit`)}>Edit</button>
            </div>
        </div>
    )
}

export default EventCard