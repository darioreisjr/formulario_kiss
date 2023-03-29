import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import Head from 'next/head'
import { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IUserFormData {
    nome: string,
    sobrenome: string,
    email: string,
    endereco: string,
    telefone: string,
    mensagem: string,
    onSubmit: () => void,
    handleSubmit: () => void,
}

const schema = yup.object({
    nome: yup.string().required(),
    sobrenome: yup.string().required(),
    email: yup.string().required(),
    endereco: yup.string().required(),
    telefone: yup.string().required(),
    mensagem: yup.string().required(),
}).required();


const Cadastro: FunctionComponent = () => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm<IUserFormData>({
        resolver: yupResolver(schema)
    })
    function onSubmit(data: IUserFormData) {
        console.log(data)
    }

    function setErros(error: any) {
        console.log('Errors', error)
    }

    return (
        <>
            <Head>
                <title>Formulário Kiss - React Hook Form </title>
                <meta name="description" content="Formulario criado com nextJs, chakra UI, React Hook Forms e Typescript" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Flex
                    minHeight='100vh'
                    width='full'
                    align='center'
                    justifyContent='center'
                    backgroundColor='gray.900'
                >
                    <Box
                        px={12}
                        py={12}
                        width='full'
                        maxWidth='450px'
                        textAlign='center'
                        boxShadow='lg'
                        background='gray.700'
                        borderRadius='6px'
                    >
                        <Heading>
                            <Text color='gray.200' fontSize='2xl'>Formulário de registro</Text>
                        </Heading>
                        <Box>
                            <form action='' autoComplete='off' onSubmit={handleSubmit(onSubmit, setErros)}>
                                <Flex justify='space-between'>
                                    <FormControl isRequired marginTop='15px' width='49%' >
                                        <FormLabel color='gray.200'>Nome</FormLabel>
                                        <Input
                                            type='text'
                                            border='none'
                                            outline='none'
                                            bgColor='gray.900'
                                            focusBorderColor='gray.600'
                                            color='gray.200'
                                            placeholder='Ex:. Ana'
                                            {...register('nome')}
                                        />
                                        <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.nome?.message }</p>
                                    </FormControl>
                                    <FormControl isRequired marginTop='15px' width='49%'>
                                        <FormLabel color='gray.200'>Sobrenome</FormLabel>
                                        <Input
                                            type='text'
                                            border='none'
                                            outline='none'
                                            bgColor='gray.900'
                                            focusBorderColor='gray.600'
                                            color='gray.200'
                                            placeholder='Ex:. Assis de Oliveira'
                                            {...register('sobrenome')}
                                        />
                                         <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.sobrenome?.message }</p>
                                    </FormControl>
                                </Flex>
                                <FormControl isRequired marginTop='15px'>
                                    <FormLabel color='gray.200'>Seu e-mail</FormLabel>
                                    <Input
                                        type='email'
                                        border='none'
                                        outline='none'
                                        bgColor='gray.900'
                                        focusBorderColor='gray.600'
                                        color='gray.200'
                                        placeholder='Ex:. seuemail@email.com'
                                        {...register('email')}
                                    />
                                     <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.email?.message }</p>
                                </FormControl>
                                <Flex justify='space-between'>
                                    <FormControl isRequired marginTop='15px' width='49%'>
                                        <FormLabel color='gray.200'>Seu Endereço</FormLabel>
                                        <Input
                                            type='text'
                                            border='none'
                                            outline='none'
                                            bgColor='gray.900'
                                            focusBorderColor='gray.600'
                                            color='gray.200'
                                            placeholder='Ex:. Rua Gralber Santos, 1250 - Santos/SP'
                                            {...register('endereco')}
                                        />
                                         <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.endereco?.message }</p>
                                    </FormControl>
                                    <FormControl isRequired marginTop='15px' width='49%'>
                                        <FormLabel color='gray.200'>Seu Telefone</FormLabel>
                                        <Input
                                            type='tel'
                                            border='none'
                                            outline='none'
                                            bgColor='gray.900'
                                            focusBorderColor='gray.600'
                                            color='gray.200'
                                            placeholder='Ex:. (13) 90900-0000'
                                            {...register('telefone')}
                                        />
                                         <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.telefone?.message }</p>
                                    </FormControl>
                                </Flex>
                                <FormControl isRequired marginTop='15px' >
                                    <FormLabel color='gray.200'>Sua Mensagem</FormLabel>
                                    <Textarea
                                        border='none'
                                        outline='none'
                                        bgColor='gray.900'
                                        focusBorderColor='gray.600'
                                        color='gray.200'
                                        resize='none'
                                        placeholder='Mande aqui sua mensagem.......'
                                        {...register('mensagem')}
                                    />
                                     <p style={{
                                            color: 'red'
                                        }} >
                                            {errors?.mensagem?.message }</p>
                                </FormControl>
                                <Button
                                    type='submit'
                                    width='full'
                                    bgColor='green.400'
                                    mt={4}
                                    color='gray.200'
                                    _hover={{
                                        color: 'black'
                                    }}
                                >
                                    Registrar
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </main>
        </>
    )
}

export default Cadastro;
