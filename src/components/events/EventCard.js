import React from "react";


const EventCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Event: <span className="card-eventname">
                    {props.event.name}
                </span></h3>
                {/* <button type="button" onClick={() => props.deleteEvent(props.event.id)}>Discharge</button>
                <Link to= */}
            </div>
        </div>
    )
}

export default EventCard