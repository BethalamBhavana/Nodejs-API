const usersList = [
  {
    username: "abc123",
    password: "abcpass",
    email: "abc@example.com",
    phone: "9876543210"
  },
  {
    username: "def123",
    password: "defpass",
    email: "def@example.com",
    phone: "9123456789"
  },
  {
    username: "ghi123",
    password: "ghipass",
    email: "ghi@example.com",
    phone: "9000000000"
  }
];

function getUser() {
  return usersList;
}

exports.allUsers = getUser;


