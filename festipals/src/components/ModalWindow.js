import React, { Component } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

const ModalWindow = React.createClass({

    getInitialState() {
      return { showModal: false };
    },
    close() {
      this.setState({ showModal: false });
    },
    open() {
      this.setState({ showModal: true });
    },

    render() {
      const { title } = this.props;

      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
      const tooltip = (
        <Tooltip id="modal-tooltip">
          wow.
        </Tooltip>
      );

        return (
          <div>
            <Button
              bsStyle="primary"
              bsSize="large"
              onClick={this.open}
            block>
              {this.props.title} Information
            </Button>

            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{this.props.content}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
              </Modal.Footer>

            </Modal>
          </div>
        );
      }
    });

    export default ModalWindow;
