import React, { useState, useEffect } from "react"
import EventManager from "../../modules/EventManager"

const EventEditForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "", location: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...event }
        stateToChange[evt.target.id] = evt.target.value
        setEvent(stateToChange);
    }

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const editedEvent = {
            id: props.match.params.eventId,
            eventName: event.eventName,
            date: event.date,
            location: event.location,
            userId: event.userId
        }

        EventManager.update(editedEvent)
            .then(() => props.history.push("/events"))
    }

    useEffect(() => {
        EventManager.get(props.match.params.eventId)
            .then(event => {
                setEvent(event);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="eventName"
                            value={event.eventName}
                        />
                        <label htmlFor="eventName">Event Name</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date}
                        />
                        <label htmlFor="date">Date</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                        />
                        <label htmlFor="location">Location</label>

                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEvent}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default EventEditForm