
import './Spinner.scss';

import React from 'react';

type SpinnerProps = {
  height?: string,
}

const Spinner = ({height}:SpinnerProps):JSX.Element => {
  return (
    <div style={{ height }} className="spinner">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;