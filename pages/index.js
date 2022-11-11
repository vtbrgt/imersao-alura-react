import React from 'react';
import config from '../config.json';
import styled from 'styled-components';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';
import Favoritos from '../src/components/Favoritos';
import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://rpwbrijcxfdgvmiwtuev.supabase.co';
const PUBLIC_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwd2JyaWpjeGZkZ3ZtaXd0dWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODk2NjksImV4cCI6MTk4Mzc2NTY2OX0.Lll4BNNfElyCPFyWidyOWJf5RwlDBsX_XvlK2iXMQPo';
const subapase = createClient(PROJECT_URL, PUBLIC_KEY);

function HomePage() {
  const [valorDoFiltro, setvalorDoFiltro] = React.useState('');
  const [playlists, setPlaylists] = React.useState({}); // config.playlists
  /* const playlists = {
    "one piece": []
  } */

  React.useEffect(() => {
    console.log('useEffect');
    subapase
      .from('video')
      .select('*')
      .then((dados) => {
        console.log(dados.data);
        dados.data.forEach((video) => {
          playlists[dados.data[0].playlist]?.push(video);
        });
        setPlaylists(playlists);
      });
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setvalorDoFiltro={setvalorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists} />
        <Favoritos />
      </div>
    </>
  );
}

export default HomePage;

/* function Menu() {
  return <div>Menu</div>;
}
 */

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color: fuchsia;
  background-image: url(${({ bg }) => bg});
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} target="_blank" href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
