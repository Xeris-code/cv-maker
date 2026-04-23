"use client"

import { useRef } from "react"
import { CvAction, TemplateOption, AllowedTemplateType } from "@/lib/types"
import { ChevronsLeft, ChevronsRight } from "lucide-react"

type TemplateCarouselProps = {
  selectedTemplate: AllowedTemplateType
  dispatch: React.Dispatch<CvAction>
}

export default function TemplateCarousel({
  selectedTemplate,
  dispatch,
}: TemplateCarouselProps) {

  const templates: TemplateOption[] = [
    {type: "classic", label: "Classic"},
    {type: "modern", label: "Modern"},
    {type: "graphic", label: "Graphic"},
    {type: "initial", label: "Initial"},
  ]

  const scrollRef = useRef<HTMLDivElement | null>(null)

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -240, behavior: "smooth" })
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" })
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={scrollLeft}
          className="text-black flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50"
        ><ChevronsLeft/>
        </button>

        <div
          ref={scrollRef}
          className="flex flex-1 gap-4 overflow-x-auto scroll-smooth"
        >
          {templates.map((template) => {
            const isActive = selectedTemplate === template.type

            return (
              <button
                key={template.type}
                type="button"
                onClick={() =>
                  dispatch({
                    type: "SET",
                    target: "template",
                    value: template.type,
                  })
                }
                className={[
                  "min-w-[160px] rounded-2xl border p-3 text-left transition",
                  isActive
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-200 hover:border-gray-300",
                ].join(" ")}
              >
                <div className="mb-3 h-24 rounded-lg border bg-gray-50 p-2">
                  {template.type === "classic" && (
                    <div className="space-y-2">
                      <div className="h-2 w-2/3 rounded bg-gray-800" />
                      <div className="h-2 w-full rounded bg-gray-300" />
                      <div className="h-2 w-full rounded bg-gray-300" />
                      <div className="h-2 w-4/5 rounded bg-gray-300" />
                    </div>
                  )}

                  {template.type === "modern" && (
                    <div>
                        <div className="h-4 rounded border-1 border-black mb-2"/>
                        <div className="grid grid-cols-[1fr_2fr] gap-2">
                            <div className="space-y-1">
                                <div className="h-2 rounded bg-gray-400" />
                                <div className="h-2 rounded bg-gray-300" />
                                <div className="h-2 rounded bg-gray-400" />
                                <div className="h-2 rounded bg-gray-300" />
                                <div className="h-2 rounded bg-gray-300" />
                            </div>
                            <div className="space-y-1">
                                <div className="h-2 rounded bg-gray-800" />
                                <div className="h-2 rounded bg-gray-300" />
                                <div className="h-2 rounded bg-gray-800" />
                                <div className="h-2 rounded bg-gray-300" />
                                <div className="h-2 rounded bg-gray-300" />
                        </div>
                        </div>
                    </div>
                  )}

                  {template.type === "graphic" && (
                    <div className="space-y-2">
                      <div className="h-3 w-1/2 rounded bg-gray-800" />
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-8 rounded bg-gray-300" />
                        <div className="h-8 rounded bg-gray-300" />
                        <div className="h-8 rounded bg-gray-300" />
                      </div>
                    </div>
                  )}

                  {template.type === "initial" && (
                    <div className="">
                        <div className="flex gap-1">
                        <div className="h-6 w-4/5 rounded bg-gray-800" />
                        <div className="h-6 rounded border-1 w-1/5 border-black mb-2"/>
                        </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div className="h-2 col-span-2 rounded bg-gray-800" />
                        <div className="h-2 rounded bg-gray-800" />
                        <div className="h-2 col-span-2 rounded bg-gray-300" />
                        <div className="h-2 rounded bg-gray-300" />
                        <div className="h-2 col-span-2 rounded bg-gray-300" />
                        <div className="h-2 rounded bg-gray-300" />
                        <div className="h-2 col-span-2 rounded bg-gray-300" />
                        <div className="h-2 rounded bg-gray-300" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-sm font-semibold text-gray-600 text-center">{template.label}</div>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={scrollRight}
          className="text-black flex h-10 w-10 items-center justify-center rounded-xl border border-gray-300 bg-white hover:bg-gray-50"
        ><ChevronsRight/>
        </button>
      </div>
    </div>
  )
}