import React, {useEffect, useRef, useState} from 'react';
import '../styles/App.css';
import NoteList from "../components/NoteList";
import NoteForm from "../components/NoteForm";
import NoteFilter from "../components/NoteFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {useNotes} from "../hooks/useNotes";
import NoteService from "../API/NoteService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";

function Notes() {
    const [notes, setNotes] = useState([]);

    const [filter, setFilter] = useState({sort: '', query: '',});
    const sortedAndSearchedNotes = useNotes(notes, filter.sort, filter.query);

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const lastElement = useRef(null);

    const changePage = (page) => {
        setPage(page);
    }

    const [fetchNotes, isLoading, error] = useFetching(
        async (limit, page) => {
            const response = await NoteService.getAllNotes(limit, page);
            setNotes([...notes, ...response.data]);
            const totalCount = response.headers['x-total-count'];
            setTotalPages(getPageCount(totalCount, limit));
        }
    )

    useObserver(lastElement, page < totalPages, isLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchNotes(limit, page)
    }, [page])


    const [modal, setModal] = useState(false)

    const createNote = (newNote) => {
        setNotes([...notes, newNote]);
        setModal(false);
    };

    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id));
    };

    return (
        <div className="Notes">
            <MyButton style={{marginTop: 15}} onClick={() => setModal(true)}>
                Add Note
            </MyButton>

            <MyModal visible={modal} setVisible={setModal}>
                <NoteForm create={createNote}/>
            </MyModal>

            <NoteFilter filter={filter} setFilter={setFilter}/>

            {error && <h1>Error: ${error}</h1>}

            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>

            {isLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                    <Loader/>
                </div>
            }
            <NoteList remove={removeNote} notes={sortedAndSearchedNotes} title='Notes'/>

            <div ref={lastElement} style={{height: 20, visibility: "hidden"}}></div>
        </div>
    );
}

export default Notes;
