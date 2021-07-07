import vn from '../public/lang/vn/vn.js';
import en from '../public/lang/en/en.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';

const useTranslate = () => {
    const selectLang = (state: RootState) => state.langReducer;
    const isVn = useSelector(selectLang);

    const trans = isVn ? vn : en;

    // const { locale } = useRouter();
    // const trans = locale === 'vn' ? vn : en
    
    return trans;
}

export default useTranslate;