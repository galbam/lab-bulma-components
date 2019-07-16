import React, { Component } from 'react';
import Message from "./Message";

 class Container extends Component {
     render() {
          return (
               <div className="container">
                    <Message title="Hello World">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eaque veniam necessitatibus dignissimos at facere quos aspernatur ab ipsum pariatur velit, culpa accusamus veritatis voluptates dolores molestias iste? Odio, nam?</Message>
               </div>
          )
     }
}

export default Container
