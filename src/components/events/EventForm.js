import React, { useState } from 'react';
import EventManager from '../../modules/EventManager';
import "./EventForm.css"
import { Form, Button } from "react-bootstrap"

const EventForm = props => {
    const [event, setEvent] = useState({ eventName: "", date: "", location: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const constructNewEvent = evt => {
        evt.preventDefault();
        if (event.eventName === "" || event.date === "" || event.location === "" ) {
          window.alert("Please input an event name, date, and location");
        } else {
          setIsLoading(true);
          const newEvent = {
            ...event, 
            userId: parseInt(sessionStorage.getItem("credentials"))
        }
          EventManager.post(newEvent)
            .then(() => props.history.push("/events"));
        }
      };

      return (
        <>
          <Form className="eventForm_Form">
              <div className="formgrid">
              <label htmlFor="eventName">Event</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="eventName"
                  placeholder="Event Name"
                />
                
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  required
                  onChange={handleFieldChange}
                  id="date"
                  placeholder="date"
                />
                
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  required
                  onChange={handleFieldChange}
                  id="location"
                  placeholder="location"
                />
               

              </div>
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={constructNewEvent}
                >Submit</button>
              </div>
          </Form>
        </>
      );
    };
    
    export default EventForm