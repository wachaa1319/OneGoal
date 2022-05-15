import React, { createContext, useContext } from "react";

// TODO goal type
export type Goal = {
  title: string;
  description: string;
  dueDate: Date;
  id: string;
  completed: boolean;
  problems: any[];
  todos: any[];
  logs: any[];
};

type Props = {
  children: React.ReactNode;
};

interface GoalContextInterface {
  goalNow: Goal;
  setGoalNow: (goal: Goal) => void;

  allGoals: Goal[];
}

export const GoalContext = createContext<GoalContextInterface>(
  {} as GoalContextInterface
);

export const GoalContextProvider = ({ children }: Props) => {
  const [goalNow, setGoalNow] = React.useState<Goal>({} as Goal);
  const [allGoals, setAllGoals] = React.useState<Goal[]>([]);

  return (
    <GoalContext.Provider value={{ goalNow, setGoalNow, allGoals }}>
      {children}
    </GoalContext.Provider>
  );
};
