import React, { Component } from 'react';
import PageHeader from './PageHeader.js';

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
      <PageHeader icon="fa fa-user" title="Your Profile" description="(Edit or add some imformation about yourself.)"/>
        <div className="container">
        <p>First Name: "firstname"</p>
        <p>Last Name: "lastname"</p>
        <p>Email: "email@email.com"</p>

        <button type="button" className="btn btn-default btn-block" data-toggle="modal" data-target="#changeNameModal">Change Name</button>
        <button type="button" className="btn btn-default btn-block" data-toggle="modal" data-target="#changePasswordModal">Change Password</button>
        <button type="button" className="btn btn-danger btn-block" data-toggle="modal" data-target="#deleteAccountModal">Delete Account</button>

        <h1>Pending Requests</h1>
        <p># pending pal requests</p>
        <p># pending concert invite</p>

        <div id="changeNameModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <h1>Change Name</h1>

                  </div>
                  <div className="modal-footer">
                    <div type="button" className="btn btn-btn-danger" data-dismiss="modal">Change Name</div>
                    <div type="button" className="btn btn-default" data-dismiss="modal">Close</div>
                  </div>
                </div>
              </div>
        </div>

        <div id="changePasswordModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <h1>Change Password</h1>

                  </div>
                  <div className="modal-footer">
                    <div type="button" className="btn btn-btn-danger" data-dismiss="modal">Change Password</div>
                    <div type="button" className="btn btn-default" data-dismiss="modal">Close</div>
                  </div>
                </div>
              </div>
        </div>

        <div id="deleteAccountModal" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <h1>Delete Account</h1>
                    <p>Are you sure you want to delete your account?</p>
                    <p>This Action will delete all your saved content cannot be undone</p>
                    </div>
                  <div className="modal-footer">
                    <div type="button" className="btn btn-btn-danger" data-dismiss="modal">Delete</div>
                    <div type="button" className="btn btn-default" data-dismiss="modal">Close</div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      </div>
    );
  }
}
