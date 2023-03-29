import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import Head from 'next/head'
import { FormEvent, FunctionComponent, useState } from 'react'

interface IHomeProps {
  nome: string
  sobrenome: string
  email: string
  endereco: string
  telefone: string
  mensagem: string
}

const Home: FunctionComponent<IHomeProps> = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      nome,
      sobrenome,
      email,
      endereco,
      telefone,
      mensagem
    }

    
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Formulário Kiss - state</title>
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
              <form action='' autoComplete='off' onSubmit={handleSubmit} >
                <Flex justify='space-between'>
                  <FormControl isRequired marginTop='15px' width='49%' >
                    <FormLabel color='gray.200'>Nome</FormLabel>
                    <Input
                      type='text'
                      name='nome'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Ana'
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Sobrenome</FormLabel>
                    <Input
                      type='text'
                      name='sobrenome'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Assis de Oliveira'
                      onChange={(e) => setSobrenome(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <FormControl isRequired marginTop='15px'>
                  <FormLabel color='gray.200'>Seu e-mail</FormLabel>
                  <Input
                    type='email'
                    name='email'
                    border='none'
                    outline='none'
                    bgColor='gray.900'
                    focusBorderColor='gray.600'
                    color='gray.200'
                    placeholder='Ex:. seuemail@email.com'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <Flex justify='space-between'>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Seu Endereço</FormLabel>
                    <Input
                      type='text'
                      name='endereco'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Rua Gralber Santos, 1250 - Santos/SP'
                      onChange={(e) => setEndereco(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Seu Telefone</FormLabel>
                    <Input
                      type='tel'
                      name='telefone'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. (13) 90900-0000'
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <FormControl isRequired marginTop='15px' >
                  <FormLabel color='gray.200'>Sua Mensagem</FormLabel>
                  <Textarea
                    name='mensagem'
                    border='none'
                    outline='none'
                    bgColor='gray.900'
                    focusBorderColor='gray.600'
                    color='gray.200'
                    resize='none'
                    placeholder='Mande aqui sua mensagem.......'
                    onChange={(e) => setMensagem(e.target.value)}
                  />
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

export default Home;
