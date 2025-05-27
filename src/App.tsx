import { Pagination } from '@mui/material';
import './App.css';

function App() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="text-3xl font-bold underline">Welcome to Tauri + React</div>
      <Pagination count={10} variant="outlined" color="secondary" />
    </main>
  );
}

export default App;
