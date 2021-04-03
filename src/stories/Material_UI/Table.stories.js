import React from "react";

// import CustomTable from "./Table/Template";
import { data, rows, columns } from "./Table/generateData";
import { Button } from "../example/Button";
import CustomTable from "./Table/Template";

export default {
    title: "Material-UI/Table",
    component: CustomTable,
    argTypes: {},
};

const Template = (args) => <CustomTable {...args} />;

Template.story = {
    parameters: {
        jsx: {
            disable: true,
        },
    },
};
export const Primary = Template.bind({});

Primary.args = {
    rows,
    columns,
    pagination: true,
    paginationStartElement: <Button label="Button" />,
    data,
};

export const withoutStartElement = Template.bind({});
withoutStartElement.args = {
    rows,
    columns,
    pagination: true,
    data,
};

export const emptyTable = Template.bind({});
emptyTable.args = {
    rows: [],
    columns,
    pagination: false,
    emptyMessage: "No Data Found",
};
