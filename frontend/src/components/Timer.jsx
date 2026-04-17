import React from 'react'
import {buildStyles, CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

function Timer({ timeLeft, totalTime }) {
  const percentage = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0

  // Color shifts to orange then red as time runs out
  const isWarning = timeLeft <= totalTime * 0.4
  const isDanger  = timeLeft <= 15

  const pathColor   = isDanger ? "#ef4444" : isWarning ? "#f97316" : "#10b981"
  const textColor   = isDanger ? "#ef4444" : isWarning ? "#f97316" : "#10b981"

  // Format as MM:SS
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const display = `${minutes}:${seconds.toString().padStart(2, "0")}`

  return (
    <div className={`w-28 h-28 transition-all duration-500 ${isDanger ? "drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" : ""}`}>
      <CircularProgressbar
        value={percentage}
        text={display}
        styles={buildStyles({
          textSize: "22px",
          pathColor,
          textColor,
          trailColor: "#e5e7eb",
          strokeLinecap: "round",
          pathTransitionDuration: 0.8,
        })}
      />
    </div>
  )
}

export default Timer