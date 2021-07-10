import React from 'react';

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <div>
        <img src={props.repository.owner.avatar_url} alt={props.repository.owner.login} />
        <span>{props.repository.owner.login}</span>
      </div>

      <a href={props.repository.html_url} target='_blank'>
        Acessar repositorio
      </a>
    </li>
  );
}