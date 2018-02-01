import React, { Component } from "react";
import Link from "gatsby-link";

import { siteMetadata } from "../../gatsby-config";
import ProfilePic from "../assets/avatar.png";

import About from "../components/About";
import Projects from "../components/Project";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";

class IndexPage extends Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div style={{ background: "#fff", padding: "2rem .5rem", border: "1px solid #ddd" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexFlow: "row-reverse wrap",
            margin: "auto"
          }}
        >
          <div className="avatar" style={{ flexDirection: "column" }}>
            <img
              style={{
                width: "250px",
                borderStyle: "solid",
                borderColor: "#dfdbe5",
                borderRadius: "50%"
              }}
              src={ProfilePic}
              alt="avatar"
            />
            <div
              style={{ fontSize: "32px", height: "50px", maxWidth: "350px" }}
            >
            </div>
          </div>
          <div style={{ flexDirection: "column" }}>
            <h1>{siteMetadata.author}</h1>
            <h3>{siteMetadata.description}</h3>
            <About />
            <Projects projectEdges={projectEdges} />
            <Skills />
            <Before />
            <Education />
            <Favorite />
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export const rootQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            path
            ProductHuntLink
            BlogPost
            Revenue
          }
        }
      }
    }
  }
`;

export default IndexPage;
