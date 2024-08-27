import bridge from '@vkontakte/vk-bridge';

// Запрос токена с правами на доступ к стене и группам
bridge.send('VKWebAppGetAuthToken', {
  "app_id": app52210495,  // Замените на ID вашего мини-приложения
  "scope": "wall,groups"  // Запрашиваем права на доступ к стене и группам
}).then(data => {
  if (data.access_token) {
    // Успешно получили токен
    console.log('Access Token:', data.access_token);
    // Сохраните этот токен для использования в вашем парсере
  }
}).catch(error => {
  console.error('Error getting access token:', error);
});
