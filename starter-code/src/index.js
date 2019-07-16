import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Signup from "./Signup";
import Container from "./Container";

let elements = (
     <div>
          <Navbar />
          <br/>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <div className="btn-section">
               <CoolButton isSmall isDanger className="is-rounded my-class" >Login</CoolButton>
               <CoolButton isSmall isSuccess >Signup</CoolButton>
          </div>
          <br/>
          <Signup />
          <br/>
          <Container/>
     </div>
);

ReactDOM.render(
     elements,
     document.getElementById('root')
);