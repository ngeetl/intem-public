import React from 'react';
import Home from './pages/HOME/Home';
import Achieve from './pages/ACHIEVE/Achieve';
import Intro from './pages/INTRO/INTRO/Intro';
import History from './pages/INTRO/HISTORY/History';
// import Map from './pages/INTRO/MAP/Map'
// import Admin from './pages/ADMIN/Admin';
import Wac from './pages/PRODUCT/WAC/Wac';
import Perfume from './pages/PRODUCT/PERFUME/Perfume';
import RentalService from './pages/RENTAL/RENTALSERVICE/RentalService';
import Maintenance from './pages/RENTAL/MAINTENANCE/Maintenance';
import EcoAir from './pages/PRODUCT/ECOAIR/EcoAir';
import BlueSky from './pages/PRODUCT/BLUESKY/BlueSky';
import AchieveLogo from './pages/ACHIEVE/AchieveLogo';
import NotFoundPage from './pages/NOTFOUNDPAGE/NotFoundPage';
// import Estimate from './components/ESTIMATE/Estimate';
const Map = React.lazy(() => import('./pages/INTRO/MAP/Map'));
const Estimate = React.lazy(() => import('./components/ESTIMATE/Estimate'));
const Admin = React.lazy(() => import('./pages/ADMIN/Admin'));
// const Perfume = React.lazy(() => import('./pages/PRODUCT/PERFUME/Perfume'));
// const EcoAir = React.lazy(() => import('./pages/PRODUCT/ECOAIR/EcoAir'));
// const BlueSky = React.lazy(() => import('./pages/PRODUCT/BLUESKY/BlueSky'));
// const Wac = React.lazy(() => import('./pages/PRODUCT/WAC/Wac'));

export default [
    {
        path: "/",
        component: <Home/>,
    },
    {
        path: "/intro/intro",
        component: <Intro/>,
    },
    {
        path: "/intro/history",
        component: <History/>,
    },
    {
        path: "/intro/map",
        component: <Map/>,
    },
    {
        path: '/product/wac',
        component: <Wac/>,
    },
    {
        path: "/product/bluesky",
        component: <BlueSky/>,
    },
    {
        path: "/product/ecoair",
        component: <EcoAir/>,
    },
    {
        path: "/product/perfume",
        component: <Perfume/>,
    },
    {
        path: "/achieve/achieve",
        component: <Achieve/>,
    },
    {
        path: "/achieve/achievelogo",
        component: <AchieveLogo/>,
    },
    {
        path: "/rental/maintenance",
        component: <Maintenance/>,
    },
    {
        path: "/rental/rentalservice",
        component: <RentalService/>,
    },
    {
        path: "/admin/4902",
        component: <Admin/>,
    },
    {
        path: "/admin/4902/:id",
        component: <Estimate/>,
    },
    {
        path: '/:id',
        component: <NotFoundPage/>,
        key: 'notfoundpage'
    }
  ]