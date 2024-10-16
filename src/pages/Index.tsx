import React from 'react';
import TodoList from '../components/TodoList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-custom-peach to-custom-pink flex items-center justify-center p-4">
      <div className="bg-custom-cream rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#FFA07A] font-['Kanit']">My To-do List</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;