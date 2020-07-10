import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StackedBar = ({ data }) => {
  const { confirmed, recovered, deceased, migrated } = data.total;
  const active = confirmed - recovered - deceased - migrated;

  const activeNow = (active * 100) / confirmed;
  const recoveredNow = (recovered * 100) / confirmed;
  const deceasedNow = (deceased * 100) / confirmed;

  const Bar = () => {
    return (
      <ProgressBar className="progress-height">
        <ProgressBar title="active" className="active-style" now={activeNow} label={`${activeNow.toFixed(2)}%`} key={1} />
        <ProgressBar title="recovered" className="recovered-style" now={recoveredNow} label={`${recoveredNow.toFixed(2)}%`} key={2} />
        <ProgressBar title="deceased" className="deceased-style" now={deceasedNow} label={`${deceasedNow.toFixed(2)}%`} key={3} />
      </ProgressBar>
    );
  }
  return (
    <div className="StackedBar">
      {Bar()}
    </div>
  );
}

export default StackedBar;