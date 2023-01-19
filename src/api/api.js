import { server_url } from "../const/emotion";
export async function fetchData(emotion) {
    const response = await fetch(
      `${server_url}/emotion/${emotion}`
    );
    const data = await response.json();
    return data;
  }

export async function fetchFlowerData(flower) {
  const response = await fetch(
    `${server_url}/flower/${flower}`
  );
  const data = await response.json();
  return data;
}