import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPosts = () => {

  const { user,emails, setEmails } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    if (user.email) {
      const data = async () => {
        const url = `https://game-review-server-side.vercel.app/myReviews?email=${user.email}`;
        const res = await fetch(url);
        const value = await res.json();
        setEmails(value);
      };
      data();
    }
  }, [user?.email]);

  console.log(emails);
  return (
    <div>
   {emails.length}
    </div>
  );
};

export default MyPosts;


