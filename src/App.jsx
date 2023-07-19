import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import TaskInput from './components/TaskInput';
import ProfileViewerWithSearch from './components/ProfileViewerWithSearch';

export default function App() {
  return (
    <>
    <TaskInput />
    <ProfileViewerWithSearch />
    <Footer />
    </>
  );
}
