import React, {useEffect, useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:5000/news`

  const getData = async () => {
    fetch(url).then((resp) => {
      console.log('RESP ', resp)
    })
    // try {
    //   const response = await axios.get(url);
    //   setData(response.data);
    //   setError(null);
    // } catch (err: any) {
    //   setError(err.message);
    //   setData(null);
    // } finally {
    //   setLoading(false);
    // }
  };

  const saveData = async () => {
    try {
      const response = await axios.post(url);
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const url = `http://localhost:5000/news`
    // const getData = async () => {
    //   try {
    //     const response = await axios.get(url);
    //     setData(response.data);
    //     setError(null);
    //   } catch (err: any) {
    //     setError(err.message);
    //     setData(null);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    getData();
    // saveData();
  }, [loading]);

  return (
    <>
      <div className="App">
        {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
      </div>
    </>
  )
}

export default App;
