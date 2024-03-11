import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

const Midleware = ({ children }) => {

    const navigate = useNavigate();

    const { userAuth } = useContext(UserContext);
    const { access_token } = userAuth;
    if (!access_token) {
        toast.error('Please login to access this page');
        navigate("/"); 
        }
    return (
        <div>
            {children}
        </div>
    );
};

export default Midleware;
