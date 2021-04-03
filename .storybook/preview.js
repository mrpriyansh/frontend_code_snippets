import "@storybook/addon-console";
const { addDecorator } = require("@storybook/react");
const { jsxDecorator } = require("storybook-addon-jsx");

import { withConsole } from "@storybook/addon-console";

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(jsxDecorator);
export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
