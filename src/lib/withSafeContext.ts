export const withSafeContext =
  <T>(hook: (...args: unknown[]) => T | null) =>
  (...args: unknown[]): T => {
    const hookRes = hook(...args);
    if (!hookRes) throw new Error(`${hook.name} must be used within context`);

    return hookRes;
  };
