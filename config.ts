const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  DB_NAME: getEnvironmentVariable("DB_NAME"),
  NODE_ENV: getEnvironmentVariable("NODE_ENV"),
  MONGODB_URI: getEnvironmentVariable("MONGODB_URI"),
  POSTS_COLLECTION_NAME: getEnvironmentVariable("POSTS_COLLECTION_NAME"),
};