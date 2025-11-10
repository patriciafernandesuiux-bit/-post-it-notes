import React from 'react';
import './PostIt.css';

// 1. Receba 'id' e 'onDelete' nas props
function PostIt({ id, title, content, onDelete }) {
  return (
    <div className="post-it">
      <h3 className="post-it-title">{title}</h3>
      <p className="post-it-content">{content}</p>
      
      {/* 2. Adicione o evento onClick ao botão */}
      <button 
        className="delete-button"
        onClick={() => onDelete(id)} // 3. Chama onDelete passando o ID da nota
      >
        X
      </button>
    </div>
  );
}

export default PostIt;
