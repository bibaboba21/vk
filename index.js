// Подключение VK Bridge с использованием относительного пути
import bridge from './node_modules/@vkontakte/vk-bridge/dist/browser.min.js';

console.log('VK Bridge script loaded.');

if (typeof bridge === 'undefined') {
  console.error('VK Bridge is not defined.');
}

// Запрос токена с правами на доступ к стене и группам
console.log('Requesting access token...');
bridge.send('VKWebAppGetAuthToken', {
  "app_id": "52210495",
  "scope": "wall,groups"
}).then(data => {
  console.log('VKWebAppGetAuthToken response received.', data);
  if (data.access_token) {
    console.log('Access Token:', data.access_token);
    // Сохраните этот токен для использования в вашем парсере
  } else {
    console.log('No access token received.');
  }
}).catch(error => {
  console.error('Error getting access token:', error);
  console.error('Error details:', error.error_type, error.error_data);
});
