import React, { Component } from 'react';
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class Signup extends Component {
     render() {
          return (
               <div>
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
                    <FormField label="email" type="text" placeholder="e.g alexsmith@gmail.com"/>
                    <FormField label="password" type="password"/>
                    <CoolButton isPrimary>Submit</CoolButton>
               </div>
          )
     }
}

export default Signup;
