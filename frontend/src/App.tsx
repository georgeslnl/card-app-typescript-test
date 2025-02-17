import React from "react";
import NavBar from './components/NavBar'
import SettingsPanel from "./components/SettingsPanel";
import AllEntries from './routes/AllEntries'
import NewEntry from './routes/NewEntry'
import EditEntry from './routes/EditEntry'
import { EntryProvider } from './utilities/globalContext'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
        <Route path="/" element={<AllEntries/>}>
        </Route>
        <Route path="create" element={<NewEntry/>}>
        </Route>
        <Route path="edit/:id" element={<EditEntry/>}>
        </Route>
      </Routes>
    </EntryProvider>
    </Router>
    </section>
    
  );
}
