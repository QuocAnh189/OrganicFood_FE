'use client';
import { useEffect, useState } from 'react';

//chakra
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
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
import { InitSignIn, SignInType } from '@/types';

//redux
import { useSignInMutation } from '@/redux/services/authApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { useAppDispatch } from '@/redux/hooks';
import { signIn } from '@/redux/slices/authSlice';

//component
import { OAuthButtonGroup } from '@/components/client/auth/OAuth';
import { PasswordField } from '@/components/client/auth/PasswordFiled';

//toast
import { useToast } from '@chakra-ui/react';

const formSchema = z.object({
  email: z.string().min(1, 'You have not entered the email yet'),
  password: z.string().min(1, 'You have not entered the password yet')
});

const SignIn = () => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInType>({
    resolver: zodResolver(formSchema),
    defaultValues: InitSignIn
  });

  const [SignIn, { isSuccess, isLoading }] = useSignInMutation();

  const onSubmit: SubmitHandler<SignInType> = async (data: any) => {
    try {
      const res = await SignIn(data).unwrap();

      if (res) {
        dispatch(signIn(res));
        route.push('/');
      }
    } catch (e: any) {
      const { message }: any = e.data;
      switch (message) {
        case 'This email was not found':
          toast({
            title: 'Account does not exists',
            description: 'Login failure',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
          });
          break;
        case 'Password not matching':
          toast({
            title: 'Wrong password',
            description: 'Login failure',
            status: 'error',
            duration: 1500,
            isClosable: true,
            position: 'top'
          });
          break;
        case 'This user was disabled':
          toast({
            title: 'This user was disabled',
            description: 'Login failure',
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
        title: 'Login successfully.',
        description: 'Login to system successfully',
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
            <Heading>Sign In</Heading>
          </Center>
          <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input {...register('email')} id="email" type="email" mb={2} />
            <PasswordField {...register('password')} />
            <HStack justify="space-between" py={2}>
              <Checkbox defaultChecked={false}>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                type="submit"
                disabled={true}
                bgColor="#00B207"
                color="#FFFFFF"
                _hover={{ backgroundColor: '#74E291' }}
              >
                {isLoading ? <CircularProgress size="24px" /> : 'Sign in'}
              </Button>
              <Center gap={1}>
                Don't have an account ?
                <Link href="/signup">
                  <Text color="#00B207">Sign up</Text>
                </Link>
              </Center>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignIn;
