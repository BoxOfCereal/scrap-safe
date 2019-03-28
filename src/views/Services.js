import React from "react";
import { ServicesPanel, Panel, ImagePanel, Button } from "../components/index";
import { FaRecycle } from "react-icons/fa";

const Services = () => {
  return (
    <>
      <Panel
        height={800}
        title="Hazardous Waste Disposal"
        subTitle="Our Process"
      >
        <ul>
          <li>
            First Utility collects hazardous meters and ships them to our
            facilities.
          </li>
          <li>
            Then ScrapSafe will: Remove seals (dispose of lead seals as
            hazardous waste)
          </li>
          <li>Remove covers-separate glass, metal, plastic as necessary</li>
          <li>Record serial numbers of every meter with hazardous waste</li>
          <li>
            Remove electronics and hazardous waste as necessary Remove batteries
            and dispose with licensed hazmat recycler
          </li>
          <li>
            Provide documentation on all meters with hazardous waste to the
            Utility
          </li>
          <li />
          <li />
          <li />
        </ul>

        <p>
          Before us there was no standard so we made it. We're the only ones in
          the business that do what we do. We touch every single meter to
          guarantee that all hazardous waste is properly handled and documented
        </p>
      </Panel>
      <ImagePanel
        Icon={FaRecycle}
        title="New Recycle Idea"
        flavorText={
          "We Always Strive To Produce New Ideas To Help Us In Our Cycling Process"
        }
      />
    </>
  );
};

export default Services;
