/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text } from "@chakra-ui/react"
export default function Privacy() {
  return (
    <Box
      width='100vw'
      height='100vh'
      padding={20}>
      <Box
        padding={5}>
        <Heading>{`Privacy Policy for Google Play - Naledi App`}</Heading>
        <Text>{`We take your privacy seriously and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information when you use our Naledi App available on Google Play.`}</Text>
      </Box>
      <Box
        padding={5}>
        <Heading>{`Information Collection and Use`}</Heading>
        <Text>{`We do not collect any personal information from you when you use our Naledi App. We do not require you to create an account, provide any personal information, or connect to any social media platforms to use our app.`}</Text>
      </Box>

      <Box
        padding={5}>
          <Heading>{`Third-Party Services`}</Heading>
          <Text>{`We do not share your personal information with any third-party services or entities. We do not use any third-party analytics tools or advertising networks that collect your personal information.`}</Text>
      </Box>
      
      <Box
        padding={5}>
          <Heading>{`Security`}</Heading>
          <Text>{`We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmitting information over the internet or storing information is completely secure. We cannot guarantee the absolute security of your personal information.`}</Text>
      </Box>
      
      <Box
        padding={5}>
          <Heading>{`Children's Privacy`}</Heading>
          <Text>{`Our Naledi App is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete that information as soon as possible.`}</Text>
      </Box>
      
      <Box
        padding={5}>
          <Heading>{`Changes to this Privacy Policy`}</Heading>
          <Text>{`We may update this privacy policy from time to time. If we make material changes to this policy, we will notify you by posting a notice in our app or by other means.`}</Text>
      </Box>
      <Box
        padding={5}>
          <Heading>{`Contact Us`}</Heading>
          <Text>{`If you have any questions or concerns about our privacy policy, please contact us at info@naledi.xyz.`}</Text>
      </Box>
      
    </Box>
  )
}
