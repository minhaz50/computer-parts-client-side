import React, { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [services, setService] = useState({});

  useEffect(() => {
    const url = `https://nameless-thicket-75744.herokuapp.com/products/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return [services];
};

export default useServiceDetails;
