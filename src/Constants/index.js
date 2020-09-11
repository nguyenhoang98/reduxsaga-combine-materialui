import React from "react";
import AdminHomePage from "../Containers/AdminHomePage/AdminHomePage";
import TaskBoard from "../Containers/TaskBoard";

export const API_ENDPOINT = "http://localhost:8888";
export const STATUSES = [
  {
    value: 0,
    label: "REALLY",
  },
  {
    value: 1,
    label: "IN PROGESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const admin_routers = [
  {
    path: "/",
    component: () => <AdminHomePage />,
    exact: true,
    name: "Trang Quản Trị ",
  },
  {
    path: "/task-board",
    component: () => <TaskBoard />,
    exact: true,
    name: "Quản Lí Công Việc",
  },
];
