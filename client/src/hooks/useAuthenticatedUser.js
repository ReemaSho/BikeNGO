import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useAuthenticatedUser = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const path = "/user/authLogin";

    const onSuccess = (data) => {
        setAuthenticatedUser({
            ...data.user,
        });
        localStorage.setItem("user", data.accessToken);
    };
    const { isLoading, error, performFetch } = useFetch(path, onSuccess);

    useEffect(() => {
        authenticateUser();
    }, []);

    //fun to fetch user
    function authenticateUser() {
        const token = localStorage.getItem("user");

        if (token) {
            performFetch({
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    accessToken: token,
                },
            });
        }
    }

    return { authenticatedUser, isLoading, error };
};

export default useAuthenticatedUser;