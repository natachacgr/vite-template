import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className='flex max-h-screen min-h-screen flex-col !overflow-clip'>
      <main className='flex max-h-screen min-h-screen w-full items-center justify-center'>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
