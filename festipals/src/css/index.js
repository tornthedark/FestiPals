import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "sans-serif"
    },
    "h1": {
        "color": "#ED7303"
    },
    "container-fluid": {
        "paddingLeft": "0 !important",
        "paddingRight": 0
    },
    "page-header": {
        "backgroundColor": "black",
        "marginTop": "0 !important",
        "paddingTop": 50,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "startingTime": {
        "marginTop": 20
    },
    "palIcon": {
        "marginTop": 20,
        "fontSize": 24
    },
    "aactive": {
        "backgroundColor": "black !important"
    },
    "aactive:active": {
        "backgroundColor": "black !important"
    },
    "aactive:hover": {
        "backgroundColor": "black !important"
    },
    "aactive:focus": {
        "backgroundColor": "black !important"
    }
});