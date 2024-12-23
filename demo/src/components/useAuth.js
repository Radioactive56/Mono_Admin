import { useState, useEffect } from 'react';
 
const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem('authenticated') === 'true'
    );
 
    useEffect(() => {
        // Update the authentication state when the component mounts or changes
        const handleStorageChange = () => {
            setAuthenticated(localStorage.getItem('authenticated') === 'true');
        };
 
        // Listen for changes to local storage
        window.addEventListener('storage', handleStorageChange);
 
        // Clean up event listener on component unmounts
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);
 
    return { authenticated };
};
 
export default useAuth;