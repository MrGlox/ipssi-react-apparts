import { useEffect, useState } from "react";

const FetchData = () => {
  // state = { error: false, loading: true, data: "Loading..." };
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("Loading...");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const data = await response.json();
      console.log(data);

      //  this.setState({ loading: false, data });
      setLoading(false);
      setData(data);
    } catch (err) {
      // this.setState({ error: true });
      setError(true);
      throw err;
    }
  };

  //   useEffect(() => {}) // componentDidMount et componentDidUpdate
  //   useEffect(() => {
  //       return () => {} // componentWillUnMount
  //   }, [data]) // componentDidMount et componentDidUpdate data

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>ERROR</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
};

export default FetchData;
