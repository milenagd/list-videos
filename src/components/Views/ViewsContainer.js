import React, { Component } from "react";
import PropTypes from "prop-types";
import { getStatistics } from "services/youtube";
import Views from "./Views";

class ViewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCount: 0
    };
  }
  async componentDidMount() {
    const viewCount = await getStatistics(this.props.id);
    this.setState({ viewCount });
  }
  render() {
    return <Views viewCount={this.state.viewCount} />;
  }
}

ViewsContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default ViewsContainer;
