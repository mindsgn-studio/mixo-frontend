import { Box, Center, Heading, Button } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import axios from 'axios';

const UploadPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleUpload = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append('mp3', uploadedFile);

    try {
      const response = await axios.post('/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle response from the server
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Box as="header" p={4} bg="gray.200">
        <Heading as="h1" size="xl" textAlign="center">
          Upload Music
        </Heading>
      </Box>

      <Center flex={1} py={8}>
        <Box
          {...getRootProps()}
          p={4}
          border="2px"
          borderColor={isDragActive ? 'blue.500' : 'gray.200'}
          borderRadius="md"
          textAlign="center"
          cursor="pointer"
        >
          <input {...getInputProps()} />
          {isDragActive ? <p>Drop the file here...</p> : <p>Drag and drop an .mp3 file here, or click to select file</p>}
          {uploadedFile && (
            <Box mt={4}>
              <Heading as="h3" size="md">
                Uploaded File:
              </Heading>
              <p>{uploadedFile.name}</p>
            </Box>
          )}
        </Box>
      </Center>

      <Box as="footer" p={4} bg="gray.200" textAlign="center">
        <Button onClick={handleUpload}>Upload</Button>
      </Box>
    </Box>
  );
};

export default UploadPage;
