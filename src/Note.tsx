type Props = {
  id: number;
  title: string;
  description: string;
};

function Note({ id: key, title, description }: Props) {
  console.log("from note", key)
  return (
    <div key={key}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Note;
