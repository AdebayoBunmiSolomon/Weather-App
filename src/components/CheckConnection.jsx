/** @format */

import React from 'react';
import { Detector } from 'react-detect-offline';
import img from '../images/angry1.gif';

function CheckConnection(props) {
  //const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <div style={{ paddingTop: '10px', textAlign: 'center' }}>
              <img
                src={img}
                alt='Network disconnection'
              />
              <h1 style={{ marginBottom: '5px' }}>
                No Connection <i className='fa fa-wifi'></i>
              </h1>
              <h4 style={{ margin: '0' }}>
                Please check your internet connection
              </h4>
            </div>
          )
        }
      />
    </>
  );
  //};
}

export default CheckConnection;
