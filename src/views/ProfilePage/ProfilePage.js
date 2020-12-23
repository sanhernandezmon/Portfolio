import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";

import profile from "assets/img/faces/me.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Santiago Hernández Montaño</h3>
                    <h6>Sistems Engineer</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Student of system's with high level in software development,
                  always having the intention to
                  learn new things, I'm also interested on project management
                  and E-government.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Documents",
                      tabIcon: Camera,
                      tabContent: (

                          <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={4}>
                                <h4>CV</h4>
                              </GridItem>

                        </GridContainer>
                  )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <h4>agricolab</h4>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <h4>grader</h4>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Aditional",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <h4>blockchain</h4>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <h4>udemy1</h4>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <h4>udemy2</h4>
                            </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
