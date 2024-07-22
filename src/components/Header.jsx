import { useState, useEffect } from 'react'
import '../styles/header.css'

function Header() {
    return (
        <>
            <header>
                <ul>
                    <li>Current score: 3</li>
                    <li>Best score: 10</li>
                </ul>
            </header>
        </>
    );
}

export default Header;
