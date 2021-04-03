import React from "react";

import { Button } from "../example/Button";
import NavBar from "./Navbar/Template";

export default {
    title: "Material-UI/Navbar",
    component: NavBar,
    argTypes: {},
};
const menu = [
    {
        menuName: "Tab 1",
        component: (
            <div
                style={{
                    height: "200px",
                    border: "1px solid black",
                    marginTop: "1em",
                    padding: "0.5em",
                }}
            >
                Tab 1 lorem ipsusm
            </div>
        ),
    },
    {
        menuName: "Tab 2",
        component: (
            <div
                style={{
                    height: "200px",
                    border: "1px solid black",
                    marginTop: "1em",
                    padding: "0.5em",
                }}
            >
                Tab 2 lorem ipsusm
            </div>
        ),
    },
];

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    menu,
    type: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
    menu,
    type: "secondary",
};

// export const withoutStartElement = Template.bind({});
// withoutStartElement.args = {
//     rows,
//     columns,
//     pagination: true,
//     data,
// };

// export const emptyTable = Template.bind({});
// emptyTable.args = {
//     rows: [],
//     columns,
//     pagination: false,
//     emptyMessage: "No Data Found",
// };
