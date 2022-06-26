import React, { Fragment } from 'react';

const GuitarType = () => {
  const types_of_guitar = ['classical', 'acoustic', 'electrical'];

  const onMouseOutHandler = event => {
    console.log('omouser', event.target.value);
  }

  return (
    <Fragment>
      <div>What's the type of your guitar?</div>
      <select>
        {types_of_guitar.map((type) => (
          <option>{type}</option>
        ))}
      </select>
      <div>How many frets does your guitar have?</div>
      <select onMouseOut={onMouseOutHandler}>
        {Array.from(
          {
            length: 13,
          },
          (undefined_but_necessary, start) => start + 18
        ).map((fret) => (
          <option key={fret} value={fret}>
            {fret}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default GuitarType;
