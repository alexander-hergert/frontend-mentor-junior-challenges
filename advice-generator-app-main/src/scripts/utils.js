export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorMessage = "Could not load the data. Somthing went wrong.";
      return errorMessage;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {}
};
