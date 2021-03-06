/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({displayName: "exports",
  getInitialState : function(){
    return {
      count : this.props.count ? this.props.count : 0
    };
  },
  onClick : function(event){
    this.setState({
      count : this.state.count + 1
    });
  },
  render : function() {
    console.log(123);
    return (
      React.createElement("div", {onClick: this.onClick}, 
        "Count (Click to increment): ", this.state.count
      )
    )
  }
});