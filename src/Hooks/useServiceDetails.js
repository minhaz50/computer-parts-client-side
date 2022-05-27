import React, { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [services, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);

  return [services];
};

export default useServiceDetails;
