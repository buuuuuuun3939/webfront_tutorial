import {FC} from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

type Props = {
  messageList: string[];
};

// TODO: message の配列を受け取り、それをJSX内でrenderする
const MessageList: FC<Props> = (props) => {
  return (
    <Stack>
      {props.messageList.map((message) => {
        return <Box>{message}</Box>;
      })}
    </Stack>
  );
};

export default MessageList;