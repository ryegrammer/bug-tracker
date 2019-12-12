import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TimeTracker />
      <IssueForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
class IssueForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="issue_title">Issue Title:</label>
          <input type="text" id="issue_title" value="Enter your word here."></input><br />
          <label for="issue_text">Issue:</label>
          <input type="text" id="issue_text" value="Describe your problem"></input><br />
          <label for="created_by">Created By:</label>
          <input type="text" id="created_by" value="Enter your word here."></input><br />
          <label for="assigned_to">Request your worker:</label>
          <div>
            <select id="assigned_to" name="solutions">
              <option value="RA">Ryan Adams</option>
              <option value="Hercules">Hercules</option>
              <option value="MCGiver">MacGiver</option>
              <option value="Einstein">Einstein</option>
              <option value="Aristotle">Aristotle</option>
              <option value="Elon">Elon M.</option>
            </select>
          </div>
          <label for="status_text" id="dropdown-label">Status</label>
          <div>
            <select id="status_text" name="status_text">
              <option value="A1">Pre-Induction Screening</option>
              <option value="M1">Awaiting Work In Shop</option>
              <option value="IW">Awaiting Work - Backlog</option>
              <option value="M4">Awaiting Work - Off Shift</option>
              <option value="M8">Awaiting Work - Other Shop</option>
              <option value="M9">Awaiting Funding</option>
              <option value="IW">IW - In Work</option>
              <option value="WP">AWP - Awaiting Parts</option>
              <option value="JC">JC - Job Complete</option>
            </select>
          </div>
        </form>
      </div>
    );

  };
};
/* Header uses const as oppose to class, 
so it can't use lifecycle events or state*/
const Header = () => {
  return (
    <div>
      <h1>Bug Tracker</h1>
    </div>
  );
};
class TimeTracker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visibility: true,
      time: new Date()
    };
    this.clickForViz = this.clickForViz.bind(this);
  }
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      time: new Date()
    });
  }
  clickForViz() {
    this.setState (state => ({
      visibility: !state.visibility
    }));
  }
  render(){
    if (this.state.visibility){
      return (
      <div>
        <button onClick={this.clickForViz}>Clock Block</button>
        <h2>Time Tracker</h2>
          <h3>The time on deck is {this.state.time.toLocaleTimeString()}</h3>        
      </div>
      );
    }else{
      return (
        <div>
          <button onClick={this.clickForViz}>Click for Clock</button>
        </div>
      );
    }
    
  };
};
/*const Clock = (props) => {
  return (<p>{props.date}</p>
    );
};<Clock date={Date()} />*/
export default App;
