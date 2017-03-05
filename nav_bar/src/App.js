import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  render() {
    let Menus = [
      "Menu",
      "About",
      "Services",
      "Portfolio",
      "Contact us"
    ]
    return (
      <div>
        {Menus.map((v, i) => {
          return <div key={i}><Link label={v}/></div>
        })}
      </div>

    )
  }
}
class Link extends Component {
  render() {
    const url = '/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return (
      <div>
      <a href={url}>
      {this.props.label}
      </a>
      <br/>
    </div>
    )
  }
}

export default Menu;
