import React, { useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ReactChildrenComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log(data);
    }, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

ReactChildrenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default ChildrenExercise;
