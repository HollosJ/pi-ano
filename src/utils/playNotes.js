import noteMap from '../noteMap';
import Pi from '../pi';

export default function playNotes(score) {
  const notes = Pi.slice(0, score).split('');

  notes.forEach((note, index) => {
    setTimeout(() => {
      noteMap.get(note).cloneNode().play();
    }, index * 100);
  });
}
