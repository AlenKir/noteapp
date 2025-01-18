import NotePage from "../pages/NotePage";
import Notes from "../pages/Notes";
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
    {component: About, path: '/about'},
    {component: Notes, path: '/notes'},
    {component: NotePage, path: '/notes/:id'},
]

export const publicRoutes = [
    {component: Login, path: '/login'},
]