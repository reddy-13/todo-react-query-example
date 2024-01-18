import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { json } from "stream/consumers";

const UserDetail = () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()
  console.log("search params", searchParams.get('name'));
  console.log("location", location);

  return <div>

    <p>User {params?.id}</p>
  </div>;
};

export default UserDetail;
