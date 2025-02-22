import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Entry, EntryContextType } from "../@types/context";
import { EntryContext } from "../utilities/globalContext";

export default function NewEntry() {
  const emptyEntry: Entry = { title: "", description: "", created_at: new Date(), scheduled_at: new Date() };
  const { saveEntry } = useContext(EntryContext) as EntryContextType;
  const [newEntry, setNewEntry] = useState<Entry>(emptyEntry);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewEntry({
      ...newEntry,
      [event.target.name]: event.target.value,
    });
  };
  const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
    try {
      
        saveEntry(newEntry);
        setNewEntry(emptyEntry);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 dark:bg-gray-600 p-8 rounded-md dark:text-gray-900">
      <label className="text-gray-900 dark:text-white" htmlFor="title">Title</label>
      <input
        className="p-3 rounded-md"
        type="text"
        placeholder="Title"
        name="title"
        value={newEntry.title}
        onChange={handleInputChange}
      />
      <label className="text-gray-900 dark:text-white" htmlFor="description">Description</label>
      <textarea
        className="p-3 rounded-md"
        placeholder="Description"
        name="description"
        value={newEntry.description}
        onChange={handleInputChange}
      />
      <label className="text-gray-900 dark:text-white" htmlFor="created_at">Created at</label>
      <input
        className="p-3 rounded-md"
        type="date"
        name="created_at"
        value={new Date(newEntry.created_at).toISOString().split("T")[0]}
        onChange={handleInputChange}
      />
      <label className="text-gray-900 dark:text-white" htmlFor="scheduled_at">Scheduled at</label>
      <input
        className="p-3 rounded-md"
        type="date"
        name="scheduled_at"
        value={new Date(newEntry.scheduled_at).toISOString().split("T")[0]}
        onChange={handleInputChange}
      />
      <button
        onClick={(e) => {
          handleSend(e);
        }}
        className="bg-blue-400 hover:bg-blue-600 font-semibold text-white dark:text-gray-900 p-3 rounded-md"
      >
        Create
      </button>
    </section>
  );
}
