export { queries };

const queries = {
  getUser: (_: any, { id }: { id: string }) => ({
    data: { id, name: 'Test User' },
    success: true
  })
};
