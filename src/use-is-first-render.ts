import { useRef } from 'react'

enum State {
  InitialValue
, First
, NotFirst
}

export function useIsFirstRender(): () => boolean {
  const state = useRef(State.InitialValue)

  switch (state.current) {
    case State.InitialValue:
      state.current = State.First
      break
    case State.First:
      state.current = State.NotFirst
      break
    case State.NotFirst: break
  }

  return () => state.current === State.First
}
