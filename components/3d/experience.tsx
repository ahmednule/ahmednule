"use client"

import { ScrollControls } from "@react-three/drei"
import { Environment3D } from "@/components/3d/environment"
import { HtmlSections } from "@/components/3d/html-sections"

export function Experience() {
  return (
    <>
      {/* Scroll controls sets up the scroll container.
          pages={5} means the scrollable area is 5 times the viewport height.
          damping={0.2} adds smooth scrolling interpolation.
      */}
      <ScrollControls pages={9.5} damping={0.1}>
        <Environment3D />
        <HtmlSections />
      </ScrollControls>
    </>
  )
}
