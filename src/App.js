import './App.css';
import { GetApi } from './components/GetApi';
import { PostApi } from './components/postApi';
// import GetContent from './GetContent';
//import PostContent from './PostContent';

export default function App()
{
  return(
<>
{/* <GetContent />
<PostContent /> */}
<header>Get Api</header>
<GetApi />
<header>Post Api</header>
<PostApi />
</>

  )
}

// import './App.css';
// import { useEffect, useState } from 'react';
// import {
//   Container,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   CardText,
//   Button
// } from 'reactstrap';
// import { Get, Post } from './hooks/useFetch/useFetch';


// function App() {
//   const [postResult, setPostResult] = useState([]);
//   const { data, loading} = Get('db');

// const getApi = ()=>{
// fetch('http://localhost:4001/db')
// .then(data=>data.json())
// .then(json=>setPostResult(JSON.stringify(json)))
// .then(()=>console.log(postResult))
// }
//   getApi();
  
//   const addPost = () =>{
//     fetch('http://localhost:4001/posts',
//       {
//         method:'POST',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify( {"name":"Rolo"} )
//     })
//     .then(getApi())
//   };
//     return (
//     <>
//       <section>

//         <Container>
//           <Card>
//             <h1>Hola Mundo!</h1>
//           </Card>
//         </Container>
//       </section>
//       <main >
//         <Card>
//           <CardHeader>
//             <CardTitle>
//               Respuesta 'GET'
//             </CardTitle>
//           </CardHeader>
//           <CardBody>
//             {loading&&<h1>Loading...</h1>}
//             <CardText>
//             {postResult}
//             </CardText>
// <Button onClick={addPost}>AddPost</Button>
//           </CardBody>
//         </Card>
//       </main>
//     </>
//   );
// }

// export default App;

