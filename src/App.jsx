import { useState, useEffect} from 'react'

function App() {
  const hiragana = [ 
    { romaji: 'a', hiragana: 'あ' },
		{ romaji: 'i', hiragana: 'い' },
		{ romaji: 'u', hiragana: 'う' },
		{ romaji: 'e', hiragana: 'え' },
		{ romaji: 'o', hiragana: 'お' },
		{ romaji: 'ka', hiragana: 'か' },
		{ romaji: 'ki', hiragana: 'き' },
		{ romaji: 'ku', hiragana: 'く' },
		{ romaji: 'ke', hiragana: 'け' },
		{ romaji: 'ko', hiragana: 'こ' },
		{ romaji: 'sa', hiragana: 'さ' },
		{ romaji: 'shi', hiragana: 'し' },
		{ romaji: 'su', hiragana: 'す' },
		{ romaji: 'se', hiragana: 'せ' },
		{ romaji: 'so', hiragana: 'そ' },
		{ romaji: 'ta', hiragana: 'た' },
		{ romaji: 'chi', hiragana: 'ち' },
		{ romaji: 'tsu', hiragana: 'つ' },
		{ romaji: 'te', hiragana: 'て' },
		{ romaji: 'to', hiragana: 'と' },
		{ romaji: 'na', hiragana: 'な' },
		{ romaji: 'ni', hiragana: 'に' },
		{ romaji: 'nu', hiragana: 'ぬ' },
		{ romaji: 'ne', hiragana: 'ね' },
		{ romaji: 'no', hiragana: 'の' },
		{ romaji: 'ha', hiragana: 'は' },
		{ romaji: 'hi', hiragana: 'ひ' },
		{ romaji: 'fu', hiragana: 'ふ' },
		{ romaji: 'he', hiragana: 'へ' },
		{ romaji: 'ho', hiragana: 'ほ' },
		{ romaji: 'ma', hiragana: 'ま' },
		{ romaji: 'mi', hiragana: 'み' },
		{ romaji: 'mu', hiragana: 'む' },
		{ romaji: 'me', hiragana: 'め' },
		{ romaji: 'mo', hiragana: 'も' },
		{ romaji: 'ya', hiragana: 'や' },
		{ romaji: 'yu', hiragana: 'ゆ' },
		{ romaji: 'yo', hiragana: 'よ' },
		{ romaji: 'ra', hiragana: 'ら' },
		{ romaji: 'ri', hiragana: 'り' },
		{ romaji: 'ru', hiragana: 'る' },
		{ romaji: 're', hiragana: 'れ' },
		{ romaji: 'ro', hiragana: 'ろ' },
		{ romaji: 'wa', hiragana: 'わ' },
		{ romaji: 'wo', hiragana: 'を' },
		{ romaji: 'n', hiragana: 'ん' }
	]
  
  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(0)

  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)

  const [error, setError] = useState(false)

  const setRandomHiragana = () => {
    const randomIndex = Math.floor(Math.random() * hiragana.length)
    setCurrent(randomIndex)
  }

  const handleChange = evt => {
      setInput(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    if (input.toLowerCase() === hiragana[current].romaji) {
        setStreak(streak + 1)
        setMaxStreak(Math.max(streak, maxStreak))
        setError(false)

        localStorage.setItem(Math.max(streak, maxStreak))
        localStorage.setItem('streak', streak + 1) 
    } else {
        setStreak(0)
        setError(`Wrong! The correct answer for ${hiragana[current].hiragana} is ${hiragana[current].romanji}`)

        localStorage.setItem('streak', 0)
    }

    setInput('')
    serRandomHiragana()

  }

  useEffect(() => {
    setRandomHiragana()
    setStreak(localStorage.getItem('streak') || 0)
    setMaxStreak(localStorage.getItem('maxStreak') || 0)
  }, [])
    
   return (
     <div className="App">
       <h1>Hello, World!</h1>
     </div>
   )
}

export default App
