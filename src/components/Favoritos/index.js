import styled from 'styled-components';
import config from '/config.json';
import react from 'react';

const StyledFavoritos = styled.div`
  padding: 16px;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  section {
    display: flex;
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    border-radius: 50%;
    max-width: 100px;
    height: auto;
  }
  span {
    padding-top: 8px;
    display: block;
    padding-right: 24px;
    color: ${({ theme }) => theme.textColorBase || '#222222'};
  }
`;

export default function Favoritos() {
  return (
    <StyledFavoritos>
      <h2>AluraTubes Favoritos</h2>
      <section>
        {config.favorites.map((favorito, index) => {
          return (
            <div key={index}>
              <a target="_blank" href={favorito.github}>
                <img src={favorito.pp} />
              </a>
              <span>{favorito.name}</span>
            </div>
          );
        })}
      </section>
    </StyledFavoritos>
  );
}
