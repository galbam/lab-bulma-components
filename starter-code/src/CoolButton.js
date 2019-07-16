import React, { Component } from 'react'
import "./style.css";

class CoolButton extends Component {   

     formatClassName(){
          const buttonInfo = {
               isActive: 'is-active',
               isBlack: 'is-black',
               isCentered: 'is-centered',
               isDanger: 'is-danger',
               isDark: 'is-dark',
               isFocused: 'is-focused',
               isGrouped: 'is-grouped',
               isHovered: 'is-hovered',
               isInfo: 'is-info',
               isInverted: 'is-inverted',
               isLarge: 'is-large',
               isLight: 'is-light',
               isLink: 'is-link',
               isLoading: 'is-loading',
               isMedium: 'is-medium',
               isOutlined: 'is-outlined',
               isPrimary: 'is-primary',
               isRight: 'is-right',
               isRounded: 'is-rounded',
               isSelected: 'is-selected',
               isSmall: 'is-small',
               isStatic: 'is-static',
               isSuccess: 'is-success',
               isText: 'is-text',
               isWarning: 'is-warning',
               isWhite: 'is-white',
          }          

          let result = "button ";

          let obj;
          for (obj in this.props){
               console.log(obj);
               if (buttonInfo[obj]){
                    result += buttonInfo[obj] + " ";
               }
          }
          
          if (this.props.className){
               result += this.props.className + " ";
          }
          
          return `${result}`;
     }

     render() {
          
          return (
               <div>
                    <button className={this.formatClassName()}>{this.props.children}</button>
               </div>
          )
     }
}

export default CoolButton
