import React from 'react'
import { setSyntheticLeadingComments } from 'typescript';
import { Note } from '../models/note.model';
import Notes from './Notes';

type INotesListProps = {
notes:Note[]
setNotes: React.Dispatch<React.SetStateAction<Note[]>>
};

const NotesList: React.FC<INotesListProps> = ({notes, setNotes}) => {
    const handleDelete = (id: string) => {
        console.log("The note to be deleted", id);
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = ():JSX.Element[] => {
       return notes.map(note => {
           return  <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })
    }
  return (
 <>
 <h2 className='mt-3'>Notes</h2>
 <div>{renderNotes()}</div>
 </>
  )
}

export default NotesList