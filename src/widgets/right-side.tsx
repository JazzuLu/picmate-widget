'use client'

import React, {useState} from 'react'
import ParsePictureForm from "~components/parse-picture-form";
import {defaultPromptOptions} from "../../lib/model/form";
import {Card} from "@mantine/core";
import {useDrag} from "~hook/useDrag";

export default function RightSide() {
    const [settings, setSettings] = useState(defaultPromptOptions)

    const {position, handleMouseDown} = useDrag()

    return (
        // <div className="plasmo-bg-white plasmo-p-4 plasmo-z-50 plasmo-flex plasmo-fixed plasmo-top-[40vh] plasmo-right-0 plasmo-shadow-lg">
        <Card shadow="lg" style={{position: "fixed"}} className="plasmo-fixed -plasmo-bottom-0 plasmo-right-0">
            <ParsePictureForm data={settings} onChange={v => setSettings(v)}/>
            <img src={""}/>
        </Card>
    )
}
