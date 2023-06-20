import type { GetServerSideProps } from "next";
import { TrackContainer } from "@/components/trackContainer";

export default function Home(props: any) {
  const { tracks } = props;
  return <TrackContainer tracks={tracks} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const trackResponse = await fetch(`${process.env.API}/track/all`, {
    method: "GET",
  });

  const tracks = await trackResponse.json();

  return {
    props: { tracks: tracks.data },
  };
};
