import React from 'react';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <div>
                <Link
                    style={{ color: match ? "#7e82ab" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        </div>
    );
};

export default CustomLink;