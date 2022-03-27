import React from 'react'
import { Note } from '../models/note.model';
import Notes from './Notes';

type INotesListProps = {
notes:Note[]
};

const NotesList: React.FC<INotesListProps> = ({notes}) => {
    const handleDelete = (id: string) => {

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