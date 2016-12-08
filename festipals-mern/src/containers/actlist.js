import React, {Component} from 'react';
import  {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectAct} from '../actions/index';

class ActList extends Component {

  createListItems() {
    return this.props.acts.map((act) => {
      return (
        <li
        key={act.id}
        onClick={() => this.props.selectAct(act)}
        >
        <h1>{act.title}</h1>
        </li>
      );
    });
  }

  render() {
    return(
        <ul>
          {this.createListItems()}
        </ul>
      );
  }
}

function mapStateToProps(state) {
  return {
    acts: state.acts
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAct: selectAct
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ActList);
