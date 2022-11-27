import React from "react";
import CardWrapper from "../../common/Card";
import Textfield from "../../common/form/textField";

import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const field = <Textfield label="email" name="email" />;
    const handleChange = (target) => {
        console.log("change", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>The primer</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Clone email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
