import { Box, Button, Center, Heading, Text } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import axios from 'axios';
import * as mm from 'music-metadata-browser';

const UploadPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const metadata = await readMetadata(file);

    if (metadata) {
      setUploadedFile(file);
      console.log(metadata);
      setErrorMessage('');
    } else {
      setUploadedFile(null);
      setErrorMessage('Only .mp3 files are allowed!');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const readMetadata = async (file: File) => {
    if (!file.name.endsWith('.mp3')) {
      return null;
    }

    try {
      const arrayBuffer = await file.arrayBuffer();
      const metadata = await mm.parseBlob(new Blob([arrayBuffer]));

      const { common } = metadata;
      const { artist, title, picture } = common;

      if (artist && title) {
        return { artist, title, picture };
      }
    } catch (error) {
      console.error(error);
    }

    return null;
  };

  const handleUpload = async () => {
    if (!uploadedFile) return;

    const formData = new FormData();
    formData.append('mp3', uploadedFile);

    try {
      const response = await axios.post('http://localhost:8080/upload/audio', formData, {
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
          {errorMessage && (
            <Text color="red.500" mt={2}>
              {errorMessage}
            </Text>
          )}
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
