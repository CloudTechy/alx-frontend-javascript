// 0-main.js
import getFullResponseFromAPI from './0-promise';

async function main() {
  try {
    const response = await getFullResponseFromAPI(true);
    console.log(response);
  } catch (error) {
    console.error('Error:', error.message);
  }

  try {
    const response = await getFullResponseFromAPI(false);
    console.log(response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
