import { getAllUsers } from "@/api/apiUsers";
import { User } from "@/types/types";
import { useEffect, useState } from "react";

const useUsers = () => {
  // const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState<User[]>([]);
  const [applicants, setApplicants] = useState<User[]>([]);

  const fetchCompanies = async () => {
    const res = await getAllUsers();
    // console.log(res);
    const resCompanies = res.filter((user: User) => user.profileType === "company");
    const resApplicants = res.filter((user: User) => user.profileType === "applicant");

    setCompanies(resCompanies);
    setApplicants(resApplicants);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return { companies, applicants };
};

export default useUsers;