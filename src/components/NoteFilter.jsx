import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const NoteFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search"
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                defaultOption="Sort By"
                options={[
                    { value: "title", title: "Sort By Title" },
                    { value: "body", title: "Sort By Body" },
                ]}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default NoteFilter;