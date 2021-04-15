import { useEffect, useState } from 'react';
import logService from '../service/logService.js';

const useLogHook = (defaultLogs) => {
  const [logs, setLogs] = useState(defaultLogs);
  const resetLogs = async () => {
    const newLogs = await logService.getLog();
    await setLogs(newLogs);
  }

  const postLogs = async (newLog) => {
    await logService.postLog(newLog);
    resetLogs();
  };

  useEffect(() => {
    resetLogs();
  }, []);

  return [logs, postLogs];
};

export default useLogHook;
