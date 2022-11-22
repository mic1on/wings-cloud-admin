import { useMobileAreaCode } from './use-mobile-area-code';
import { useDict } from './use-dict';

const { getMobileAreaCodes } = useMobileAreaCode();

const { getAndSaveDicts } = useDict();

export { getMobileAreaCodes, getAndSaveDicts };
