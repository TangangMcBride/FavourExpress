import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import Card from "./Card";
import { buses } from "../constant";
import Header from "./Header";

const Buses = () => {
  return (
    <div className="py-16 flex flex-col">
      <Header name="Buses" />
      <div className="px-16">
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
          {buses.map((bus, index) => (
            // Wrap each Card with a Link and set the 'to' prop
            <Link key={bus.id} to={`/bus/${bus.id}`}>
              <Card {...bus} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buses;
