import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "App": {
        "textAlign": "center"
    },
    "App-logo": {
        "animation": "App-logo-spin infinite 20s linear",
        "height": 80
    },
    "App-header": {
        "backgroundColor": "#222",
        "height": 150,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "Color": "white"
    },
    "App-intro": {
        "fontSize": "large"
    }
});