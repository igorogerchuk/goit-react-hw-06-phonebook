const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

const get = key => {
  try {
    const yourContacts = localStorage.getItem(key);
    return yourContacts ? JSON.parse(yourContacts) : null;
  } catch (err) {
    console.log(err);
  }

  return null;
};

export default {
  save,
  get
};
