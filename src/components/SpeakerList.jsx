import SpeakerCard from "./SpeakerCard";

export default function SpeakerList() {
  return (
    <section>
      <h2>Speakers</h2>

      <SpeakerCard
        name="Max Mustermann"
        specialField="React und JavaScript"
        company="WebDev GmbH"
        online={true}
      />
      {/* <SpeakerCard
        name="Leonora Musterfrau"
        specialField="Html"
        company="Santoro GmbH"
        online={false}
      />
      <SpeakerCard
        name="Johannes Müller"
        specialField="Frontend"
        company="Frago GmbH"
        online={true}
      /> */}
    </section>
  );
}
