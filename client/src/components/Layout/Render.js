// Css
import classes from "./Render.module.scss";

export const RenderParagraph = (props) => {
    return (
        <p className={classes.content}>
            {props.data.split("\n").map((line) => (
                <span>{line}</span>
            ))}
        </p>
    );
};

export const RenderImage = (props) => {
    return <img className={classes.image} src={props.data} />;
};
