import * as S from './style';
import { css } from '@emotion/react';
import * as I from 'assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { setUserLocalstorage } from 'hooks';

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
    setUserLocalstorage('name', name);
    setUserLocalstorage('year', year);
    setUserLocalstorage('month', month);
    setUserLocalstorage('date', date);
    push('/');
  };

  const inValid = (error: FieldErrors) => {
    console.log(error);
  };

  return (
    <S.RegisterBackground>
      <S.LogoWrapper>
        <I.BigLogo />
      </S.LogoWrapper>
      <S.RegisterSection onSubmit={handleSubmit(onValid, inValid)}>
        <div>
          <I.Logo />
          <S.Title>Welcome to GGV</S.Title>
        </div>
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

          <S.InputTitle>생년월일</S.InputTitle>
          <S.InputWrapper>
            <S.Input
              css={css`
                width: 200px;
              `}
              placeholder="YYYY"
              {...register('year', {
                required: true,
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: '4자리 숫자만 입력할 수 있습니다.',
                },
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
                pattern: {
                  value: /^[0-1][0-9]$/,
                  message: '2자리 숫자만 입력할 수 있습니다.',
                },
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
                pattern: {
                  value: /^[0-3][0-9]$/,
                  message: '2자리 숫자만 입력할 수 있습니다.',
                },
              })}
              errorStyle={errors.date}
            />
          </S.InputWrapper>
          <S.ErrorMessage>
            {(errors.name || errors.date || errors.month || errors.year) &&
              '에러발생'}
          </S.ErrorMessage>
        </div>
        <S.Button>시작하기</S.Button>
      </S.RegisterSection>
    </S.RegisterBackground>
  );
};

export default RegisterPage;
