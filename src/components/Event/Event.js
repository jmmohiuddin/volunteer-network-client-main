import React, { useEffect, useState } from "react";

const Event = ({ event }) => {
  const deleteEvent = (id) => {
    fetch(`https://limitless-plateau-07534.herokuapp.com/deleteEvent/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("delete succesfully");
      });
  };
  return (
    <div className="col-md-3">
      <img style={{ height: "300px" }} src={event.imageURL} alt="" />
      <h3>
        {event.name}{" "}
        <button onClick={() => deleteEvent(event._id)}>Delete</button>
      </h3>
    </div>
  );
};

export default Event;
