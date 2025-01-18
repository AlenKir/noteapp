import axios from "axios";

export default class NoteService {
    static async getAllNotes(limit = 10, page = 1, query) {
        const response = await
            axios.get("https://jsonplaceholder.typicode.com/posts",
                {
                    params: {
                        _limit : limit,
                        _page: page,
                    }
                });
        return response;
    }

    static async getNoteById(id) {

        console.log(id);

        const response = await
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        console.log(response)

        return response;
    }

    static async getTodoByNoteId(id) {

        console.log(id);

        const response = await
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        console.log(response)

        return response;
    }
}