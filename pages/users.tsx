import ModalUser from "@/components/modal-user";
import { GetServerSideProps } from "next";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
}

const api_url = "https://jsonplaceholder.typicode.com/users";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(api_url);
  const data: User[] = await res.json();
  return {
    props: { data },
  };
};

const Users = ({ data }: { data: User[] }) => {
  return (
    <>
      <div className="w-11/12 m-auto">
        <div className="pt-8 pl-8">
          <Link href="/">
            <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Home
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 p-6 content-center gap-2 justify-items-center">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="border-2 border-gray-400 rounded-md p-6 w-3/4"
            >
              <h2 className="font-semibold text-lg ">
                {item?.name}{" "}
                <span className="text-sm font-light text-gray-400">
                  ({item?.username})
                </span>
              </h2>
              <div className="pt-3 font-light ">
                <p>Phone : {item?.phone}</p>
                <p>Email : {item?.email}</p>
              </div>
              <div className="pt-3 flex justify-end">
                <ModalUser
                  name={item?.name}
                  username={item?.username}
                  phone={item?.phone}
                  email={item?.email}
                  city={item?.address?.city}
                  street={item?.address?.street}
                  company={item?.company?.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Users;
