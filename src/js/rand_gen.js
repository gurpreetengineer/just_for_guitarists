const guitar_notes = require('../json/guitar_notes.json');

const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const questions_generator = (no_of_questions = 10) => {
  const no_of_strings = 6, no_of_frets = 12;
  const questions_list = [];

  console.log(guitar_notes[4].notes[3].note_name, no_of_questions)
  for (let q in [...Array(no_of_questions + 1).keys()]) {
    const string_number = randomIntFromInterval(0, no_of_strings - 1);
    const fret_number = randomIntFromInterval(0, no_of_frets - 1);
    questions_list.push({
      "question_no": Number(q) + 1,
      string_number: string_number + 1,
      fret_number: fret_number + 1,
      "right_answer": guitar_notes[string_number].notes[fret_number].note_name
    })
  }
}

questions_generator()