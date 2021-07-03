import { useRouter } from 'next/router'
import vn from '../public/lang/vn/vn.js';
import en from '../public/lang/en/en.js';

const useTranslate = () => {
    const { locale } = useRouter()


    const trans = locale === 'vn' ? vn : en

    return trans
}

export default useTranslate;