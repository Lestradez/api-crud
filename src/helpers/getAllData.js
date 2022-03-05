
const baseURL = "http://localhost:4001";

// const [getResult, setGetResult] = useState(null);
const fortmatResponse = (res) => {
  return JSON.stringify(res, null, 2);
}

export default async function getAllData( setGetResult, id ) {
  const loading = true;
  if (id==='') id='db';
  try {
    const res = await fetch(`${baseURL}/${id}`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }
    const data = await res.json();
    const result = {
      status: res.status + "-" + res.statusText,
      headers: {
        "Content-Type": res.headers.get("Content-Type"),
        "Content-Length": res.headers.get("Content-Length"),
      },
      length: res.headers.get("Content-Length"),
      data: data,
    };
    setGetResult({"data":data,"status":result.status,"loading":false});
  } catch (err) {
    setGetResult(err.message);
  }
}