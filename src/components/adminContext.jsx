// AdminContext.js
import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const toggleAdmin = () => {
        setIsAdmin(prev => !prev);
    };

    return (
        <AdminContext.Provider value={{ isAdmin, toggleAdmin , disableAdmin: () => setIsAdmin(false)}}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
