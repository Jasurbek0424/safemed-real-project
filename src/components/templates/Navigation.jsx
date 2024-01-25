/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const typeMappings = {
    Categories: 'Categories',
    medical: 'Medical Equipment',
    safety: 'Safety Supplies (PPE)',
    sitemap: 'Sitemap',
    Contats: 'Contact Us'
};

const Navigation = ({ path, products }) => {
    const pathParts = path.split('/').filter((part) => part !== '');

    return (
        <nav className="flex items-center space-x-1 text-gray-500 2xl:text-lg xl:text-lg lg:text-lg md:text-md sm:text-md text-sm flex-wrap">
            <Link to="/" className="hover:underline">
                Home
            </Link>
            {pathParts.map((part, index) => {
                const isLastPart = index === pathParts.length - 1;
                let mappedPart;

                if (part === 'Categories') {
                    mappedPart = typeMappings.Categories;
                } else if (part === 'medical') {
                    mappedPart = typeMappings.medical;
                } else if (part === 'safety') {
                    mappedPart = typeMappings.safety;
                } else if (part === 'sitemap') {
                    mappedPart = typeMappings.sitemap
                } else if (part === 'Contacts') {
                    mappedPart = typeMappings.Contats
                }
                else if (part === 'search-page') {
                    mappedPart = 'Search Page'
                }
                else {
                    mappedPart = isLastPart ? products.find((product) => product.id === parseInt(part))?.title : typeMappings[part];
                }

                return (
                    <React.Fragment key={index}>
                        <span>/</span>
                        {isLastPart ? (
                            <span>{mappedPart}</span>
                        ) : (
                            <Link to={`/${pathParts.slice(0, index + 1).join('/')}`} className="hover:underline">
                                {mappedPart}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
};

export default Navigation;