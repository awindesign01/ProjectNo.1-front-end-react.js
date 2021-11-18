import { useAuth } from "../Context/AuthProvider";

const PageProfile = () => {
   const dataUser = useAuth();
   return <nav className="mx-auto mt-4 w-4/5 h-48 bg-white rounded-lg shadow-lg">
      <h1>name: {dataUser.name}</h1>
   </nav>;
}
 
export default PageProfile;