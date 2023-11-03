import {PropsWithChildren} from "react";


const styles={
    // card container style
    container: {
        "display": "flex",
        "flexDirection": "column" as const,
        "boxSizing": "border-box" as const,
        "minWidth": "190px",
        "lineHeight": "1.5",
        "color": "#11181C",
        "borderRadius": "4px",
        "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        "backgroundColor": "#ffffff",
        "transition": "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "outline": "0",
        "border": "0",
        "padding": "0",
        "verticalAlign": "middle",
        "WebkitTextDecoration": "none",
        "textDecoration": "none",
        "WebkitTapHighlightColor": "transparent",
        "margin": "0 0 8px 0",
    },
    // card title style
    title: {
        color: "#11181C",
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "1.5",
    }
}

const Card = (props:PropsWithChildren) => {
    return (
        <div style={styles.container}>
            {props.children}
        </div>
    );
};

export const CardTitle = (props:PropsWithChildren) => {
    return (
        <h1 style={styles.title}>
            {props.children}
        </h1>
    )
}

export default Card;
