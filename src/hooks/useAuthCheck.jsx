import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/user/userSlice";
import { useJwt } from "react-jwt";

export default async function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const token = localStorage?.getItem("betxfire_jwt");
  const { isExpired } = useJwt(token);
  if (isExpired) {
    localStorage.removeItem("betxfire_jwt");
  }

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.data) {
            dispatch(
              userLoggedIn({
                token: token,
                data: data?.data,
              })
            );
          }
        })
        .finally(() => {
          setAuthChecked(true);
        });
    }
  }, [dispatch, setAuthChecked, token]);

  return authChecked;
}
