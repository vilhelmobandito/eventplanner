export default function SpeakerCard({ name, specialField, company, online }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>Area: {specialField}</p>
      <p>Firma: {company}</p>
      <p>{online ? "Verfügbar" : "Nicht verfügbar"}</p>
    </article>
  );
}
