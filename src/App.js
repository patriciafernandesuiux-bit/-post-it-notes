import React, { useState } from 'react';
import './App.css';
import PostIt from './components/PostIt';

// Componente do Formulário (NoteForm) - Sem alterações
function NoteForm({ onAddNote }) {
  // ... (código do NoteForm permanece o mesmo)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    onAddNote(title, content);

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <h2>Criar Nova Nota</h2>
      <input
        type="text"
        placeholder="Título da Nota"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Conteúdo da Nota"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Adicionar Post-it</button>
    </form>
  );
}

// Componente Principal (App)
function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Primeira Nota", content: "Este é o meu primeiro post-it em React! Que legal!" },
    { id: 2, title: "Lembrete", content: "Não esquecer de estudar sobre 'useState' e 'props' no React." },
    { id: 3, title: "Ideia de Projeto", content: "Criar um clone do Trello usando este conceito de notas." },
  ]);

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(), 
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  // 1. NOVA FUNÇÃO: Função para deletar uma nota
  const deleteNote = (idToDelete) => {
    // Filtra o array, mantendo apenas as notas cujo ID é diferente do ID a ser deletado
    const updatedNotes = notes.filter(note => note.id !== idToDelete);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Minhas Anotações</h1>
      
      <NoteForm onAddNote={addNote} />

      <div className="notes-container">
        {notes.map(note => (
          <PostIt 
            key={note.id}
            id={note.id} // 2. Passe o ID da nota como prop
            title={note.title} 
            content={note.content} 
            onDelete={deleteNote} // 3. Passe a função de exclusão como prop
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
