import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectLength = (state) => state.contacts.items.length;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, textFilter = '') => {
    const lowerCaseFilter = textFilter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowerCaseFilter) ||
        contact.number.toLowerCase().includes(lowerCaseFilter)
    );
  }
);