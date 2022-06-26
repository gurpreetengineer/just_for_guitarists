const fs = require('fs');

const single_string_notes_generator = (string_number, list_of_frets, no_of_frets) => {
  const note_list_for_single_string = [];
  const note_strings_start = [8, 1, 6, 11, 3, 8];
  let notes_index_follower = note_strings_start[string_number];

  for (let i = 0; i < no_of_frets; i++) {
    note_list_for_single_string.push({
      column_index: i + 1,
      note_name: list_of_frets[notes_index_follower],
    })
    notes_index_follower++;
    if (notes_index_follower === 12) {
      notes_index_follower = 0;
    }
  }
  return note_list_for_single_string
}

const guitar_notes_generator = () => {
  const list_of_frets = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
  const base_notes_list = ['E', 'A', 'D', 'G', 'B', 'E'];
  const no_of_frets = 12;

  const final_json = [];
  for (let string_number in base_notes_list) {
    final_json.push({
      string_name: base_notes_list[string_number],
      row_index: Number(string_number) + 1,

      notes: single_string_notes_generator(string_number, list_of_frets, no_of_frets)
    })
  }
  return final_json;
}

const guitar_notes = guitar_notes_generator()

fs.writeFile('../json/guitar_notes.json', JSON.stringify(guitar_notes), err => {
  if (err) throw err;
})