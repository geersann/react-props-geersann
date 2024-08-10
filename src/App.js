import React from 'react';
import './App.css';
import First from './First';

export default function App() {
  const items = [
    'Animals',
    'Anime',
    'Anti-Malware',
    'Art Design',
    'Books',
    'Business',
    'Calendar',
    'Cloud Storage',
    'File Sharing',
    'Animals',
    'Continuous Integration',
    'Cryptocurrency'
  ]

  const firstItemLowerCase = items[0].toLowerCase();

  return (
    <div>
      Some data:
      <First item={firstItemLowerCase} />
    </div>
  )
};