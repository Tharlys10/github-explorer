import React, { useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repository.scss';

type Owner = {
  login: string;
  avatar_url: string;
}

type Repository = {
  name: string;
  description: string;
  html_url: string;
  owner: Owner;
}

export function RepositoryList() {
  // https://api.github.com/users/Tharlys10/repos
  const [repositories, setRepositories] = useState<Repository[]>([])

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
            return <RepositoryItem repository={repository} key={repository.name} />;
          })
        }

      </ul>
    </section>
  );
}