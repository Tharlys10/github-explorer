import React, { useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repository.scss';

export function RepositoryList() {
  // https://api.github.com/users/Tharlys10/repos
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/Tharlys10/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {
          repositories.map(repository => {
            return <RepositoryItem repository={repository} key={repository.id} />;
          })
        }

      </ul>
    </section>
  );
}