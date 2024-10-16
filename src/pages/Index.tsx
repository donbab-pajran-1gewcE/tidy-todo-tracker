import React from 'react';
import TodoList from '../components/TodoList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 font-['Kanit']">My To-do List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;