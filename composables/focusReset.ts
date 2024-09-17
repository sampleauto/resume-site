export const useRouterFocusReset = () => {
  onMounted(() => {
    const router = useRouter();
    router.afterEach((from, to) => {
      if (from.path !== to.path) {
        nextTick(() => {
          document.body.tabIndex = 0;
          document.body.focus();
          document.body.tabIndex = -1;
        });
      }
    });
  });
};
