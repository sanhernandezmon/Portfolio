/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Proffesional info"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[

              <Link to="/Docs" className={classes.dropdownLink}>
                  Documents
              </Link>,

              <Link to="/" className={classes.dropdownLink}>
                  Pass projects
              </Link>,

              <Link to="/" className={classes.dropdownLink}>
                  Additional Info
              </Link>,

          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/santiago.hernandez.98871"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Tooltip
                id="instagram-facebook"
                title="Follow me on Linkedin"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    color="transparent"
                    href="https://www.linkedin.com/in/sanhernandezmon/"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-linkedin"} />
                </Button>
            </Tooltip>
        </ListItem>

        <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/sanhmon/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
        <ListItem className={classes.listItem}>
            <Tooltip
                id="instagram-facebook"
                title="Check some of my work on github"
                placement={window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
            >
                <Button
                    color="transparent"
                    href="https://github.com/sanhernandezmon"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-github"} />
                </Button>
            </Tooltip>
        </ListItem>
    </List>
  );
}
