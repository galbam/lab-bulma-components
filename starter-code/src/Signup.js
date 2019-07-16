import React, { Component } from 'react';
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from "./Message";
import Container from "./Container";
import Navbar from "./Navbar";

class Signup extends Component {
     render() {
          return (
               <div>
                    <Container>
                         <Navbar />
                         <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
                         <FormField label="email" type="text" placeholder="e.g alexsmith@gmail.com"/>
                         <FormField label="password" type="password"/>
                         <div className="btn-section">
                              <CoolButton isSmall isDanger className="is-rounded my-class" >Login</CoolButton>
                              <CoolButton isSmall isSuccess >Signup</CoolButton>
                         </div>
                         <br/>
                         <Container>
                              <Message isPrimary title="Hello World!">Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Pellentesque risus mi</strong>.</Message>
                         </Container>
                    </Container>
               </div>
          )
     }
}

export default Signup;
