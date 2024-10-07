import React from 'react';
import NavBar from './NavBar';
import AccountBar from './AccountBar';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  

function AppFrame() {

    let display = (
        <>
        <h1>Display 1</h1>
        <p>P1</p>
        </>
    );
    let display2 = (
        <>
        <h1>Display 2</h1>
        <p>P2</p>
        </>
    );
    let display3 = (
        <>
        <h1>Display 3</h1>
        <p>P3</p>
        </>
    );
    const router = createBrowserRouter([
        {
          path: "/",
          element: <div className='appFrame'>{display}</div>,
        },
        {
          path: "/generate",
          element: <div className='appFrame'>{display2}</div>,
        },
        {
          path: "/collection",
          element: <div className='appFrame'>{display3}</div>,
        },
      ]);


    return (
        <>
        <AccountBar />
        <NavBar />
        <RouterProvider router={router} />
        </>
    );
};

export default AppFrame;