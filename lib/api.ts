import axios from "axios";
import type { Note } from '../types/note';

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    'Authorization': `Bearer ${myKey}`
  }
});

export const fetchNotes = async (page: number = 1, searchQuery?: string): Promise<NotesResponse> => {
  const response = await api.get<NotesResponse>('/notes', {
    params: {
      page,
      perPage: 12,
      ...(searchQuery?.trim() && { search: searchQuery.trim() }),
    },
  });
    return response.data;
};

export const fetchNoteById = async (id: string) => {
  const res = await api.get<Note>(`/notes/${id}`);
  return res.data;
};

export const createNote = async (newTitle: string, newContent: string, newTag: string): Promise<Note>  => {
  const response = await api.post<Note>('/notes', {
    title: newTitle,
    content: newContent,
    tag: newTag
  });
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};