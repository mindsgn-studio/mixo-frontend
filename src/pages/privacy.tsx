import {
  Container,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Heading
} from '@chakra-ui/react';

export default function Privacy() {
  return (
    <Box minH={'100vh'}>
      <Container>
        <Heading>MIXØ Privacy Policy</Heading>

        <Text>
          <strong>Effective Date:</strong> August 2023
        </Text>

        <Text>
          MIXØ (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a mobile
          application developed by MINDSGN STUDIO PTY LTD (&quot;MINDSGN
          STUDIO,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) that
          allows users to create and enjoy music mixes. At MIXØ, we are
          committed to respecting and protecting your privacy. This Privacy
          Policy explains how we collect, use, and disclose information when you
          use the MIXØ app. By using MIXØ, you consent to the practices
          described in this policy.
        </Text>

        <Accordion>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  1. Information We Collect
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              We do not collect any personal information from users of the MIXØ
              app. We do not require you to provide any personal data such as
              your name, email address, or location information.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  2. Age Restriction
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              MIXØ is intended for users aged 13 and above. We do not knowingly
              collect or store personal information from anyone under the age of
              13. If we become aware that a user under 13 has provided us with
              personal information, we will take steps to delete such
              information.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  3. Media (Music) Usage
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              MIXØ allows users to create and enjoy music mixes. We do not own
              or store any media, including music, on our servers unless
              explicitly stated by the user. Any media uploaded or added to the
              app by users is stored locally on their devices and is not
              accessible by us.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  4. Ownership and Control
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              MIXØ is owned and operated by MINDSGN STUDIO PTY LTD. We are
              committed to maintaining the security and confidentiality of the
              data you provide to us.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  4. Ownership and Control
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              MIXØ is owned and operated by MINDSGN STUDIO PTY LTD. We are
              committed to maintaining the security and confidentiality of the
              data you provide to us.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  5. Data Security
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text>
                We take reasonable measures to protect the data and information
                you provide through the app from unauthorized access,
                disclosure, alteration, or destruction. However, please be aware
                that no method of data transmission or storage can be completely
                secure.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  6. Changes to the Privacy Policy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. The most current version of the policy will
                always be available within the app. Your continued use of MIXØ
                after any changes signifies your acceptance of the revised
                Privacy Policy.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  7. Contact Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text>
                If you have any questions, concerns, or requests related to this
                Privacy Policy or your data, please contact us at:
                info@mindsgn.studio
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <Heading>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  8. Consent
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Heading>
            <AccordionPanel pb={4}>
              <Text>
                By using MIXØ, you consent to the terms outlined in this Privacy
                Policy.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Text>
          Please review this Privacy Policy carefully and make sure you
          understand its terms. If you do not agree with our practices, please
          do not use the MIXØ app.
        </Text>

        <Text>This Privacy Policy was last updated on August 2023.</Text>
      </Container>
    </Box>
  );
}
