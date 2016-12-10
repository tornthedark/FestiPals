import React, { Component } from 'react';
import Acts from './Acts.js';

export default class ActsSorter extends Component {
  render() {

    return (
      <div>

        <div className="container">

          <a href="#" className="btn btn-default openall">open all</a> <a href="#" className="btn btn-default closeall">close all</a>
          <hr />

          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                  Collapsible Group Item #1
                  </a>
                </h4>
              </div>
              <div id="collapseOne" className="panel-collapse collapse in">
                <div className="panel-body">
                  ONe Anim pariatur cliche reprehenderit, enim eiusmod high life
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    Collapsible Group Item #2
                    </a>
                  </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse">
                <div className="panel-body">
                Two Anim pariatur cliche reprehenderit,
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    Collapsible Group Item #3
                  </a>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse">
                <div className="panel-body">
                Three Anim pariatur cliche reprehenderit,
                </div>
              </div>
            </div>


  
            </div>
          </div>
        </div>
      </div>
    );
  }
}
