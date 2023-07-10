import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('mp3', file);

      await axios.post('/upload/audio', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful upload
      console.log('File uploaded successfully!');
    } catch (error) {
      // Handle upload error
      console.error('Failed to upload file:', error);
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="file">Select MP3 file</FormLabel>
        <Input
          type="file"
          id="file"
          onChange={handleFileChange}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />
        <Box
          border="2px dashed"
          borderColor="gray.200"
          borderRadius="md"
          p={4}
          mt={4}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Box textAlign="center">Drag and drop an MP3 file here</Box>
        </Box>
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
};

export default UploadPage;


