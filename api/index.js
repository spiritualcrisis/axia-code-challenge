const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const request = async (url, options = {}) => {
  console.log(url, options);
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (e) {
    // send this to backend for tracking errors
    throw new Error(e);
  }
};
export async function getAllData() {
  await sleep(2000);
  const response = await request("/api/app-data");
  return response.data;
}

export async function getUserApps() {
  const response = await request("/api/user-apps");
  return response.data;
}

export async function saveUserApps(selectedApps) {
  await sleep(2000);
  return await request("/api/save-data", {
    body: JSON.stringify(selectedApps),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
