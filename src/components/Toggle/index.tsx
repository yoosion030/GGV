import { Select } from 'atoms';
import { useAtom } from 'jotai';
import * as S from './style';

const Toggle = () => {
  const [select, setSelect] = useAtom(Select);
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
