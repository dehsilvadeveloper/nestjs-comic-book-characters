import * as bcrypt from 'bcrypt';

export const getUserSeederData = async () => {
  const roundsOfHashing = 10;

  return [
    {
      id: 1,
      name: 'Default App',
      email: 'default@app.com',
      password: await bcrypt.hash('defaultpassword', roundsOfHashing),
    },
    // Add more user data as needed
  ];
};
