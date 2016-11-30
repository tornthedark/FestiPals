import React, { Component } from 'react';

export default class SignUpForm extends Component {

  render() {
    return (
      <div>
      <div className="Container-fluid">
      <div className="row">
          <div className="col-xs-12">
            <PageHeader icon="fa fa-info" title="Sign Up" description="(Sign up for FestiPals)"/>
          </div>          
          <form classname="form-inline">
            <div className="form-group">
              <label for="inputFirstName">First Name</label>
              <input type="text" className="form-control" id="inputFirstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label for="inputLastName">Last Name</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label for="inputEmail">Email</label>
              <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="inputRepeatPassword">Repeat Password</label>
              <input type="password" className="form-control" id="inputRepeatPassword" placeholder="Repeat Password" />
            </div>
            <div className="form-group">
              <h3>Prove you are human</h3>
              <div><img src="http://placehold.it/350x150" />
              </div>
            </div>
            <button type="submit" className="btn btn-default btn-block">Sign Up</button>
          </form>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
