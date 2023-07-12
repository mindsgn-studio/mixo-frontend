import { Box, Heading } from '@chakra-ui/react';
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
      const response = await axios.post('/upload/audio', formData, {
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
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Upload Page
      </Heading>
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
        {isDragActive ? (
          <p>Drop the file here...</p>
        ) : (
          <p>Drag and drop an .mp3 file here, or click to select file</p>
        )}
      </Box>
      <button onClick={handleUpload}>Upload</button>
    </Box>
  );
};

export default UploadPage;


