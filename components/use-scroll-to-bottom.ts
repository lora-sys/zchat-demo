import { useEffect, useRef, type RefObject } from 'react';

export function useScrollToBottom<T extends HTMLElement>(): [
  RefObject<T>,
  RefObject<T>,
] {
  const containerRef = useRef<T>(null);
  const endRef = useRef<T>(null);
  const shouldScrollRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    const end = endRef.current;

    if (container && end) {
      // 监听滚动事件，判断用户是否在底部
      const handleScroll = () => {
        const isAtBottom =
          container.scrollHeight -
            container.scrollTop -
            container.clientHeight <
          100;
        shouldScrollRef.current = isAtBottom;
      };

      container.addEventListener('scroll', handleScroll);

      const observer = new MutationObserver(() => {
        // 只有用户在底部附近时才自动滚动
        if (shouldScrollRef.current) {
          end.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
      });

      // 初始滚动到底部
      end.scrollIntoView({ behavior: 'instant', block: 'end' });

      return () => {
        observer.disconnect();
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return [containerRef, endRef];
}
