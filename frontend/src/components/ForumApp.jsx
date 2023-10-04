import React, { useState } from 'react';
import { Box, VStack, Button, Input, Text, IconButton, Card } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import Post from './Post';

function ForumApp() {
  // Dummy data for posts
  const [posts, setPosts] = useState([
      {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post.',
        likes: 0,
        dislikes: 0,
        comments: [
          {
            id: 1,
            text: 'Comment 1 on First Post',
            likes: 0,
            dislikes: 0,
            childComments: [
              { id: 4, text: 'Reply to Comment 1', likes: 0, dislikes: 0, childComments: [] },
            ],
          },
          {
            id: 2,
            text: 'Comment 2 on First Post',
            likes: 0,
            dislikes: 0,
            childComments: [
              {
                id: 5,
                text: 'Reply to Comment 2',
                likes: 0,
                dislikes: 0,
                childComments: [
                  { id: 7, text: 'Reply to Reply to Comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas nostrum voluptates ducimus libero amet labore. Iste rem quia enim laborum, delectus obcaecati fugit. Odit beatae inventore reprehenderit! Facilis a explicabo velit soluta illo delectus aliquam quia provident recusandae magnam. 2', likes: 0, dislikes: 0, childComments: [
                    { id: 7, text: 'Reply to Reply to Comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas nostrum voluptates ducimus libero amet labore. Iste rem quia enim laborum, delectus obcaecati fugit. Odit beatae inventore reprehenderit! Facilis a explicabo velit soluta illo delectus aliquam quia provident recusandae magnam. 2', likes: 0, dislikes: 0, childComments: [
                  { id: 7, text: 'Reply to Reply to Comment Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas nostrum voluptates ducimus libero amet labore. Iste rem quia enim laborum, delectus obcaecati fugit. Odit beatae inventore reprehenderit! Facilis a explicabo velit soluta illo delectus aliquam quia provident recusandae magnam. 2', likes: 0, dislikes: 0, childComments: [] },
                ] },
                  ] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quisquam. Unde, dolore corrupti reprehenderit laudantium vero repudiandae, perferendis nihil id, vel consectetur saepe harum! Consequuntur eaque voluptate eligendi illo alias ipsa atque. In officia aperiam aliquid ad eos aliquam eligendi doloribus necessitatibus cum illo consequuntur minus commodi error accusamus animi hic deleniti nostrum veritatis reiciendis, nulla adipisci! Explicabo odio laboriosam architecto dolor corporis, voluptatibus amet molestias qui itaque nam! Impedit ducimus consequuntur vel dolorum autem, maxime deleniti commodi odit adipisci dolore corporis quasi itaque id fuga reiciendis corrupti in a. Commodi voluptates optio impedit nulla molestias, consectetur laborum id, ducimus ad quibusdam ab expedita eum fugit perspiciatis atque temporibus aliquid voluptate voluptatem perferendis! Laboriosam, rem labore. Quae in praesentium nesciunt. Eaque voluptas qui, a alias velit perferendis quos iste veritatis illo quidem quisquam tempore optio ad beatae nihil commodi laboriosam dolore, consequuntur laudantium? Ex, ea. Delectus veritatis magnam, amet deserunt consectetur, eum aperiam omnis maiores odit modi et eveniet, vel error similique explicabo aliquam eaque esse sequi possimus sed maxime iure! Quo quod ipsum assumenda beatae quibusdam, odit dicta ex repudiandae voluptatibus architecto sunt. Dolorum voluptates adipisci officiis aut debitis, enim eaque accusantium laborum voluptatibus inventore pariatur voluptate eum maiores. This is the content of the second post.',
        likes: 0,
        dislikes: 0,
        comments: [
          { id: 3, text: 'Comment 3 on Second Post', likes: 0, dislikes: 0, childComments: [] },
        ],
      },
    ]);

  return (
    <Card>
      <Box p={4}>
        <VStack spacing={4} align="stretch">
          <Button colorScheme="teal">Create Post</Button>
          <Input placeholder="Search..." />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </VStack>
      </Box>
      </Card>
  );
}

export default ForumApp;
