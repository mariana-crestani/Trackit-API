async function getUser(email) {
  await usersCollection.findOne({ email });
}

async function createUser(name, email, image, hashPassword) {
  await usersCollection.insertOne({ name, email, image, hashPassword });
}

async function validatePassword(password, userPassword) {}

const authRepository = {
  getUser,
  validatePassword,
  createUser,
};

export default authRepository;
