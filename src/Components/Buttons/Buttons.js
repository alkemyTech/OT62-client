import React from "react";
import { Link } from "react-router-dom";

const Button = ({ route, buttonName, styles, handler }) => {
    switch (styles) {
        case 'primaryButton':
            styles = 'px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 self-center text-sm shadow-lg '
            break;
        case 'secondaryButton':
            styles = 'px-6 py-2 w-fit text-black border rounded-lg self-center hover:bg-slate-300 text-sm shadow-lg border-slate-800 border-slate-800'
            break;
        case 'formButton':
            styles = 'px-6 py-2 w-fit bg-red-600 text-white border rounded-lg hover:bg-red-700 text-lg shadow-lg m-auto md:m-0'
            break;
        default:
            break;
    }

    return (
        <Link to={route} className={styles} onClick={handler}>{buttonName}</Link>
    )
}

export default Button;