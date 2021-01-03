import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Documents(props) {
    const classes = useStyles();
    const { ...rest } = props;


    return (
        <div>
            <Header
                brand="Home"
                rightLinks={<HeaderLinks />}
                fixed
                color="transparent"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg4.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Welcome to my portfolio</h1>
                                <h3 className={classes.subtitle}>
                                    This is the space you will see my CV and other important Documents related with my professional history
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div  className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <a href="./CV" target={"_blank"}><h2>CV</h2></a>
                    <p>Here you will find my cv with my personal info and the
                        consolidation of the principal concepts
                        that you can also find on this portfolio
                    </p>

                </div>
            </div>
        </div>
    );
}
