export const delay = (t: number) => {
  const { promise, resolve } = Promise.withResolvers();

  setTimeout(() => resolve(undefined), t);

  return promise;
};
