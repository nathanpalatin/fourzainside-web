'use client'

import { CheckIcon, Square } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ButtonProgress() {

  const [watched, setWatched] = useState(false)

  function handleProgress() {
    toast("Progresso atulizado!", {
      description: "Parabéns, continue assim...",
      classNames: {
        actionButton: "group-[.toast]:bg-green-500 group-[.toast]:text-white",
      },
      action: {
        label: "OK!",
        onClick: () => console.log("Undo"),
      },

    })
  }

  return (
    <button onClick={() => {
      handleProgress()
      setWatched(!watched)
    }
    } className={` ${watched ? 'bg-green-800' : 'bg-zinc-800'} text-sm rounded p-2 items-center flex gap-2`}>{watched ? <CheckIcon /> : <Square />} Marcar como assistida</button>
  )
}