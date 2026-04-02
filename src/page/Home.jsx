import React from 'react'
// import { Img } from '../components/body'

// import { useEffect, useState } from 'react';

// export const Home = () => {
//   return (
//     <div>
//       <Img />
//     </div>
//   )
// }


// export const Home = () => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 text-center space-y-6">
//         <h1 className='text-4xl font-bold text-red'>
//           {count}
//         </h1>

//         <button
//         onClick={() => setCount(count + 1)}
//         className="px-6 py-3 bg-blue-500 text-red rounded-full hover:bg-blue-600 transition duration-300"
//         >
//         Increase
//         </button>
//       </div>
//     </div>
//   );
// };

// export const Home = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('Component mounted');
//     fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
//       if (!res.ok) {
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
//     }).then(data => setData(data)).catch(err => setError(err.message)).finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100'>
//       <div className='bg-white shadow-lg rounded-2xl p-8 text-center space-y-6'>
//         <h1 className='text-2xl font-semibold text-center font-black'>
//           <Posts></Posts>
//         </h1>
//         {loading && <p className='text-gray-50'>Loading...</p>}
//         {error && <p className='text-red-500'>{error}</p>}
//         {!loading && !error && (
//           <p className='text-lg text-gray-50'>
//             {data.length} posts
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };


// test useEffect

// export const Home = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // test loading short
//     // console.log('Component mounted');

//     // loading 2 seconds
//     const timer = setTimeout(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return res.json();
//       })
//       .then(data => setData(data))
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//     }, 2000);
//     return () => clearTimeout(timer);
//     // dont put 2000 and return if don't want to test loading 2 seconds, 

//   }, []);

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100'>
//       <div className='bg-white shadow-lg rounded-2xl p-8 text-center space-y-6'>

//         <h1 className='text-2xl font-bold'>
//           Posts
//         </h1>

//         {loading && <p className='text-gray-500'>Loading...</p>}

//         {error && <p className='text-red-500'>{error}</p>}

//         {/* {!loading && !error && (
//           <p className='text-lg text-gray-700'>
//             {data.length} posts
//           </p>
//         )} */}


//         {!loading && !error && (
//           <ul className="text-left max-h-60 overflow-y-auto">
//             {data.slice(0, 5).map(post => (
//               <li key={post.id} className="mb-2 border-b pb-2">
//                 {post.title}
//               </li>
//             ))}
//           </ul>
//         )}

//       </div>
//     </div>
// );
// }


// test props= parent const=user= child

// export const Home = () => {
//   return (
//     <div className='flex items-center justify-center min-h-screen bg-blue-200'>
//       <User name="Sothea Lisa" age={19} />
//     </div>
//   );
// };

// const User = ({ name, age}) => {
//   return (
//     <div className='bg-blue-500 p-4 rounded-lg shadow'>
//       <h2 className='text-xl font-bold'>{name}</h2>
//       <p className='text-white-600'>Age: {age} years old</p>
//     </div>
//   );
// };

import { useState } from 'react';

const Profile = ({ username }) => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md text-center space-y-4'>
      <h1 className='text-2xl font-bold'>{username}</h1>

      <p className='text-gray-600'>
        Status:
        <span
          className={
            isOnline ? 'text-green-500' : 'text-red-500'
          }
        >{
            isOnline ? 'Online' : 'Offline'}
        </span>
      </p>

      <button
        onClick={() => setIsOnline(!isOnline)}
        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition'
      >
        Toggle Status
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <Profile username="Sothea Lisa" />
    </div>
  );
}
