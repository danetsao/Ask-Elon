import React from "react";
import styles from "../styles/header.module.css";


interface HeaderProps {
    noResult: any;
    doPopUp: any;
}   



const Header: React.FC<HeaderProps> = (props) => {
    return <div className={styles.header_container}>
        <div>
            <button onClick={props.noResult} className={styles.header_title}>Ask Elon</button>
        </div>
        <div>
            <button onClick={props.doPopUp} className={styles.header_title} style={{ marginLeft: 'auto' }}>How to use?</button>
        </div>
    </div>;
}

export default Header;