import { AllTracksContainer } from "./allTracksContainer";

interface TrackContainerProps {
  tracks?: any;
}

export const TrackContainer = ({ tracks }: TrackContainerProps) => {
  return <AllTracksContainer tracks={tracks} />;
};
