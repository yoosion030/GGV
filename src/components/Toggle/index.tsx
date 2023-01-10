import { Select } from 'atoms';
import { useRecoilState } from 'recoil';
import * as S from './style';

const Toggle = () => {
  const [select, setSelect] = useRecoilState(Select);
  const handletoggle = () => {
    return select === 'now_playing' ? 'upcoming' : 'now_playing';
  };
  return (
    <S.ToggleButton
      onClick={() => setSelect(() => handletoggle())}
      select={select}
    >
      <S.SwitchHandle select={select} />
    </S.ToggleButton>
  );
};

export default Toggle;
