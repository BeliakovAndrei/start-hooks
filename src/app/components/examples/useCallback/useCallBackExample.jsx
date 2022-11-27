import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallBack = useRef(0);
    const withCallBack = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // Without callback
    const validateWIthoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallBack.current++;
    }, [validateWIthoutCallback]);

    // With callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallBack.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWIthoutCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <p>Render WITHOUT callback: {withoutCallBack.current}</p>
            <p>Render WITH callback: {withCallBack.current}</p>
            <SmallTitle>Example</SmallTitle>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
