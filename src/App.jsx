import React from "react";
import LandingPage from "./component/landingPage/landingPage";
import Customer from "./component/Customers/Customer";
import Folder from "./component/folder/folder";
import Text from "./component/text/text";
import Ready from "./component/Ready/Ready";
import FolderTwo from "./component/foldertwo/foldertwo";
import Testimonials from "./component/testimonials/testimonials";
import Banner from "./component/banner/Banner";
import Questions from "./component/questions/questions";
import AnotherComp from "./component/anotherComp/anothercomp";

import Footer from "./component/footer/footer";

function App() {
  return (
    <div>
      <LandingPage />
      <Customer />
      <Folder />
      <Text />
      <Ready />
      <FolderTwo />
      <Testimonials />
      <Banner />
      <Questions />
      <AnotherComp />
      <Footer />
    </div>
  );
}

export default App;
