import React from 'react';
import styles from './../../css/conduit-spinner.css';

export default class ConduitSpinner extends React.Component {
  render() {
    return (
      <div className="spinner-container">
        <svg className="visible" viewBox="-10 -10 50 50" height="50" width="50"
           xmlns="http://www.w3.org/2000/svg">
          <path id="conduit-mark cloud1" className="conduit-mark" fill="#eeeeee"
              d="M26.23,25.27a1.13,1.13,0,0,0-.73.26,13.62,13.62,0,1,1,0-19.25h0a1.14,1.14,0,0,1-.07,1.51,1.15,1.15,0,0,1-1.63,0h0a11.34,11.34,0,1,0,.08,16.13,3.39,3.39,0,0,0,0-4.81,3.42,3.42,0,0,0-4.84,0,4.51,4.51,0,1,1,0-6.43h0a1.21,1.21,0,0,0,.72.26A1.14,1.14,0,0,0,21,11.78a1.17,1.17,0,0,0-.23-.72h0a6.83,6.83,0,1,0,0,9.66,1.12,1.12,0,0,1,1.6,0,1.15,1.15,0,0,1,0,1.62h0A9.07,9.07,0,1,1,22.21,9.4h0a3.41,3.41,0,0,0,4.91-4.72h0l-.06-.05,0,0h0a15.9,15.9,0,1,0,.08,22.52,1.07,1.07,0,0,0,.24-.71A1.12,1.12,0,0,0,26.23,25.27Z"/>
        </svg>
      </div>
    );
  }
}
