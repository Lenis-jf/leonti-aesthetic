import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { scrollFunction } from '../utils/scrollFunction';

const Service = ({path, name, description}) => {
    return(
        <HashLink scroll={scrollFunction} smooth to={path} className="service">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="arrow-container"></div>
        </HashLink>
    );
}

export default Service;