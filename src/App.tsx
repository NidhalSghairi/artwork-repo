import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function App() {
  const { artworkId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://storage.googleapis.com/ya-misc/interviews/front/examples/${artworkId}.json`
      )
      .then((response) => setData(response.data));
  }, [artworkId]);

  return <div></div>;
}

export default App;
