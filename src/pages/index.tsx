import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Formulário Kiss</title>
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
              <form action='' autoComplete='off' >
                <Flex justify='space-between'>
                  <FormControl isRequired marginTop='15px' width='49%' >
                    <FormLabel color='gray.200'>Nome</FormLabel>
                    <Input
                      type='text'
                      name='name'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Ana'
                    />
                  </FormControl>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Sobrenome</FormLabel>
                    <Input
                      type='text'
                      name='name'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Assis de Oliveira'
                    />
                  </FormControl>
                </Flex>
                <FormControl isRequired marginTop='15px'>
                  <FormLabel color='gray.200'>Seu e-mail</FormLabel>
                  <Input
                    type='email'
                    name='name'
                    border='none'
                    outline='none'
                    bgColor='gray.900'
                    focusBorderColor='gray.600'
                    color='gray.200'
                    placeholder='Ex:. seuemail@email.com'
                  />
                </FormControl>
                <Flex justify='space-between'>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Seu Endereço</FormLabel>
                    <Input
                      type='text'
                      name='name'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. Rua Gralber Santos, 1250 - Santos/SP'
                    />
                  </FormControl>
                  <FormControl isRequired marginTop='15px' width='49%'>
                    <FormLabel color='gray.200'>Seu Telefone</FormLabel>
                    <Input
                      type='tel'
                      name='name'
                      border='none'
                      outline='none'
                      bgColor='gray.900'
                      focusBorderColor='gray.600'
                      color='gray.200'
                      placeholder='Ex:. (13) 90900-0000'
                    />
                  </FormControl>
                </Flex>
                <FormControl isRequired marginTop='15px' >
                  <FormLabel color='gray.200'>Sua Mensagem</FormLabel>
                  <Textarea
                    name='name'
                    border='none'
                    outline='none'
                    bgColor='gray.900'
                    focusBorderColor='gray.600'
                    color='gray.200'
                    resize='none'
                    placeholder='Mande aqui sua mensagem.......'
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
