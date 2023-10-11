export const getToApi = (url, config) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...config?.headers, // Usamos el operador de encadenamiento opcional para manejar casos donde config pueda ser undefined
    },
    ...config,
  }).then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  });
};

export const postToApi = (url, body, config) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
    body: JSON.stringify(body),
    ...config,
  }).then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  });
};

export const putToApi = (url, body, config) => {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
    body: JSON.stringify(body),
    ...config,
  }).then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  });
};

export const deleteToApi = (url, body, config) => {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
    body: JSON.stringify(body),
    ...config,
  }).then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  });
};
