import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SettingsPanel from "./components/SettingsPanel";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  return (
    <section>
      <Router>
        <EntryProvider>
          <div className="grid grid-cols-3 place-items-center">
            <NavBar></NavBar>
            <SettingsPanel></SettingsPanel>
          </div>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
