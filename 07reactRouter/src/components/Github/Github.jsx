import { useLoaderData } from 'react-router-dom';

// import { useEffect, useState } from 'react';

function Github() {
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/Bhanu-Thapa')
  //       .then((response) => response.json())
  //       .then((datain) => {
  //         console.log(datain);
  //         setData(datain);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="p-4 bg-green-500 flex gap-48 w-2/3 mx-auto">
        <img className="w-1/4" src={data.avatar_url} alt="" />
        <div className="mt-10">
          <h1 className="text-4xl text-white mb-8">Name - {data.login}</h1>
          <h3 className="text-white  text-3xl">
            Respository : {data.public_repos}
          </h3>
        </div>
      </div>
    </>
  );
}

export default Github;

async function githubLoader() {
  const response = await fetch('https://api.github.com/users/Bhanu-Thapa');
  return response.json();
}

export { githubLoader };

// export const githubLoader = async () => {
//   const response = await fetch('https://api.github.com/users/Bhanu-Thapa');
//   return response.json();
// };
