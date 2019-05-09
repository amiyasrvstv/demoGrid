import React from 'react';
import './gridView.css';


class GridView extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  };
  render() {
    return(
      <div className="wrapper">
        <div className="box a">col 1</div>
        <div className="box b">col 2</div>
        <div className="box c">col 3</div>

        <div className="row">
          <div className="box d">short data</div>
          <div className="box e">a really long piece of data</div>
          <div className="box f">short data</div>
        </div>

        <div className="row">
          <div className="box d">short data</div>
          <div className="box e">a really long piece of data</div>
          <div className="box f">short data</div>
        </div>
      </div>
    )
  };
};

export default GridView;