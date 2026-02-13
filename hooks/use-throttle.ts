import { useRef, useCallback } from "react";
export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T {
  const lastCall = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      const timeSinceLastCall = now - lastCall.current;
      if (timeSinceLastCall >= delay) {
        lastCall.current = now;
        callback(...args);
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          lastCall.current = Date.now();
          callback(...args);
        }, delay - timeSinceLastCall);
      }
    },
    [callback, delay],
  ) as T;
}

// ：这个 Hook 确保函数在指定时间间隔内最多执行一次，频繁调用时会将多余的调用推迟执行（最后一次调用必定会执行）。
