import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem."
      },
      {
        icon: <FaBeer />,
        title: "Best Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
      </section>
    );
  }
}
