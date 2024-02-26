import React from 'react';
import {RouteObject, Outlet, Link, useRoutes, useParams } from 'react-router-dom';

import history from './browserHistory';
import DashBoardPage from './components/dashboard/DashBoardPage';
import MainPage from './components/main/MainPage';
import ErrorPage from './shared/pageerror/ErrorPage';

let routes: RouteObject[] = [
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {index: true, element: <DashBoardPage /> },
            {
                path: "/dashboard",
                element: <DashBoardPage />
            },
            { path: "/comptes", element: <DashBoardPage /> },
            { path: "*", element: <DashBoardPage /> },
        ],
    },

]
