import type { NextPage } from 'next';
import { Box, Text, useToast, Button, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import * as musicMetadata from 'music-metadata-browser';

const Upload: NextPage = () => {
  const [metadata, setMetadata] = useState<any>({});
  const [picture, setPicture] = useState<any>(null);
  const [error, setError] = useState<boolean>(true);
  const toast = useToast();

  function checkMetadata(event: any) {
    const file = event.target.files[0];
    if (file.type !== 'audio/mpeg') {
      setError(true);
      setMetadata({});
      return;
    }
    const reader: any = new FileReader();
    reader.onload = () => {
      musicMetadata.parseBlob(event.target.files[0]).then(results => {
        setMetadata({ ...results.common });
      });
    };
    reader.readAsArrayBuffer(file);
  }

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/upload/audio`,
        {
          method: 'POST',
          body: formData
        }
      );

      if (response.ok) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error during upload:', error);
    }
  };

  useEffect(() => {
    if (metadata.picture) {
      setPicture({ ...metadata.picture[0] });
    }
  }, [metadata]);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        color="white"
        alignItems={'center'}
      >
        <Box>
          <form onSubmit={handleFormSubmit}>
            <input type="file" name="mp3" onChange={checkMetadata} />
            <Button disabled={true} type="submit" background={'blue.200'}>
              Upload
            </Button>
          </form>
        </Box>
        <Box>
          {picture && (
            <img
              src={URL.createObjectURL(
                new Blob([picture.data], { type: picture.format })
              )}
              width={'300px'}
              height="300px"
            />
          )}
        </Box>

        <Box>
          {metadata && <Text color={'black'}>{metadata.album}</Text>}
          {metadata && <Text color={'black'}>{metadata.artists}</Text>}
          {metadata && <Text color={'black'}>{metadata.title}</Text>}
        </Box>
      </Box>
    </Container>
  );
};

export default Upload;
