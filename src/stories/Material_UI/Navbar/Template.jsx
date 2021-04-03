import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Paper } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const primaryStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
    tabPrimary: {
        minWidth: "20px",
        fontSize: "12px",
    },
    root: {
        height: "100%",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
    },
    selected: {
        color: theme.palette.primary.main,
    },
}));

const secondaryStyles = makeStyles((theme) => ({
    headerWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
    tabSecondary: {},
    root: {
        height: "100%",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        color: "#000000",
    },
    selected: {
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        value === index && (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                style={{ height: "calc(100% - 48px)" }}
            >
                {value === index && children}
            </div>
        )
    );
}

export default function NavBar(props) {
    const [value, setValue] = React.useState(props.disableTabs ? 1 : 0);
    const menu = props.menu;
    const primaryClasses = primaryStyles();
    const secondaryClasses = secondaryStyles();

    const classes = props.type == "primary" ? primaryClasses : secondaryClasses;
    const classNam =
        props.type == "primary"
            ? primaryClasses.tabPrimary
            : secondaryClasses.tabSecondary;

    const handleChange = (event, newValue) => {
        if (!props.disableTabs || newValue === 2 || newValue === 1)
            setValue(newValue);
    };

    return (
        <Paper elevation={0} className={classes.root}>
            <div
                className={`${classes.headerWrapper} ${
                    props.type == "primary" ? "" : "primaryBorder"
                }`}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor={
                        props.type == "primary" ? "primary" : "transparent"
                    }
                    disable={true}
                >
                    {menu.map((item, index) => (
                        <Tab
                            classes={{ selected: classes.selected }}
                            className={classNam}
                            key={"key_" + index}
                            label={item.menuName}
                        />
                    ))}
                </Tabs>
                <div>{props.endElement}</div>
            </div>
            {menu.map((item, index) => (
                <TabPanel key={"key_" + index} value={value} index={index}>
                    {item.component}
                </TabPanel>
            ))}
        </Paper>
    );
}
