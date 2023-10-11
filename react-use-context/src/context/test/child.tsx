import { useContext } from 'react'
import { DemoContext } from './demo'

const style = { fontSize: '32px' }

const Child = () => {

  const { model, setColor, setText } = useContext(DemoContext)

  const onChange: (e: any) => void = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <input style={style} value={model.text} onChange={onChange} />
      <button style={style} onClick={() => setColor('red')}>Red</button>
      <button style={style} onClick={() => setColor('blue')}>Blue</button>
      <button style={style} onClick={() => setColor('green')}>Green</button>
    </div>
  )
}

export default Child