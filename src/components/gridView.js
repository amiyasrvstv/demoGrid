import React from 'react';
import moment from 'moment';
import './gridView.css';


class GridView extends React.Component {
  state = {
    apiData: [
      {
        description: 'Enroll in Care Coordination',
        date: '10/08/2018',
      },
    ]
  };
  constructor(props) {
    super(props);
  };
  createTableData(apiData) {
    return (
      <div className="row">
          <div className="box d">{apiData.description}</div>
          <div className="box e">{apiData.date}</div>
      </div>
    );
  }
  render() {
    return(
      <div className="wrapper">
        <div className="box a">Description</div>
        <div className="box b">Earliest Target Completion Date</div>
        {this.state.apiData.map((data) => this.createTableData(data))}
      </div>
    )
  };
};

export default GridView;