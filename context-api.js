import React from 'react';

const userDetail = { name: 'Sumeeth' };

const UserContext = React.createContext({});

const Main = () => {
    return (
        <UserContext.Provider value={userDetail}>
            <Header />
        </UserContext.Provider>
    );
}

const Header = () => {
    return (
        <UserProfile />
    );
}

const UserProfile = () => {
    const user = useContext(UserContext);
    return (
        <div>
            {user.name}
        </div>
    );
}