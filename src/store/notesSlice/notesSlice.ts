import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { LOCALSTORAGE_NOTES_KEY, NoteList, NoteState, target } from './types';
import { v4 as uuid } from 'uuid';
const storageValue = localStorage.getItem(LOCALSTORAGE_NOTES_KEY);
const savedState: NoteList = (storageValue && JSON.parse(storageValue)) || {
  test: { name: 'test', text: 'my first #test note', id: 'test', tags: ['#test'] },
  test2: { name: 'test', text: 'my first #test note', id: 'test2', tags: ['#test2'] },
};
const createNewTask = (id: string) => ({
  name: 'new task',
  text: 'new #task',
  id: id,
  tags: ['#task'],
});
const initialState: NoteState = {
  noteList: savedState,
  allTags: [],
  currentTag: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    updateNote: (state, action: PayloadAction<{ id: string; value: string; target: target }>) => {
      state.noteList[action.payload.id][action.payload.target] = action.payload.value;
      localStorage.setItem(LOCALSTORAGE_NOTES_KEY, JSON.stringify(state.noteList));
    },

    updateNoteTags: (state, action: PayloadAction<{ id: string; value: string }>) => {
      state.noteList[action.payload.id].tags = action.payload.value
        .split(' ')
        .filter((word) => word.startsWith('#'));
      localStorage.setItem(LOCALSTORAGE_NOTES_KEY, JSON.stringify(state.noteList));
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      delete state.noteList[action.payload.id];
      localStorage.setItem(LOCALSTORAGE_NOTES_KEY, JSON.stringify(state.noteList));
    },
    addNewNote: (state) => {
      const id = uuid();
      state.noteList[id] = createNewTask(id);
      localStorage.setItem(LOCALSTORAGE_NOTES_KEY, JSON.stringify(state.noteList));
    },
    addTag: (state) => {
      const allTags = [];
      for (const key in state.noteList) {
        allTags.push(...state.noteList[key].tags);
      }
      state.allTags = [...new Set(allTags)];
    },
    selectTag: (state, action: PayloadAction<{ tag: string }>) => {
      state.currentTag = action.payload.tag;
    },
  },
});

export const { updateNote, updateNoteTags, deleteNote, addNewNote, addTag, selectTag } =
  notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.noteList;

export default notesSlice.reducer;
