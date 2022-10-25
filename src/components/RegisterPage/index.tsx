import * as S from './style';
import { css } from '@emotion/react';
import * as I from 'assets/svg';
import { FieldErrors, useForm } from 'react-hook-form';

interface RegisterForm {
  name: string;
  year: number;
  month: number;
  day: number;
}

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onValid = (data: RegisterForm) => {
    console.log(data);
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
                  maxLength: 4,
                  valueAsNumber: true,
                  required: true,
                  pattern: {
                    value: /${0-8}/,
                    message: '숫자를 입력해주세요.',
                  },
                })}
              />
              <S.Input
                css={css`
                  width: 100px;
                `}
                placeholder="MM"
                {...register('month', {
                  maxLength: 2,
                  valueAsNumber: true,
                  required: true,
                  pattern: {
                    value: /^[0-9]{1, 2}$/,
                    message: '숫자를 입력해주세요.',
                  },
                })}
              />
              <S.Input
                css={css`
                  width: 100px;
                `}
                placeholder="DD"
                {...register('day', {
                  maxLength: 2,
                  valueAsNumber: true,
                  required: true,
                  pattern: {
                    value: /^[0-9]{1, 2}$/,
                    message: '숫자를 입력해주세요.',
                  },
                })}
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
