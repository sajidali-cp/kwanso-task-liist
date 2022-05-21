import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import BulkDeletePage from "../pages/BulkDeletePage";
import CreateTaskPage from "../pages/CreateTaskPage";
import ListTaskPage from "../pages/ListTaskPage";

export default function TaskRoute() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/list-tasks" />} />
        <Route path="/list-tasks" element={<ListTaskPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
        <Route path="/bulk-delete" element={<BulkDeletePage />} />
      </Routes>
    </Layout>
  );
}
