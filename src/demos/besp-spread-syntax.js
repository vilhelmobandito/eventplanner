setFormData({
  ...formData,
  [name]: value,
});

formData = {
  username: "Anna",
  email: "anna@example.com",
  phone: "",
  participants: 1,
};

const { name, value } = event.target;

name = "email";
value = "anna@example.com";

setFormData({
  ...formData,
  email: "anna@example.com",
});

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  participants: 1,
});
