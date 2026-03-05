// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): T {
  // 타이머
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    // 이전 타이머 취소
    clearTimeout(timer);
    // 새 타이머 시작 (delay 후에 fn 실행)
    timer = setTimeout(() => fn(...args), delay)
  } as T;
}

export default debounce;