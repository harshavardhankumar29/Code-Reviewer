import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from 'prismjs'
import Editor from 'react-simple-code-editor'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
import axios from 'axios'
import './App.css'
import LandingPage from './components/LandingPage'

function App() {
  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}
`);

const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  },[])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });
setReview(response.data);
  }

  return (
    <>
    <LandingPage />
    <main className="w-full h-screen bg-zinc-700 flex p-5 gap-3" id='main-content' >
      <div className="left w-1/2 bg-zinc-950 rounded-lg relative">
      <div className="code">
       <div className="code h-[96vh] w-full overflow-auto">
  <Editor
    value={code}
    onValueChange={setCode}
    highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
    padding={10}
    style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 14,
      color: "white",
      minHeight: "100%",   // let content grow
    }}
  />
</div>

      </div>
    <div onClick={reviewCode} className="w-25 h-10 bg-yellow-300 text-black font-semibold text-sm flex items-center justify-center rounded-lg absolute bottom-3 right-3 cursor-pointer hover:bg-yellow-400 select-none">
      Review
    </div>

      </div>
      <div className="right w-1/2 bg-zinc-800 rounded-lg overflow-auto p-10 text-white text-sm">
      {/* {review && <pre className="p-5 overflow-auto"><code className="language-javascript">{review}</code></pre>}
       */}
      <Markdown
      rehypePlugins={[rehypeHighlight]}
      >
        {review}
      </Markdown>
    </div>
    </main>
    </>
  )

  
}



export default App
