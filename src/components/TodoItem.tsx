import React from 'react';
import { Check, Circle, Trash2 } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex items-center bg-custom-light-orange p-3 rounded-md">
      <button
        onClick={onToggle}
        className={`mr-2 p-1 rounded-full ${
          todo.completed ? 'bg-custom-mint text-white' : 'bg-custom-cream'
        }`}
      >
        {todo.completed ? <Check size={16} /> : <Circle size={16} />}
      </button>
      <span className={`flex-grow ${todo.completed ? 'line-through text-custom-pink' : ''}`}>
        {todo.text}
      </span>
      <button
        onClick={onDelete}
        className="p-1 text-custom-pink hover:text-custom-peach"
      >
        <Trash2 size={16} />
      </button>
    </li>
  );
};

export default TodoItem;