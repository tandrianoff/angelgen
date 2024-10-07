import React from 'react';


function NavBar() {

    let pages = [{title:'Generate',href:'generate'},{title:'Collection',href: 'collection'}];
    const navItems = [];

    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        let title = pages[i].title || "POOP";
        navItems.push(<li key={title}><a href={page.href}>{title} </a></li>);
    }

    return (
        <div className='navBar'>
            <ul>
                {navItems}
            </ul>
        </div>

    );
};

export default NavBar;