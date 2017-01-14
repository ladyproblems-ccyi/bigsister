import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/startupActions';
import StartupFrame from '../components/StartupFrame';

class StartupContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    /* is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
    */
  }

  render() {
    return (
        <StartupFrame/>
    );
  }
}


function mapStateToProps(state) {
    return {
      profile: state.profile
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
  }

StartupContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

StartupContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartupContainer);
