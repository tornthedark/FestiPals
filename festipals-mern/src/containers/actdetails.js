import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActDetails extends Component {

  render() {
    if(!this.props.act) {
      return( <h1>Select an Act</h1>);
    }

    return (
      <div>
        <h1>{this.props.act.title}</h1>
        <h1>{this.props.act.stage}</h1>
        <h1>{this.props.act.genre}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    act: state.activeAct
  };
}

export default connect(mapStateToProps)(ActDetails);
