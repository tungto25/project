const URL_TABLE = "http://localhost:3000/table";
const URL_TABLE1 = "http://localhost:3000/table1";
const URL_FOOD = "http://localhost:3000/Food";
async function getAll(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // hoặc response.text() nếu không phải JSON
    console.log('Dữ liệu trả về:', data);
    return data; // có thể return nếu muốn dùng dữ liệu bên ngoài
  } catch (error) {
    console.error('Lỗi fetch:', error);
    return null; // hoặc throw error lại nếu muốn xử lý bên ngoài
  }
}
