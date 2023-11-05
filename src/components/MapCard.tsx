import { getAverageColor } from "fast-average-color-node"

interface Props {
  name: string
  artist: string
  mapper: string
  difficulty: string
  pictureUrl: string
  bsrKey: string
  bpm: number
  state: "none" | "picked" | "banned" | "tiebreaker"
}

const MapCard = async (props: Props) => {
  const { name, artist, mapper, difficulty, pictureUrl, bsrKey, bpm, state } =
    props
  const color = await getAverageColor(pictureUrl)
  const textColor = color.isDark ? "#FFFFFF" : "#000000"

  return (
    <div
      className={`flex flex-row items-center justify-between rounded-md p-5`}
      style={{
        background: color.hex,
        border:
          state === "picked"
            ? "5px solid #2ADB00"
            : state === "banned"
            ? "5px solid #FF182E"
            : state === "tiebreaker"
            ? "5px solid #FBB03B"
            : "none",
      }}
    >
      <div className="flex flex-row items-center gap-5">
        <img className="aspect-square h-20 rounded-md" src={pictureUrl} />
        <div className="flex flex-col">
          <span className="text-2xl" style={{ color: textColor }}>
            {name} - {artist}
          </span>
          <span className="text-sm" style={{ color: textColor }}>
            Mapped by {mapper}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex rounded-md bg-purple-600 p-2 shadow shadow-gray-600">
          <span className="text-xl">{difficulty}</span>
        </div>
        <span className="text-md font-semibold" style={{ color: textColor }}>
          {bsrKey}
        </span>
        <span className="text-sm" style={{ color: textColor }}>
          {bpm} BPM
        </span>
      </div>
    </div>
  )
}

export default MapCard
