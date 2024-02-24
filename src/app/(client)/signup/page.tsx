'use client';
import { useEffect, useState } from 'react';

//chakra
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  CircularProgress,
  Center
} from '@chakra-ui/react';

//next
import { useRouter } from 'next/navigation';

//react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

//type
import { InitSignUp, SignUpType } from '@/types';

//redux
import { useSignUpMutation } from '@/redux/services/authApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@/redux/hooks';
import { signUp } from '@/redux/slices/authSlice';

//component
import { PasswordField } from '@/components/client/auth';

//constant
import { PASSWORD_REGEX } from '@/constants';

//toast
import { useToast } from '@chakra-ui/react';
import { IUser } from '@/interfaces';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'You have not entered the email yet' })
    .max(30, { message: 'Email must not exceed 30 characters' })
    .email('Email does not format'),
  name: z
    .string()
    .min(1, 'You have not entered the name yet')
    .min(5, { message: 'The name must have at least 5 characters' })
    .max(30, { message: 'Name must not exceed 30 characters' }),
  password: z
    .string()
    .min(8, { message: 'The password must have at least 8 characters' })
    .max(32, { message: 'Password must not exceed 32 characters' })
    .regex(
      PASSWORD_REGEX.lowerCase,
      'Password must have at least 1 lowercase letter'
    )
    .regex(
      PASSWORD_REGEX.upperCase,
      'Password must have at least 1 uppercase letter'
    )
    .regex(PASSWORD_REGEX.number, 'Password must have at least 1 digit')
    .regex(
      PASSWORD_REGEX.specialCharacter,
      'Password must have at least 1 special character'
    ),
  confirmpassword: z
    .string()
    .min(1, { message: 'You have not entered the confirm password yet' })
});

const SignIn = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpType>({
    resolver: zodResolver(formSchema),
    defaultValues: InitSignUp
  });

  const [SignUp, { isSuccess, isLoading }] = useSignUpMutation();

  const onSubmit: SubmitHandler<SignUpType> = async (data: SignUpType) => {
    try {
      const res = await SignUp(data).unwrap();

      if (res) {
        dispatch(signUp(res));
        route.push('/');
      }
    } catch (e: any) {
      const { message }: any = e.data;

      switch (message) {
        case 'This email already exists':
          toast({
            title: 'This email already exists',
            description: 'Register failure',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
          });
          break;
        case 'This name already exists':
          toast({
            title: 'This name already exists',
            description: 'Register failure',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
          });
          break;
        case 'Confirmpassword is not match':
          toast({
            title: 'Confirmpassword is not match',
            description: 'Register failure',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
          });
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Register successfully.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 1500,
        isClosable: true,
        position: 'top'
      });
    }
  }, [isSuccess]);

  return (
    <Container
      maxW="lg"
      py={{ base: '6', md: '12' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Center>
            <Heading>Sign Up</Heading>
          </Center>
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input {...register('email')} id="email" type="email" mb={2} />
            {errors.email && (
              <Text as="p" className="mb-2 text-error">
                {errors?.email.message}
              </Text>
            )}

            <FormLabel htmlFor="name">Name</FormLabel>
            <Input {...register('name')} id="name" type="text" mb={2} />
            {errors.name && (
              <Text as="p" className="mb-2 text-error">
                {errors?.name.message}
              </Text>
            )}

            <Stack>
              <PasswordField {...register('password')} id="password" />
              {errors.password && (
                <Text as="p" className="mb-2 text-error">
                  {errors?.password.message}
                </Text>
              )}

              <PasswordField
                {...register('confirmpassword')}
                id="confirmpassword"
              />
              {errors.confirmpassword && (
                <Text as="p" className="mb-2 text-error">
                  {errors.confirmpassword.message}
                </Text>
              )}
            </Stack>
            <Stack spacing="6" paddingY={2}>
              <Button
                type="submit"
                disabled={true}
                bgColor="#00B207"
                color="#FFFFFF"
                _hover={{ backgroundColor: '#74E291' }}
              >
                {isLoading ? <CircularProgress size="24px" /> : 'Sign Up'}
              </Button>
              <Center gap={1}>
                Already have an account ?
                <Link href="/signin">
                  <Text color="#00B207">Sign in</Text>
                </Link>
              </Center>
            </Stack>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignIn;
