import React, { useEffect, useState } from 'react';

interface UserInfo {
  user_id: number;
  username: string;
  email: string;
}

const LoginInfoComponent: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState<UserInfo[]>([]);

  useEffect(() => {
    fetch('../loginInfo')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch login info');
        }
        return response.json();
      })
      .then(data => {
        setLoginInfo(data);
      })
      .catch(error => {
        console.error('Error fetching login info:', error);
      });
  }, []);

  return (
    <div>
      <h1>Login Information</h1>
      <table>
        <thead>
          <tr>
            <th>User ID  </th>
            <th>Username   </th>
            <th>Email   </th>
          </tr>
        </thead>
        <tbody>
          {loginInfo.map(info => (
            <tr key={info.user_id}>
              <td>{info.user_id}</td>
              <td>{info.username}</td>
              <td>{info.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginInfoComponent;