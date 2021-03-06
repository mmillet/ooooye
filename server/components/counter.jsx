/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
  getInitialState : function(){
    return {
      count : this.props.count ? this.props.count : 0
    };
  },
  onClick : function(event) {
    this.setState({
      count : this.state.count + 1
    });
  },
  render : function() {
    return (
      <div onClick={this.onClick}>
        Count (Click to increment): {this.state.count}
      </div>
    )
  }
});