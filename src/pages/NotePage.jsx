import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import NoteService from "../API/NoteService";
import Note from "../components/Note";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";

const NotePage = () => {
    const params = useParams();
    const [note, setNote] = useState({});
    const [todo, setTodo] = useState([]);
    const [fetchNoteById, isNoteLoading, noteError] = useFetching(
        async (id) => {
            const response = await NoteService.getNoteById(id);
            setNote(response.data);
        }
    )
    const [fetchTodoByNoteId, isTodoLoading, todoError] = useFetching(
        async (id) => {
            const response = await NoteService.getTodoByNoteId(id);
            setTodo(response.data);
        }
    )

    useEffect(() => {
        fetchNoteById(params.id);
        fetchTodoByNoteId(params.id);
    }, [params.id]);

    return (
        <div>
            <h1>Note {params.id}</h1>
            {isNoteLoading ? <Loader/> : <Note note={note}/>}
            <h1>
                To do:
            </h1>
            {isTodoLoading ? <Loader /> : (
                <ul style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                    {todo.map((t) => (
                        <li key={t.id}>
                            <p>{t.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotePage;