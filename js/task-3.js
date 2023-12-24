/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай класу статичний метод Priopity,
 *? який буде повертати об'єкт із пріоритетами.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return {
      HEIGHT: "hight",
      LOW: "low",
    };
  }
  constructor(items) {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
    return note;
  }
  removeNote(text) {
    const idx = this.items.findIndex((item) => item.text === text);
    if (idx !== -1) {
      const removed = this.items.splice(idx, 1);
      return removed[0];
    }
  }
  updatePriority({ text, priority }) {
    const idx = this.items.findIndex((item) => item.text === text);
    if (idx !== -1) {
      this.items[idx].priority = priority;
      return this.items[idx];
    }
  }
}
const note1 = new Notes();
console.log(note1.addNote({ text: "Note1", priority: Notes.Priority().LOW }));
console.log(note1.addNote({ text: "Note2", priority: Notes.Priority().LOW }));
console.log(note1);
// console.log(note1.removeNote("Note1"));
console.log(
  note1.updatePriority({ text: "Note1", priority: Notes.Priority().HEIGHT })
);
console.log(note1);
