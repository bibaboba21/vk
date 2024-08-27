// Убедитесь, что vk-bridge успешно подключен
console.log('VK Bridge script loaded.');

if (typeof vkBridge === 'undefined') {
  console.error('VK Bridge is not defined.');
}

// Запрос токена с правами на доступ к стене и группам
console.log('Requesting access token...');
vkBridge.send('VKWebAppGetAuthToken', {
  "app_id": 52210495,  // Уберите кавычки, чтобы передать app_id как число
  "scope": "wall,groups"  // Запрашиваем права на доступ к стене и группам
}).then(data => {
  console.log('VKWebAppGetAuthToken response received.', data);
  if (data.access_token) {
    console.log('Access Token:', data.access_token);
    // Используйте этот токен в вашем парсере
  } else {
    console.log('No access token received.');
  }
}).catch(error => {
  console.error('Error getting access token:', error);
  console.error('Error details:', error.error_type, error.error_data);
});
