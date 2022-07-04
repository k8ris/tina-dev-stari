import React from 'react';
import { Navigate } from "react-router-dom";
export default function Shop () {
    window.location.href = 'http://tina-shop.mef-lab.com';
    //return null;
    return (
        <Navigate to="/" replace={true} />
    )
    }