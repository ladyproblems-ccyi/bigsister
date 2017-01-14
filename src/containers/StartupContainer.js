import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/startupActions';
import StartupFrame from '../components/StartupFrame';
import uuid from 'uuid';
import R from 'ramda';

class StartupContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.searchProfiles = this.searchProfiles.bind(this);

    this.state = {
      profiles: props.profiles,
      original: props.profiles
    };
  }

  componentDidMount() {
    /* is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
    */
  }


  searchProfiles(profileQuery){

    let filterByTags = R.curry((tags, profile) => {
      return tags.some(tag => profile.tags.includes(tag));
    });

    console.log("searching with query " + profileQuery);

    let tags = profileQuery.split(/\s+/).map(tag => {
      return tag.replace('#', '');
    });

    console.log(tags);

    let filteredProfiles = R.filter(filterByTags(tags), this.props.profiles);
    console.log(filteredProfiles);

    filteredProfiles = filteredProfiles.length > 0 ? filteredProfiles : this.state.original;

    this.setState({
      profiles: filteredProfiles,
      original: this.state.original
    });

  }

  render() {
    let query;

    return (
        <StartupFrame>

          <input placeholder="Search Profiles"
            ref={node => {
              query = node;
            }}
            onChange={() => {
              this.searchProfiles(query.value);
            }}
          />
          {this.state.profiles.map(profile =>
            <ul key={uuid.v4()}>
              <li key={uuid.v4()}>name: {profile.name}</li>
              <li key={uuid.v4()}>email: {profile.email}</li>
            </ul>
          )}

        </StartupFrame>
    );
  }
}


function mapStateToProps(state) {
    return {
      profiles: state.profiles
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
  actions: PropTypes.object.isRequired,
  profiles: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartupContainer);
