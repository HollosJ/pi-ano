import A from './assets/notes/a5.mp3';
import CS from './assets/notes/c-5.mp3';
import C from './assets/notes/c5.mp3';
import DS from './assets/notes/d-5.mp3';
import D from './assets/notes/d5.mp3';
import E from './assets/notes/e5.mp3';
import FS from './assets/notes/f-5.mp3';
import F from './assets/notes/f5.mp3';
import GS from './assets/notes/g-5.mp3';
import G from './assets/notes/g5.mp3';

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
