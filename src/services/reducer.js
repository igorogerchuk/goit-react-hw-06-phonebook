const contactsReducer = (state, action) => {
  switch (action.type) {
    case "addContact":
      return [...state, action.payload.contact];
    case "removeContact":
      return state.filter(contact => contact.id !== action.payload.contactId);
    default:
      return state;
  }
};

export default contactsReducer;
