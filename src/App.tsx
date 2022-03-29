import { stringify } from 'querystring';
import React, {useState}from 'react';
import {Note} from "./models/note.model";
import {Col, Container, Row} from "react-bootstrap";

import './App.css';
import Header from './components/Header';

import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "meetings",
    text: "schedule meetings with UI/UX team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);



  return (
<>
<Header />
<Container className='mt-5'>
  <Row>
    <Col>
    <NotesList notes={notes} setNotes={setNotes} />
    </Col>
  </Row>
  <Row>
    <Col>
    <CreateNotes notes={notes} setNotes={setNotes} />
    </Col>
  </Row>
</Container>
</>
  );
}

export default App;
