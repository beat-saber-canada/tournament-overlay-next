"use server"

import TeamOfThree from "@bocchi/bs-canada-overlay/app/overlay/match/_components/TeamOfThree"
import CurrentMap from "@bocchi/bs-canada-overlay/app/overlay/match/_components/CurrentMap"
import Difficulty from "@bocchi/bs-canada-overlay/data/Difficulty"
import MatchScoreAnimation from "@bocchi/bs-canada-overlay/app/overlay/match/MatchScoreAnimation"

const getStreamUrl = (playerName: string) => {
  return `${process.env.NEXT_PUBLIC_STREAM_BASE_URL}/bsc/${playerName}/index.m3u8`
}

const MatchPage = () => {
  return (
    <MatchScoreAnimation>
      <div className="col-span-4 flex w-full flex-col gap-5">
        <div className="flex h-20" />
        <TeamOfThree
          teamName="Team 1"
          streamUrl1={getStreamUrl("crystal-sirens")}
          streamUrl2={getStreamUrl("enralis")}
          streamUrl3={getStreamUrl("mojo-vr")}
        />
        <TeamOfThree
          teamName="Team 2"
          streamUrl1={getStreamUrl("wdg-pink")}
          streamUrl2={getStreamUrl("raccoon-vr")}
          streamUrl3={getStreamUrl("skkeye")}
        />
      </div>
      <div className="flex justify-end">
        <CurrentMap
          name="Routine"
          artist="Silent Siren"
          mapper="Hexagonial & Splake"
          difficulty={Difficulty.ExpertPlus}
          pictureUrl="https://cdn.scoresaber.com/covers/AEDD974BD0B7BFAF8C9F9950BFD6368C04ADE258.png"
          bsrKey="2683"
        />
      </div>
    </MatchScoreAnimation>
  )
}

export default MatchPage