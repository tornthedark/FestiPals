import React, { Component } from 'react';
import './App.css';


class Artist extends Component {
  render() {
    return (
      <div className="thisthing">
          <div className="Body">
         </div>
         <h2>ReactJS is not so hard anymore haha</h2>
         <form>
                Name:
                <input type="text" name="name" />
                <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Artist;
