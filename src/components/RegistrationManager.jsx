import { useState, useEffect } from "react";
import RegistrationForm from "./RegistrationForm";

import events from "../data/events";
import RegistrationList from "./RegistrationList";

function RegistrationManager() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    participants: 1,
    eventId: "",
  });
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState("");

  const participantsCount = registrations.reduce(
    (sum, registration) => sum + registration.participants,
    0,
  );

  useEffect(() => {
    const summary = events.map((event) => {
      const eventRegistrations = registrations.filter(
        (r) => r.eventId === event.id,
      );
      const totalParticipants = eventRegistrations.reduce(
        (sum, r) => sum + r.participants,
        0,
      );
      return {
        Event: event.title,
        Anmeldungen: eventRegistrations.length,
        Teilnehmer: totalParticipants,
      };
    });

    console.table(summary);
  }, [registrations]);

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    if (name === "participants") {
      newValue = Number(value);
    }

    if (name === "eventId") {
      newValue = value === "" ? "" : Number(value);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie Ihren Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse an!");
      return;
    }

    if (formData.eventId === "") {
      setError("Bitte wählen Sie eine Veranstaltung aus!");
    }

    const newRegistration = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      participants: formData.participants,
      eventId: formData.eventId,
    };

    setRegistrations([...registrations, newRegistration]);

    setFormData({
      name: "",
      email: "",
      participants: 1,
      eventId: "",
    });
  }

  function handleDeleteRegistration(id) {
    setRegistrations(
      registrations.filter((registration) => registration.id !== id),
    );
  }

  return (
    <section>
      <h2>Anmeldungen</h2>

      <RegistrationForm
        formData={formData}
        error={error}
        events={events}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h3>Aktuelle Anmeldungen</h3>

      <RegistrationList
        registrations={registrations}
        participantsCount={participantsCount}
        events={events}
        onDelete={handleDeleteRegistration}
      />
    </section>
  );
}

export default RegistrationManager;
