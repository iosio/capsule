import React from "react";
import {Router} from "../../../../src";
import {lazyLoader} from "../utils/lazyLoader";
import './logic/dataCapsule';

import {Nav} from "./Nav";

const Home = lazyLoader(() => import('./Pages/Home'));
const Detail = lazyLoader(() => import('./Pages/Detail'));
const Login = lazyLoader(() => import('./Pages/Login'));
const MyProfile = lazyLoader(() => import('./Pages/MyProfile'));
const Todos = lazyLoader(() => import('./Pages/Todos'));


const pathMap = {
    '/': Home,
    '/detail': Detail,
    '/login': Login,
    '/myProfile': MyProfile,
    '/todos': Todos,
};


export default () => (
    <React.Fragment>
        <Nav/>
        <Router noMatch={'/'} pathMap={pathMap}/>
    </React.Fragment>
);