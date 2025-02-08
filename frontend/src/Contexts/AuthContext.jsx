import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const value = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [isAuthenticated]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes={
    children: PropTypes.node.isRequired
}