import cssText from "data-text:~style.css"
import type {PlasmoCSConfig} from "plasmo"
import mantineCssText from "data-text:@mantine/core/styles.css"
import {ThemeProvider} from "~theme";
import "@mantine/core/styles.css"
import React from "react";
import {setMantineColorScheme} from "../lib/utils";
import RightSide from "~widgets/right-side";

export const config: PlasmoCSConfig = {
    matches: [
        "https://www.plasmo.com/*",
        // "http://localhost:8887/*"
    ]
}

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText + mantineCssText
    return style
}

const PlasmoOverlay = () => {
    setMantineColorScheme("light")
    return (
        <ThemeProvider>
            <RightSide/>

            {/*<Button variant="outline">Click me</Button>*/}
            {/*<TagsInput label="Press Enter to submit a tag" placeholder="Enter tag"/>*/}
            {/*<Select*/}
            {/*    variant="outline"*/}
            {/*    label="Platform"*/}
            {/*    value={'platform'}*/}
            {/*    data={PlatformItems}*/}
            {/*/>*/}
        </ThemeProvider>
    )
}

export default PlasmoOverlay
