import {useMemo} from "react";

export const useSortedNotes = (notes, sort) => {
    const sortedNotes = useMemo(() => {
        if (sort) {
            return [...notes].sort(
                (a, b) => a[sort].localeCompare(b[sort]));
        }
        return notes;
    }, [notes, sort]);
    return sortedNotes;
}

export const useNotes = (notes, sort, query) => {
    const sortedNotes = useSortedNotes(notes, sort);

    return useMemo(() => {
        query = query.toLowerCase();

        return sortedNotes.filter(n =>
            n.title.toLowerCase().includes(query)
            || n.body.toLowerCase().includes(query));
    }, [query, sortedNotes]);
}