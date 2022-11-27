import React from "react";
import CardWrapper from "../../common/Card";

const withFuncions = (Component) => (props) => {
    const handleLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const handleLogout = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = !!localStorage.getItem("auth");

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogout={handleLogout}
                onLogin={handleLogin}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFuncions;
