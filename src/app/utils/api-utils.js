export const callApi = async (path, options) => {
  try {
    const response = await fetch(path, options);
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(`[callApi/${path}] failed with - ${response.statusText}`);
    }
    return body;
  } catch (err) {
    console.error(err);
    return [];
  } finally {
    console.log('[callApi] done');
  }
};

export const getEntriesByType = async (type) => {
  return callApi(type === 'post' ? 'api/posts/get-posts' : '');
};

export const saveJsonEntryByType = async (type, jsonEntity) => {
  if(jsonEntity) {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonEntity)
    };
    const response = callApi(type === 'post' ? 'api/posts/save-post' : '', options);
    return response;
  }
};