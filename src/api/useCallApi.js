import { useCallback, useState } from "react";

export const STATUS_LOADING = "status_loading";
export const STATUS_ERROR = "status_error";
export const STATUS_DEFAULT = "status_default";

export const useCallGetApi = (url, options = {}) => {
  const { defaultValue = null, config = null, defaultStatus } = options;

  const [payload, setPayload] = useState(defaultValue);

  // Reload indica si se debe volver a pedir los datos a la API
  const [status, setStatus] = useState(defaultStatus || STATUS_DEFAULT);
  const [errorInfo, setErrorInfo] = useState(null);

  const call = useCallback(async () => {
    setStatus(STATUS_LOADING);
    fetch(`${url}`, {
      method: "GET",
      ...config,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          // Si el estado no es exitoso (200-299), lanzar el error con el status y el mensaje si está disponible
          const message = result?.error || "Error desconocido";
          throw { status: response.status, message };
        }
        setPayload(result);
        setStatus(STATUS_DEFAULT);
      })
      .catch((err) => {
        setStatus(STATUS_ERROR);
        setErrorInfo(err);
      });
  }, [url]);
  return [payload, call, status, errorInfo];
};
