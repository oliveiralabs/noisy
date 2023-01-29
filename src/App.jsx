import { useEffect, useState } from "react";

function App() {
  return <></>
}


function AppX() {
  let endpoint = 'https://oliveiralabs.github.io/noisy-sounds/index.json';
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [soundsArray, setSoundsArray] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(result => {
          setIsLoading(false);
          setSoundsArray(result);
        },

        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {soundsArray.map((item, index) => (
          <li key={index}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default App
