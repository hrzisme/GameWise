import {
  Box,
  Container,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiSearch } from 'react-icons/fi'
import { BlogPost } from './BlogPost'
import { posts } from './data'


export const Main = () => (
  <Box bg="bg-surface">
    <Box bg="bg-accent" color="on-accent">
      <Container
        pt={{
          base: '16',
          md: '24',
        }}
        pb={{
          base: '32',
          md: '48',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          align="center"
        >
          <Stack
            spacing={{
              base: '4',
              md: '6',
            }}
            textAlign="center"
          >
            <Stack spacing="4">
              <Text
                fontWeight="semibold"
                color="blue.50"
                fontSize={{
                  base: 'sm',
                  md: 'md',
                }}
              >
                “智游”基于人工智能技术的游戏检索系统
              </Text>
              <Heading
                size={useBreakpointValue({
                  base: 'md',
                  md: 'lg',
                })}
              >
                在超过 80,000 款游戏中找到你的下一个游戏
              </Heading>
            </Stack>
            <Text
              fontSize={{
                base: 'lg',
                md: 'xl',
              }}
              maxW="5xl"
              color="on-accent-muted"
            >
              摆脱桎梏，通过对话或输入游戏简介，智能推荐相似游戏，帮助用户快速发现你最爱玩的那一款游戏。
            </Text>
          </Stack>
          <InputGroup
            size="lg"
            maxW={{
              md: 'sm',
            }}
          >
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="on-accent" boxSize="5" />
            </InputLeftElement>
            <Input placeholder="Search" variant="filled" colorScheme="blue" />
          </InputGroup>
        </Stack>
      </Container>
    </Box>
    <Container
      pb={{
        base: '16',
        md: '24',
      }}
      mt={{
        base: '-16',
        md: '-24',
      }}
    >
      <Stack
        spacing={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing={{
            base: '12',
            md: '16',
          }}
        >
          <BlogPost post={posts[0]} isHero />
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={{
              base: '12',
              lg: '8',
            }}
          >
            {posts.slice(1, 4).map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Container>
  </Box>
)
