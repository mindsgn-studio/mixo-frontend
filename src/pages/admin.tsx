import connectDB from '../utils/mongo';
import {
  Box,
  FormControl,
  Input,
  Button,
  FormLabel,
  useToast,
  TableContainer,
  Table,
  Thead,
  Heading,
  Tr,
  Th,
  Td,
  Tbody
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function Administrator(props: any) {
  const { data } = props;
  const [uploads, setUploads] = useState(data);
  const toast = useToast();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (e: any) => {
    const file = e.target.files[0];
    if (file && file.type === 'audio/mpeg') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a valid MP3 file.');
    }
  };

  const deleteTrack = async (link: string) => {
    try {
      const response = await fetch(`/api/upload/delete?link=${link}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(response => {
          const { data } = response;
          setUploads(data);
          toast({
            title: 'Succesful'
          });
        })
        .catch(error => {
          toast({
            title: 'Error'
          });
        });
    } catch (error) {
      toast({
        title: 'Error'
      });
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('mp3File', selectedFile);

      fetch(`${process.env.NEXT_PUBLIC_API}/upload/audio?user=seni`, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(response => {
          const { data } = response;
          setUploads(data);
          toast({
            title: 'Succesful'
          });
        })
        .catch(error => {
          toast({
            title: 'Error'
          });
        });
    } else {
      toast({
        title: 'Error'
      });
    }
  };

  return (
    <Box
      width="100vw"
      height={'100vh'}
      display="flex"
      justifyContent={'space-between'}
    >
      <Box
        flexDir={'column'}
        height={'100vh'}
        width="100px"
        background="blue.900"
        padding="10px"
      />
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>link</Th>
                <Th>processed</Th>
                <Th>uploaded by</Th>
              </Tr>
            </Thead>
            <Tbody>
              {uploads.map((item: any) => {
                return (
                  <Tr key={item.link}>
                    <Td>{`${item.link}`}</Td>
                    <Td>{`${item.processed}`}</Td>
                    <Td>{`${item.uploadedBy}`}</Td>
                    <Td>
                      <Button
                        onClick={() => {
                          deleteTrack(`${item.link}`);
                        }}
                        margin={2}
                        backgroundColor={'red.600'}
                      >
                        <Heading size="sm">DELETE</Heading>
                      </Button>
                      <Button
                        margin={2}
                        onClick={() => {}}
                        backgroundColor={'green.600'}
                      >
                        <Heading size="sm">PLAY</Heading>
                      </Button>
                      <Button
                        margin={2}
                        onClick={() => {}}
                        backgroundColor={'red.600'}
                      >
                        <Heading size="sm">STOP</Heading>
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box background="blue.900" padding="10px">
        <FormControl>
          <FormLabel>Select an MP3 file to upload</FormLabel>
          <Input
            padding={'2px'}
            type="file"
            accept="audio/mpeg"
            onChange={handleFileChange}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" onClick={handleUpload}>
          Upload
        </Button>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  //@ts-ignore
  const client = await connectDB;
  const db = await client.db('mixo-local');
  try {
    const page: number = 1;
    const limit: number = 10;

    const skipCount = (page - 1) * limit;

    const response = await db
      .collection('uploads')
      .find({}, { projection: { _id: 0, createdAt: 0, updatedAt: 0 } })
      .skip(skipCount)
      .limit(limit)
      .sort({ metacritic: -1 })
      .toArray();

    return {
      props: {
        data: response,
        limit: 1,
        page: 1,
        error: false
      }
    };
  } catch (e) {
    return {
      props: {
        data: [],
        limit: 1,
        page: 1,
        error: true
      }
    };
  } finally {
  }
}
