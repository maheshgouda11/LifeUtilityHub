import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SubscriptionManager from './SubscriptionManager';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Task from "../src/Task Scheduler/Task.js"
import PasswordManager from '../src/Password Manager/PasswordManager.js'
import ExpenseManager from './ExpenseManager.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='' element={<Home />} />
          <Route path="subscription" element={<SubscriptionManager />} />
          <Route path="task" element={<Task />} />
          <Route path="pmanager" element={<PasswordManager />} />
          <Route path="expense" element={<ExpenseManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
