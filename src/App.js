import React from 'react';
import GridView from './components/gridView';

class App extends React.Component {
  getDetails() {

  };

  render() {
    return (
      <div className="ui container">
        <div className="ui vertical accordion">
          <a class="active title">
            Issues
            <i class="dropdown icon"></i>
          </a>
          <div class="active content">
            <GridView getPatientDetails={this.getDetails()}/>
          </div>
        </div>
      </div>
    )
  }
};

export default App;