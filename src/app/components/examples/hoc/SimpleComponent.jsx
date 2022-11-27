import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = (onLogin, onLogout, isAuth) => {
    return (
        <div>
            {isAuth ? (
                <button className="btn btn-success mt-2" onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className="btn btn-primary mt-2" onClick={onLogout}>
                    Выйти из системы
                </button>
            )}
        </div>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
