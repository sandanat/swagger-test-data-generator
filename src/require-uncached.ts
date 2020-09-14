export default function requireUncached(module: string): void {
  delete require.cache[require.resolve(module)];
  return require(module);
}
