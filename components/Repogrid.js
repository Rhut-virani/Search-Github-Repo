import Repocard from './Repocard';

function Repogrid({ repositories }) {
  return (
    <>
      {repositories?.map((repo) => {
        return (
          <Repocard
            key={repo.id}
            name={repo.name}
            createdAt={repo.createdAt}
            forkCount={repo.forkCount}
            stargazerCount={repo.stargazerCount}
            isPrivate={repo.isPrivate}
            url={repo.url}
            description={repo.description}
            primaryLanguage={repo.languages.edges[0]?.node.name}
          />
        );
      })}
    </>
  );
}

export default Repogrid;
