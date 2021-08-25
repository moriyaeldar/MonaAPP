// const { Link } = ReactRouterDOM;

export function NotePreview({ note }) {
  return (
    <article className="note-preview">
      <img src={note.info.url} />
      <h3>{note.info.title}</h3>
      <h3>{note.info.txt}</h3>
      {/* <Link to={`/note/${note.id}`}>
        <button className="open">open</button>
      </Link> */}
    </article>
  );
}