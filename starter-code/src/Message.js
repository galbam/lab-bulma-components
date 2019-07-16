import React, { Component } from 'react';

let data = {
     isInfo: "is-info",
     isDark: "is-dark",
     isPrimary: "is-primary",
     isLink: "is-link",
     isSuccess: "is-success",
     isWarning: "is-warning",
     isDanger: "is-danger"
};

class Message extends Component {
     constructor(props) {
          super(props);

          let classString = "message ";
          Object.keys(props).forEach(prop => {
               if (data[prop]) {
                    classString += data[prop] + " ";
               }
          });

          this.classString = classString;
     }

     render() {
          return (
               <div style={{maxWidth: "50%"}}>
                    
                    <article className={this.classString}>
                         <div className="message-header">
                              <p>{this.props.title}</p>
                              <button className="delete" aria-label="delete"></button>
                         </div>
                         <div className="message-body">
                              {this.props.children}
                         </div>
                    </article>
               
               </div>
          )
     }
}

export default Message;
