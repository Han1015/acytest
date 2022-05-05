const GET = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const POST = async (url, params) => {
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(params),
  };

  const res = await fetch(url, requestOptions);
  const data = await res.json();
  return data;
};
const POSTFORMDATA = async (url, params) => {
  const requestOptions = {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(params),
  };

  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const DELETE = () => {};
export { GET, POST, POSTFORMDATA, DELETE };
