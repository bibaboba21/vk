import bridge from '@vkontakte/vk-bridge';

console.log('VK Bridge script loaded.');

// �஢�ઠ ����㯠 � VK Bridge
if (typeof bridge === 'undefined') {
  console.error('VK Bridge is not defined.');
}

// ����� ⮪��� � �ࠢ��� �� ����� � �⥭� � ��㯯��
console.log('Requesting access token...');
bridge.send('VKWebAppGetAuthToken', {
  "app_id": "52210495",  // ������ ��� ID �ਫ������ ��� ��ப�
  "scope": "wall,groups"  // ����訢��� �ࠢ� �� ����� � �⥭� � ��㯯��
}).then(data => {
  console.log('VKWebAppGetAuthToken response received.', data);
  if (data.access_token) {
    console.log('Access Token:', data.access_token);
    // ���࠭�� ��� ⮪�� ��� �ᯮ�짮����� � ��襬 �����
  } else {
    console.log('No access token received.');
  }
}).catch(error => {
  console.error('Error getting access token:', error);
  console.error('Error details:', error.error_type, error.error_data);
});
