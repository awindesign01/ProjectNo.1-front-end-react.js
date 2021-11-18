import { useAuth } from "../Context/AuthProvider";

const PageCheckout = () => {
   const auth = useAuth();
   return <nav className="mx-auto mt-4 w-4/5 h-48 bg-white rounded-lg shadow-lg">
      <p>userName : {auth.name}</p>
      <p>userEmail : {auth.email}</p>
      <p>userPhone : {auth.phoneNumber}</p>
   </nav>;
}
 
export default PageCheckout;