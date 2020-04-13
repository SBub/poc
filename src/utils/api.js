const recoverIdentity = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // ✅ success
      res("gdashdghjsgdjashgdjasdg");

      // ❌ failure
      // rej("No identity match");
    }, 3000);
  });
};

export default { recoverIdentity };
