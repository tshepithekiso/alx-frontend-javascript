// interfaces/Directors.ts
import { Teacher } from './Teacher';

interface Directors extends Teacher {
  numberOfReports: number;
}

export { Directors };
