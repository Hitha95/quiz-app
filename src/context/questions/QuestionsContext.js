import { createContext, useContext } from "react";
import data from "../../Data/data.json";

const QuestionsContext = createContext();

export const QuestionsContextProvider = ({ children }) => {
  return (
    <QuestionsContext.Provider value={data}>
      {children}
    </QuestionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionsContext);
