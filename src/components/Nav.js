import React from 'react';

const Nav = (props) => {
    const { nav, info } = props;

    const unlockScroll = () => {
        document.body.style.overflow = "auto"
    }

    return(
        <nav className={nav !== 0 ? "nav_s" : ""}>
            <div className="nav_container">
                <div>
                    <button onClick={() => {window.scrollTo({ top: 0 }); unlockScroll()}} className={nav !== 0 ? "nav_s_logobutton" : ""}>
                        {info.nav}
                    </button>
                </div>
                <ul>
                    <li><button onClick={() => {window.scrollTo({ top: 5}); unlockScroll()}} className={nav === 1 ? "nav_s_active " :""}>소개</button></li>
                    <li><button onClick={() => {window.scrollTo({ top: 305}); unlockScroll()}} className={nav === 2 ? "nav_s_active " :""}>활동</button></li>
                    <li><button onClick={() => {window.scrollTo({ top: 600 }); unlockScroll()}} className={nav === 3 ? "nav_s_active " :""}>스택</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;