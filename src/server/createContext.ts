import { kvsLocalStorage } from "@kvs/node-localstorage"
import type { KvsLocalStorageSchema } from "@kvs/node-localstorage"
import { inferAsyncReturnType } from "@trpc/server"

interface State extends KvsLocalStorageSchema {
  scene: string
  matchId: string
  scoreRequiredToWin: number
  team0: {
    overallScore: number
    nameOverride?: string
  }
  team1: {
    overallScore: number
    nameOverride?: string
  }
}

const createContext = async () => ({
  state: await kvsLocalStorage<State>({
    name: "state",
    version: 1,
  }),
})

export type Context = inferAsyncReturnType<typeof createContext>
export default createContext
