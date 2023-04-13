import React from 'react'
import {useState, useEffect} from 'react'

function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State Updated', word);
    }, [word]);

    useEffect(() => {
        console.log('State Updated', word2);
    }, [word2]);

    // no dependency array --> update for any state change
    // empty dependecy array --> execute once
    // passig in data --> only execute when those state variables are changed

  return (
    <>
        <input
            type="text"
            onChange={(e) => {
                setWord(e.target.value);
            }}
        />
        <h1>Let's get the difinition for {word}</h1>
    </>
  )
}

export default Dictionary