// Well, we don't need it as of now, so not using it.
// Instead we can reuse guitar_notes_generator() to pass dynamic guitar neck length to generate necessary frets.

const dynamicFretsGenerator = (no_of_frets = 9) => {
  const alphabet_ASCII_start = 65, octave_length_one_less = 7;
  const culminated_frets_list = [];

  // Added condition twice because we are pushing in array twice. 
  // And we need to check before 1st (line 8) and before 2nd (line 20)
  for (let i = 0; i < no_of_frets && culminated_frets_list.length < no_of_frets; i++) {
    let dynamic_subtration =
      i !== 0
        ? Math.floor(i / octave_length_one_less) * octave_length_one_less
        : 0;
    let current_fret = alphabet_ASCII_start + i - dynamic_subtration;

    //convert the char code to string (Alphabets)
    culminated_frets_list.push(String.fromCharCode(current_fret));
    if (String.fromCharCode(current_fret) === 'B' || String.fromCharCode(current_fret) === 'E') {
      continue;
    }

    if (culminated_frets_list.length >= no_of_frets) break;
    culminated_frets_list.push(String.fromCharCode(current_fret) + '#');
  }
  return culminated_frets_list;
}

const culminated_frets = dynamicFretsGenerator()
console.log(culminated_frets)