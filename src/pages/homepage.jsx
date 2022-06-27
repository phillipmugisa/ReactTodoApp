// react
import React from "react";
// context
import { AppContextProvider } from "../hooks/appContext";

// components
import TaskAppCard from "../components/taskAppCard";

const Homepage = () => {
  return (
    <AppContextProvider>
      <main className="card-area grid">
        <TaskAppCard />
      </main>
    </AppContextProvider>
  );
};

export default Homepage;
