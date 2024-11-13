import useGameTrailers from "../hooks/useGameTrailers";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailers(gameId);
  if (error) throw error;
  if (isLoading) return null;

  const firstTrailer = data.results[0];

  return (
    <>
      {firstTrailer ? (
        <video
          src={firstTrailer.data[480]}
          poster={firstTrailer.preview}
          controls
        />
      ) : null}
    </>
  );
};

export default GameTrailer;
