import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  VStack,
  Button,
  Input,
  Text,
  IconButton,
  Card,
  Spinner,
} from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import Post from './Post';

function ForumApp() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: '', content: '' }); // State to store the new post data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forum/getallposts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle creating a new post
  const handleCreatePost = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/forum/createpost', newPost); // Replace with your API URL
      setPosts([...posts, response.data]); // Add the new post to the existing posts
      setNewPost({ title: '', content: '' }); // Clear the form
      console.log()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Button colorScheme="teal">Create Post</Button>
          {/* Input fields for creating a new post */}
          <Input
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Input
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <Button colorScheme="teal" onClick={handleCreatePost}>Submit Post</Button>

          {loading ? (
            <Spinner size="xl" />
          ) : (
            <Card>
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </Card>
          )}
        </VStack>
      </Box>
    </Card>
  );
}

export default ForumApp;
