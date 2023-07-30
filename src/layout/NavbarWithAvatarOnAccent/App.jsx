import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiHelpCircle, FiMenu, FiSearch, FiSettings } from 'react-icons/fi';
import { Logo } from './Logo';
import { ColorModeSwitcher} from '../../ColorModeSwitcher';
export const Nav = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box
      as="section"
    >
      <Box as="nav" bg="bg-accent" color="on-accent">
        <Container
          py={{
            base: '3',
            lg: '4',
          }}
        >
          <Flex justify="space-between">
            <HStack spacing="4">
              <Logo />
              {isDesktop && (
                <ButtonGroup variant="ghost-on-accent" spacing="1">

                  <Button aria-current="page" fontSize="1.25rem">智游检索</Button>

                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost-on-accent" spacing="1">

                  <ColorModeSwitcher />
                </ButtonGroup>
              </HStack>
            ) : (
              <IconButton
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
