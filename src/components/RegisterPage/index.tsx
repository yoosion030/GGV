import * as S from './style';
import { css } from '@emotion/react';
import * as I from 'assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface RegisterForm {
  name: string;
  year: string;
  month: string;
  date: string;
}

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>();
  const { push } = useRouter();

  const onValid = ({ name, year, month, date }: RegisterForm) => {
    console.log('로컬스토리지에 저장');

    window.localStorage.setItem('name', name);
    window.localStorage.setItem('year', year);
    window.localStorage.setItem('month', month);
    window.localStorage.setItem('date', date);
    push('/');
  };

  const inValid = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <S.RegisterBackground>
      <I.Logo />
      <S.RegisterSection>
        <S.Title>Welcome to GGV</S.Title>
        <S.InputSection onSubmit={handleSubmit(onValid, inValid)}>
          <div>
            <S.InputTitle>이름</S.InputTitle>
            <S.Input
              css={css`
                width: 100%;
              `}
              placeholder="이름을 입력해주세요!"
              {...register('name', { required: true })}
              errorStyle={errors.name}
            />
          </div>
          <div>
            <S.InputTitle>생년월일</S.InputTitle>
            <S.InputWrapper>
              <S.Input
                css={css`
                  width: 200px;
                `}
                placeholder="YYYY"
                {...register('year', {
                  required: true,
                })}
                errorStyle={errors.year}
              />
              <S.Input
                css={css`
                  width: 100px;
                `}
                placeholder="MM"
                {...register('month', {
                  required: true,
                })}
                errorStyle={errors.month}
              />
              <S.Input
                css={css`
                  width: 100px;
                `}
                placeholder="DD"
                {...register('date', {
                  required: true,
                })}
                errorStyle={errors.date}
              />
            </S.InputWrapper>
          </div>
          <S.Button>시작하기</S.Button>
        </S.InputSection>
      </S.RegisterSection>
    </S.RegisterBackground>
  );
};

export default RegisterPage;
