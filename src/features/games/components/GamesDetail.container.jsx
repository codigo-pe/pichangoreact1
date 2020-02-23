import React from "react";

class GamesDetail extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", this.props)
  }

  componentDidUpdate() {
    console.log("props", this.props)
  }

  render() {

    return (
      <div>
        GamesDetail {this.props.match.params.id}
      </div>
    )
  }
}

export {
  GamesDetail
}