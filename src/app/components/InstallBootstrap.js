'use client'

import { useEffect } from "react"

export default function InstallBootstrap() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.min.js");
    }, [])
    return <></>
}