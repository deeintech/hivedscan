export function log(error: Error): void {
  try {
    const message = error.message || error.toString();
    console.log(message);
  } catch (error) {
  }
}

export function busyServer(error: Error): boolean {
  try {
    const message = error.message || error.toString();
    if (
      message.includes('Network Error')
    ) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}