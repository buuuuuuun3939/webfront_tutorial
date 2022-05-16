import { ChangeEvent, FC } from "react";
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {
  message: string;
  onMessageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMessageSubmit: () => void;
};

const MessageArea: FC<Props> = (props) => {
  const pressKey = (e: any) => {
    // Enterキーが押された場合にメッセージを送信する
    if (e.keyCode === 13)
      props.onMessageSubmit();
  };

  return (
    <Stack direction="row" spacing={2}>
      <Input value={props.message} onChange={props.onMessageChange} onKeyDown={(e) => pressKey(e)} />
      <Button variant="contained" onClick={props.onMessageSubmit} >
        送信する
      </Button>
    </Stack>
  );
};

export default MessageArea;