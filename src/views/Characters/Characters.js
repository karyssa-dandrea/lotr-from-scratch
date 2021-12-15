import React from 'react';
import CharacterList from '../../components/Characters/CharacterList';
import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';
import Controls from './Controls';

export default function Characters() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [race, setRace] = useState('All');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(race);
      setData(data);
    };
    fetchData();
  }, [race]);

  const handleClick = async () => {
    const data = await fetchCharacters(race, query);
    setData(data);
  };

  return (
    <div>
      <h1>Characters</h1>
      <Controls {...{ query, setQuery, race, setRace, handleClick }} />
      <CharacterList characters={data} />
    </div>
  );
}
