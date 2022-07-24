import React from "react";
import { Nav, Col, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import bookingapp from "../assets/bookingappmainscreen.png";
import TrackVisibility from "react-on-screen";
import footerimg from "../assets/footerimg.png";
import selectroomimg from "../assets/selectroomimg.png";
import searchhotelimg from "../assets/searchhotelimg.png";
import searchbytype from "../assets/searchbytypeimg.png";
import loginpageimg from "../assets/loginpageimg.png";
import exploreimg from "../assets/exploreimg.png";
import featuredpropertiesimg from "../assets/featuredpropertiesimg.png";
import hoteldescimg from "../assets/hoteldescimg.png";
import hoteldetailsmainimg from "../assets/hoteldetailsmainimg.png";
import hoteldetailopenimg from "../assets/hoteldetailspageopenimg.png";
import weatherapp1 from "../assets/weatherapp1.png";
import weatherapp2 from "../assets/weatherapp2.png";
import weatherapp3 from "../assets/weatherapp3.png";
import movielandmain from "../assets/movielandmain.png";
import movielandsearch from "../assets/movielandsearch.png";
import movielanddetails from "../assets/movielanddetails.png";
import movielanddetails2 from "../assets/movielanddetails2.png";
import movielanddetails3 from "../assets/movielanddetails3.png";
import movielandfilter from "../assets/movielandfilter.png";

const Projects = () => {
  const projectBookingApp = [
    {
      title: "Booking App",
      description: "",
      imgUrl: bookingapp,
    },
    {
      title: "SearchBar",
      description:
        "You can search a property based on entered city, date and details",
      imgUrl: searchbytype,
    },
    {
      title: "Explore",
      description: "You can see different places where you can book a hotel",
      imgUrl: exploreimg,
    },
    {
      title: "Featured",
      description: "You can see featured properties and their ratings",
      imgUrl: featuredpropertiesimg,
    },
    {
      title: "Search a hotel",
      description:
        "You can see hotels in entered location, change date of stay and filtr them by price",
      imgUrl: searchhotelimg,
    },
    {
      title: "Hotel Details Page",
      description: "You can see info about picked hotel",
      imgUrl: hoteldetailsmainimg,
    },
    {
      title: "Hotel gallery",
      description: "You can open gallery and view hotel photos",
      imgUrl: hoteldetailopenimg,
    },
    {
      title: "Hotel Details Page",
      description: "You can see info about picked hotel",
      imgUrl: hoteldescimg,
    },
    {
      title: "Select room",
      description: "You can see info about room and book it",
      imgUrl: selectroomimg,
    },
    {
      title: "Footer",
      description: "",
      imgUrl: footerimg,
    },
    {
      title: "Login Page",
      description: "",
      imgUrl: loginpageimg,
    },
  ];

  const projectWeatherApp = [
    {
      title: "Enter your location!",
      description:
        "You can enter location and based on that see weather conditions",
      imgUrl: weatherapp1,
    },
    {
      title: "See weather in the entered place!",
      description: "",
      imgUrl: weatherapp2,
    },
    {
      title: "See weather in the entered place!",
      description: "",
      imgUrl: weatherapp3,
    },
  ];

  const projectMovieLand = [
    {
      title: "MovieLand",
      description: "",
      imgUrl: movielandmain,
    },
    {
      title: "SearchBar",
      description: "You can search movie by entering its name!",
      imgUrl: movielandsearch,
    },
    {
      title: "Movie Filter",
      description: "You can filter movies by categories/types!",
      imgUrl: movielandfilter,
    },
    {
      title: "Movie Details",
      description:
        "You can click on movie and see details about it (seasons, description, rating and cast)!",
      imgUrl: movielanddetails,
    },
    {
      title: "Movie Details",
      description:
        "You can click on movie and see details about it (seasons, description, rating and cast)!",
      imgUrl: movielanddetails3,
    },
    {
      title: "Movie Details",
      description:
        "You can click on movie and see details about it (seasons, description, rating and cast)!",
      imgUrl: movielanddetails2,
    },
  ];
  return (
    <section className="project" id="project">
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Projects</h2>
                <p>
                  Some of my projects, you can also check them out on my GitHub!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Booking App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Movie Land</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Weather App</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projectBookingApp.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projectMovieLand.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projectWeatherApp.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </section>
  );
};

export default Projects;
