var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Main = React.createClass({
  // this.state = {
  //   location: '',
  //   temp: ''
  // },
  render: function(){
    return(
      <div>
        <input placeholder="Location" onChange={(e) => this.setState({location: e.target.value})}/>
        <button type="submit" onClick={(e) => this.submit(e)}>Submit</button>
      </div>
    )
  },
  submit: function(e){
    return(
      $.get(this.props.source + this.state.location, function(){
        console.log(this.props.source + this.state.location);
      }.bind(this))
    )
  }
});

var weatherDisplay = React.createClass({
render: function(){
    return(
      <div className="weatherComp">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
});

ReactDOM.render(<Main source='https://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'));