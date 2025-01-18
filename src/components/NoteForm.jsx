import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { v4 as uuidv4 } from 'uuid';

const NoteForm = ({create}) => {
    const [note, setNote] = useState({
        title: '',
        body: '',
    });

    const addNote = (e) => {
        e.preventDefault();
        const newNote = {
            ...note,
            id: uuidv4()
        };
        create(newNote);
        setNote({title: '', body: ''});
    }

    return (
        <form>
            <MyInput
                value={note.title}
                onChange={e => setNote({...note, title: e.target.value})}
                type="text"
                placeholder="title"/>
            <MyInput
                value={note.body}
                onChange={e => setNote({...note, body: e.target.value})}
                type="text"
                placeholder="body"/>
            <MyButton onClick={addNote}>Add note</MyButton>
        </form>
    );
};

export default NoteForm;