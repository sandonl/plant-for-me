interface PhotoCardProps {}

const PhotoCard = ({}: PhotoCardProps) => {
  return (
    <div className="h-56 w-32 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
      I am a photo card
    </div>
  );
};
export default PhotoCard;
