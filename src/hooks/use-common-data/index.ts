import { useMobileAreaCode } from './use-mobile-area-code';
import { useDict } from './use-dict';

const { getMobileAreaCodes } = useMobileAreaCode();

const { getDictAll } = useDict();

export { getMobileAreaCodes, getDictAll };
