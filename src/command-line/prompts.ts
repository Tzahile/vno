import { terminalOptions } from "../lib/types.ts";
import { _ } from "../lib/deps.ts";

export const msgs = {
  one: "\nPlease enter a project title",
  two: "\nWhat would you like to name your root Vue component?(recommend App)",
  thr: "\nName of additional components?(enter 'none' for default)",
  four: "\nPort number for server",
  five: "\nConfirm these results and create your project?(yes/no)",
};

export const userOptions: terminalOptions = {
  title: "your project",
  root: "App",
  child: "HelloVno",
  port: "3000",
};
