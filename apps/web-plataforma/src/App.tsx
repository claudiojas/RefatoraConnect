import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;