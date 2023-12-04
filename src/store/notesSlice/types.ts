export interface Note {
  name: string;
  tags: string[];
  text: string;
  id: string;
}

export type NoteList = Record<string, Note>;

export interface NoteState {
  noteList: NoteList;
  allTags: string[];
}
export enum target {
  NAME = 'name',
  TEXT = 'text',
}
export const LOCALSTORAGE_NOTES_KEY: string = 'notes_key';
// const initialState = [{ name: '1', id: '1', tags: ['test'], text: 'my first #test note' }];
// localStorage.setItem(LOCALSTORAGE_NOTES_KEY, JSON.stringify(initialState));
