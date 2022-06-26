import React, { useState } from 'react';
import questions_list from '../json/questions_list.json';

const Home = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const list_of_frets = [
    'select an answer',
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
  ];
  const regex_for_input = '^[A-Ga-g](?=.?[#])[A-Ga-g#]{1,1}$';
  const regex_for_input_with_sharp = '^[A-Ga-g](?=.?[#])[A-Ga-g#]{1,2}$';
  const onChangeHandler = (event, question) => {
    const user_answer = event.target.value;
    if (user_answer)
      setUserAnswer([
        {
          q_no: question.number,
          user_answer,
        },
      ]);
    // if(userAnswer === )
  };
  const onMouseOutHandler = (event, question) => {
    questions_list[question.number - 1].user_answer =
      event.target.value === list_of_frets[0]
        ? ''
        : event.target.value.toUpperCase();
    console.log('onMouseOutHandler', questions_list);
  };
  console.log('user', questions_list);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Question No.</th>
            <th>String Number</th>
            <th>Fret Number</th>
            <th>Enter your answer</th>
          </tr>
        </thead>
        <tbody>
          {questions_list.map((question) => (
            <tr key={question.number}>
              <td>{question.number}</td>
              <td>{question.string_number}</td>
              <td>{question.fret_number}</td>
              <td>
                {/* {console.log('===', questions_list)}
                <input
                  value={userAnswer[question.number]?.user_answer}
                  maxLength="2"
                  pattern="[a-gA-G]*"
                  onKeyDown={(event) => {
                    console.log();
                    return /[A-Ga-g]/i.test(event.key);
                  }}
                  onChange={(event) => onChangeHandler(event, question)}
                  onMouseOut={(event) => onMouseOutHandler(event, question)}
                  style={{ textTransform: 'uppercase' }}
                ></input> */}
                <select
                  name="cars"
                  id="cars"
                  onMouseOut={(event) => onMouseOutHandler(event, question)}
                >
                  {list_of_frets.map((fret) => (
                    <option key={fret} value={fret}>
                      {fret}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
