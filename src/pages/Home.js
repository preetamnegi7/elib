import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="E Library"
          subtitle="Empowering Learners"
        >
          <Link to="/rooms" className="btn-primary">
            Library
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
