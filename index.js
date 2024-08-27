import bridge from '@vkontakte/vk-bridge';

// ����� ⮪��� � �ࠢ��� �� ����� � �⥭� � ��㯯��
bridge.send('VKWebAppGetAuthToken', {
  "app_id": app52210495,  // ������� �� ID ��襣� ����-�ਫ������
  "scope": "wall,groups"  // ����訢��� �ࠢ� �� ����� � �⥭� � ��㯯��
}).then(data => {
  if (data.access_token) {
    // �ᯥ譮 ����稫� ⮪��
    console.log('Access Token:', data.access_token);
    // ���࠭�� ��� ⮪�� ��� �ᯮ�짮����� � ��襬 �����
  }
}).catch(error => {
  console.error('Error getting access token:', error);
});
