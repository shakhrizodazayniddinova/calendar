import React from 'react';
import './App.scss';
import { Calendar } from '../Calendar/Calendar';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Calendar/>
    </>
  );
};