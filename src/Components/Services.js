import React, { Component } from "react";
import Title from "./Title";
import { FaAtlas, FaLightbulb, FaUniversity, FaUserGraduate} from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaAtlas />,
        title: "free ebooks",
        info: "You can read any book for free"
      },
      {
        icon: <FaLightbulb />,
        title: "Clear your Concept",
        info: "Clear your doubts with vast collection of study material."
      },
      {
        icon: <FaUniversity />,
        title: "Central & State Board",
        info: "Central and State board Books Covered"
      },
      {
        icon: <FaUserGraduate />,
        title: "Higher Level Books",
        info: "Higher Level book to go deeper in topics"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Library Features" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
