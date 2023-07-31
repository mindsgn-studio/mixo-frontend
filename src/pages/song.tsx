import type { GetServerSideProps } from 'next';
import { TrackContainer } from '@/components/trackContainer';

export default function song(props: any) {
  const { tracks } = props;
  return <TrackContainer tracks={tracks} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const trackResponse = await fetch(`${process.env.API}/song/all`, {
    method: 'GET'
  });

  const tracks = await trackResponse.json();

  return {
    props: { tracks: tracks.data }
  };
};
