import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <Routes>
                {isAuth ? (
                    <>
                        {privateRoutes.map((route) => (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={<route.component />}
                            />
                        ))}
                        <Route path="*" element={<Navigate to="/notes" />} />
                    </>
                ) : (
                    <>
                        {publicRoutes.map((route) => (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={<route.component />}
                            />
                        ))}
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </div>
    );
};

export default AppRouter;
