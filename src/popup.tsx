import { Button } from "@mantine/core"
import { CountButton } from "~features/count-button"
import "@mantine/core/styles.css"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40">
      <CountButton />
    </div>
  )
}

export default IndexPopup
