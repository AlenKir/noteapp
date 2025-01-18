import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Note = (props) => {
    const navigate = useNavigate();
    return (
        <div className="note">
            <div className="note__body">
                <strong>{props.index}. {props.note.title}</strong>
                <div>
                    {props.note.body}
                </div>
            </div>
            <div className="note__btns">
                <MyButton onClick={() =>
                                    navigate(`/notes/${props.note.id}`)}>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.note)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default Note;
