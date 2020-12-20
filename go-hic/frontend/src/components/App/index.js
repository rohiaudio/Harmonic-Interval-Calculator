import React, { useState } from 'react';
import { Container, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

import './index.css';

const App = () => {
  const [fundamental, setFundamental] = useState(0);

  return (
    <>
      <Container fluid>
        <center>
          <InputGroup className="mb-3 mr-sm-2">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Fundamental</InputGroupText>
            </InputGroupAddon>
            <Input
              id="fundamental"
              max="24000"
              min="1"
              onChange={(e) => setFundamental(e.target.value)}
              placeholder="430"
              step="10"
              type="number"
            />
          </InputGroup>
        </center>
      </Container>
      <div className="container text-center">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Harmonic</th>
              <th scope="col">Frequency</th>
              <th scope="col">Interval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">3<sup>rd</sup></th>
              <th scope="col"><span id="3rd">{(fundamental > 0) ? fundamental * 3 : '-'}</span> Hz</th>
              <th scope="col">Perfect 5<sup>th</sup><br /><small>Above 1<sup>st</sup> octave</small></th>
            </tr>
            <tr>
              <th scope="col">5<sup>th</sup></th>
              <th scope="col">
                <span id="5th">{(fundamental > 0) ? fundamental * 5 : '-'}</span>
                {' '}
                Hz
              </th>
              <th scope="col text-left">
                Major 3<sup>rd</sup>
                <br />
                <small>Above 2<sup>nd</sup> octave</small>
              </th>
            </tr>
            <tr>
              <th scope="col">6<sup>th</sup></th>
              <th scope="col"><span id="6th">{(fundamental > 0) ? fundamental * 6 : '-'}</span> Hz</th>
              <th scope="col">Minor 3<sup>rd</sup><br /><small>Above 2<sup>nd</sup> octave</small></th>
            </tr>
            <tr>
              <th scope="col">7<sup>th</sup></th>
              <th scope="col"><span id="7th">{(fundamental > 0) ? fundamental * 7 : '-'}</span> Hz</th>
              <th scope="col">Minor 7<sup>th</sup><br /><small>Above 2<sup>nd</sup> octave</small></th>
            </tr>
            <tr>
              <th scope="col">10<sup>th</sup></th>
              <th scope="col"><span id="10th">{(fundamental > 0) ? fundamental * 10 : '-'}</span> Hz</th>
              <th scope="col">Major 3<sup>rd</sup><br /><small>Above 3<sup>rd</sup> octave</small></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
