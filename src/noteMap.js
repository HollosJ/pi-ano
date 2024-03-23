import C from './assets/notes/c4.mp3';
import CS from './assets/notes/c-4.mp3';
import D from './assets/notes/d4.mp3';
import DS from './assets/notes/d-4.mp3';
import E from './assets/notes/e4.mp3';
import F from './assets/notes/f4.mp3';
import FS from './assets/notes/f-4.mp3';
import G from './assets/notes/g4.mp3';
import GS from './assets/notes/g-4.mp3';
import A from './assets/notes/a4.mp3';

const noteMap = new Map();

noteMap.set('0', new Audio(C));
noteMap.set('1', new Audio(CS));
noteMap.set('2', new Audio(D));
noteMap.set('3', new Audio(DS));
noteMap.set('4', new Audio(E));
noteMap.set('5', new Audio(F));
noteMap.set('6', new Audio(FS));
noteMap.set('7', new Audio(G));
noteMap.set('8', new Audio(GS));
noteMap.set('9', new Audio(A));

export default noteMap;
