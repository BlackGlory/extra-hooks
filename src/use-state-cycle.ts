import { useState } from 'react'

export function useStateCycle<T>(
  stateList: [T, ...T[]]
, initialStateIndex: number = 0
): [state: T, next: () => void] {
  const [index, setIndex] = useState(initialStateIndex)

  return [stateList[index], next]

  function next() {
    setIndex(index => {
      if (index + 1 < stateList.length) {
        return index + 1
      } else {
        return 0
      }
    })
  }
}
