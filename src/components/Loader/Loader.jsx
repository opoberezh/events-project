import { RotatingTriangles } from 'react-loader-spinner';


const Loader = () => {
  return (
   
      <RotatingTriangles
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="rotating-triangles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  
 
   
   
  );
};

export default Loader;
