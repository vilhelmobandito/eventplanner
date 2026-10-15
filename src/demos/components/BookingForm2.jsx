import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    participants: 1,
  });

  const [error, setError] = useState("");
  const [successBooking, setSuccessBooking] = useState(null);

  /* ? Mit diesem Eventhandler ersetzen wir die Arrow-Funktionen an den einzelnen Formularfeldern. Diese referenzieren dann alle auf diesen Eventhandler. */
  function handleChange(event) {
    const { name, value } = event.target;

    /* ? Bei numerischen Werten sollte das value des Formularfeldes (string) und den number-Datetyp umgewandelt werden. */
    const newValue = name === "participants" ? Number(value) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setSuccessBooking(null);

    if (formData.name.trim() === "") {
      setError("Bitte geben Sie einen Namen ein!");
      return;
    }

    if (formData.email.trim() === "") {
      setError("Bitte geben Sie eine E-Mail-Adresse ein!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
      return;
    }

    if (formData.phone.trim() !== "" && formData.phone.trim().length < 5) {
      setError(
        "Bitte geben Sie eine gültige Telefonnummer ein (mind. 5 Zeichen)!",
      );
      return;
    }

    if (formData.participants < 1) {
      setError("Es muss mindestens eine Person angemeldet werden!");
      return;
    }

    setSuccessBooking({
      name: formData.name,
      participants: formData.participants,
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      participants: 1,
    });

    console.log({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      participants: formData.participants,
    });
  }

  return (
    <section>
      {error && <p className="form-error">{error}</p>}

      {successBooking && (
        <p className="form-success">
          Vielen Dank <strong>{successBooking.name}</strong>! Die Buchung für{" "}
          {successBooking.participants} Person(en) wurde gespeichert.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name *</label>{" "}
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email *</label>{" "}
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Telefonnummer</label>{" "}
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="participants">Teilnehmer *</label>{" "}
          <input
            type="number"
            name="participants"
            id="participants"
            min="1"
            value={formData.participants}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Buchen</button>
      </form>
    </section>
  );
}

export default BookingForm;
