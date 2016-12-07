import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
  render() {

      return (
     <div>

              <div className="container-fluid">
                  <div className="page-header">
                    <div className="container text-center">
                            <h1>Log In</h1>
                    </div>
                  </div>
              </div>

              <div className="container">
                              <div className="row">
                                  <div className="col-xs-12 col-sm-6 col-md-offset-2">
                                      <h4>Enter your information below:</h4>
                                          <p><small>Don&rsquo;t have an account yet?</small></p>
                                          <Link to="signUp"><p><small>Sign up now</small></p></Link>
                                   </div>
                               </div>
                               <br />

                               <div className="row">
                                   <div className="col-xs-12 col-sm-6 col-md-offset-2">
                                     <form>

                                              <div className="form-group">
                                                <label for="inputEmailLogIn">E-mail</label>
                                                <input type="email" className="form-control" id="inputEmailLogIn" placeholder="mikkelsen@gmail.com"></input>
                                              </div>
                                              <div className="form-group">
                                                <label for="inputPasswordLogIn">Password</label>
                                                <input type="password" className="form-control" id="inputPasswordLogIn" placeholder="****"></input>
                                              </div>

                                              <Link to="acts"><button type="button" className="btn btn-primary btn-lg btn-block"> Log In</button></Link>
                                              
                                    </form>

                                </div>
                                </div>

            </div>

  </div>


      )
  }
}
