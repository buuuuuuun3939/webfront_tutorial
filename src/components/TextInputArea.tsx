import { ChangeEvent, FC, KeyboardEvent } from "react";
import Input from '@mui/material/Input';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const TextInputArea: FC<Props> = (props) => {
  const pressKey = (e: any) => {
    // Enterキーが押された場合にメッセージを送信する
    if (e.keyCode === 13)
      props.onSubmit();
  };

  return (
    <Stack direction="row" spacing={2}>
      <Input value={props.value} onChange={props.onChange} onKeyDown={(e) => pressKey(e)} />
      <Button variant="contained" onClick={props.onSubmit} >
        送信する
      </Button>
    </Stack>
  );
};

export default TextInputArea;