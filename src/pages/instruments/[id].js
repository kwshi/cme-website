// import { useRouter } from 'next/router';
import Footer from 'components/Footer';
import InstrumentHeader from 'components/InstrumentHeader';
import NavBar from 'components/NavBar';
import PlayerDirectory from 'components/PlayerDirectory';

import instruments from 'data/instruments';
import players from 'data/players';
import { Box, Divider } from '@chakra-ui/react';

const InstrumentPage = ({ instrument }) => {
  if (!instrument) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Box bgColor="black" overflowX="hidden" overflowY="hidden">
        <NavBar />
        <InstrumentHeader instrument={instrument} />
        <Divider
          borderColor="gray.100"
          borderWidth="1px"
          my="9px"
          bgColor="black"
          mx="auto"
          width="full"
        />
        <PlayerDirectory
          players={players.filter((player) => {
            return instrument.players.includes(player.name);
          })}
        />
        <Footer />
      </Box>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = instruments.map((instrument) => ({
    params: { id: instrument.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const instrument = instruments.find((item) => item.id === params.id);

  return { props: { instrument } };
}

export default InstrumentPage;
