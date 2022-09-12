

import Navbar from './Navbar';


const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>

      <div className='my-page'>
        {props.children}
        <Navbar />
      </div>

    </>
  );
}

export default Layout;
