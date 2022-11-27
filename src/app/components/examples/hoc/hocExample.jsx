import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropStyles";
import SimpleComponent from "./SimpleComponent";
import withFuncions from "./withFunctions";

const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropStyles = withPropsStyles(Component);
    const NewComponent = withPropsStyles(ComponentWithAuth);
    const ComponentWithHoc = withFuncions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropStyles />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
                <Divider />
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
