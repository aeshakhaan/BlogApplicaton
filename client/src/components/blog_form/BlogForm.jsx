import { Box, Typography, Card, Stack, Input, InputLabel, TextareaAutosize, Button, CardContent } from '@mui/material';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const BlogForm=()=>{
    const navigate=useNavigate()

    return (
        
        <Box sx={{display:'flex', justifyContent:'center',abackgroundColor:'ButtonFace', marginTop: '20vh'}}>
            <Box>
                <Card sx={{backgroundColor:'yellow'}}>
                    <CardContent>
                        <Typography variant='h2' sx={{display:'flex',justifyContent:'center'}}>BLOG</Typography>
                        <Stack>
                            <InputLabel htmlFor="blogName">Blog name:</InputLabel>
                            <Input type="text" id="blogName" name="blogName"/>
                            
                            <InputLabel htmlFor="authorName" sx={{marginTop:'1vh'}}>Author Name:</InputLabel>
                            <Input type="text" id="authorName" name="authorName"/>

                            <InputLabel htmlFor="description" sx={{marginTop:'1vh'}}>Description:</InputLabel>
                            <TextareaAutosize id="description" name="description" minRows={10}></TextareaAutosize>
                                
                            <Button variant='contained' onClick={()=>{navigate('/home')}} type="submit" sx={{marginTop:'5vh'}}>submit</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      )
  }
  
export default BlogForm