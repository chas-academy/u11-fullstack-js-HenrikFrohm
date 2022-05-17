<!-- PROJECT DESCRIPTION-->
<br />
  <h3 align="center">Fightstories</h3>

  <p align="center">
     Fightstories is an hub for combat-sport fans around the world to share information- and news. Here you can check out and post the latest news, interviews and stats for each of the big stars of the sports. We welcome you to our community, where you can share your thoughts in the comments section and subscribe to your favorite fighters to get up to date on future events involving them.
    <br />  
    <a href="https://docs.google.com/document/d/1J2uC24e3qyB1vx0d1tDZspw5KQtstBlE/edit?usp=sharing&ouid=116450704019366372650&rtpof=true&sd=true"><strong>Requirement Specification »</strong></a>
    <br />
    <br />
    <a href="https://u11-fullstack-js-henrikfrohm.netlify.app/posts">View Demo (currently not working as intended)</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#requirement-specification">Requirement specification</a></li>
    <li><a href="#https://github.com/HenrikFrohm/u11-project/blob/master/LICENSE.md">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The goal of the task is to demonstrate my programming knowledge and skills to go from an idea and concept phase to a complete full-stack application in a limited timeframe.

This assignment should demonstrate understanding of full-stack application concepts, and how to use a RESTful API in node with JWT-based authentication with the MongoDB document database.

The Idea of the application is to provide users with a blog-like experience; where they can create an account, log in, create blog-posts, like/delete posts or just explore the collection of posts provided by search or through the pagination feature (exploring posts seperated by pages).

### Built With

Application is created using the MERN-stack, which includes:

- [MongoDB]()
- [Express]()
- [React]()
- [Node.js]()

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Register an account on https://mongodb.com and create a MongoDB cluster.

Create a project and a free shared database, then click on Connect and choose "Connect your application".
Set Driver is set to Node.js.

Then save the URI string, and replace the password with a password of your choice, and replace myFirstDatabase with the name you want your database to have.

2. Clone the repo
   ```sh
   git clone https://github.com/chas-academy/u11-fullstack-js-HenrikFrohm
   ```
3. Install npm packages for both the front- and backend. Frontend files are located in the /frontend folder. Backend files are located in the root folder.
   ```sh
   npm install
   ```
4. Run the React Application in /frontend folder and the Node.js server in the /backend folder with the following command:
   ```sh
   npm start
   ```
5. In the root folder, if not already created, create a .env file. In the .env file, add 3 environment variables:
   ```sh
   PORT
   CONNECTION_URL
   ```
6. Set the PORT to a port of your choice. By standard it will be set to 5000. Set the CONNECTION_URL to the URI string you recievied from your MongoDB cluster.

<!-- REQUIREMENT SPECIFICATION -->

### Requirement specification

The requirement specification is provided in a separate document. It contains a summary, users forms/personas/stories, requirements, a sitemap, a wireframe and routes for the application.

Link to the requirement specification:

<a href="https://docs.google.com/document/d/1J2uC24e3qyB1vx0d1tDZspw5KQtstBlE/edit?usp=sharing&ouid=116450704019366372650&rtpof=true&sd=true"><strong>Requirement Specification »</strong></a>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

   ```sh
   Author: Henrik Frohm
   ```
   ```sh
   Email: henrik.frohm@chasacademy.se
   ```
   ```sh
   Linkedin: https://www.linkedin.com/in/henrik-frohm-7ab764207
   ```
