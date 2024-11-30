import React from "react"
import Associate from "./components/associate"
import Award from "./components/award"
import Blank from "./components/blank"
import Blogs from "./components/blogs"
import Client from "./components/client"
import Discover from "./components/discover"
import Feature from "./components/feature"
import Grow from "./components/grow"
import Header from "./components/header"
import Never from "./components/never"
import Offer from "./components/offer"
import Platform from "./components/platform"
import Success from "./components/success"
import Ultimate from "./components/ultimate"
import Wedding from "./components/wedding"

function App() {
  
  return (
    <div>
      <Header />
      <Platform />
      <Associate />
      <Feature />
      <Discover />
      <Blogs />
      <Wedding />
      <hr />
      <Offer />
      <br />
      <hr />
      <Client />
      <hr />
      <br />
      <br />
      <br />
      <Award />
      <Success />
      <Ultimate />
      <Blank />
      <Grow />
      <Never />
    </div>
  )
}

export default App
