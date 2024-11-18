import React, { useEffect, useState } from 'react';
import './Repositorios.css'; 

function Repositorios() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/joanafalcaos/repos');
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return <p>Carregando repositórios...</p>;
  }

  return (
    <div className="repos-container">
      <h2>Meus Repositórios</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repositorios;
