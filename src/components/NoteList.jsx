import React from 'react';
import Note from "./Note";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const NoteList = ({notes, title, remove}) => {

    if (!notes.length) {
        return <h1 style={{textAlign: "center"}}>No notes found.</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {notes.map((note, index) => (
                    <CSSTransition
                        key={note.id}
                        timeout={500}
                        classNames="note"
                    >
                        <Note remove={remove} index={index + 1} note={note} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default NoteList;