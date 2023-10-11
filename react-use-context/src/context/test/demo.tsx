import { createContext, useState } from 'react'

const delay = (ms: number) => new Promise((resolve, rejects) => setTimeout(() => { resolve(null) }, ms))

/** make union type, assign the attribute to different type */
interface ContextModel {
  color: string;
  text: string
}

/** asign the default value in union type */
const MODEL_ORIGION: ContextModel = {
  color: '#61dafb',
  text: 'hello useContext'
}

/** use context make function */
export const DemoContext = createContext<any>({})

/** use context function to make component */
export const DemoContextProvider: (prop: any) => any = ({ children }) => {
  const [model, setModel] = useState<ContextModel>({ ...MODEL_ORIGION })

  const setColor = async (color: string) => {
    await delay(2000)
    setModel({ ...model, color })
  }

  const setText = (text: string) => {
    if (!text?.length) return;
    /** could be backend api function */
    // await delay(2000)

    setModel({ ...model, text })
  }

  return (
    <DemoContext.Provider value={{
      /** data */
      model,
      /** function */
      setColor,
      setText
    }}>
      {children}
    </DemoContext.Provider>
  )
}

