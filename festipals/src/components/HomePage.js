import React, { Component } from 'react';
import '../css/HomePage.css';
import logo from '../img/roskildelogo.png';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {
    var loggedIn = true;

    return (
        <div>
            <div className="container-fluid">
                  <div className="page-header">
                    <div className="container text-center">
                              <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                                  <img className="img-responsive" alt="roskilde-festival-logo" src={logo} />
                              </div>

                                <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                                    <h1>FestiPals</h1>
                                </div>
                    </div>
                  </div>
            </div>

            <div className="container">
              { loggedIn
               ? <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-offset-3 text-center loggedIndiv">
                              <h4>Logged in as UserName</h4>
                         </div>
                         <div className="col-xs-12 col-sm-3 col-md-offset-3">
                               <Link to="acts"><button type="button" className="btn btn-default btn-lg btn-block"><i className="fa fa-music"></i> View all acts</button></Link>
                         </div>
                         <div className="col-xs-12 col-sm-3">
                               <Link to="/"><button type="button" className="btn btn-default btn-lg btn-block"><i className="fa fa-calendar"></i>  My schedule</button></Link>
                         </div>
                 </div>
                :  <div className="row">
                          <div className="col-xs-12 col-sm-3 col-md-offset-3">
                                <button type="button" className="btn btn-primary btn-lg btn-block">Log in</button>
                          </div>
                          <div className="col-xs-12 col-sm-3">
                                <button type="button" className="btn btn-primary btn-lg btn-block">Sign up</button>
                          </div>
                  </div>
              }

                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-offset-3">
                                <h1>What is Festipals?</h1>
                                <p>This is the website where you can make your own schedule for the Roskilde Festival. It helps you make your own timeschedule and see the concerts your friends are attending. Don&rsquo;t miss any of your acts.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
  }
}
