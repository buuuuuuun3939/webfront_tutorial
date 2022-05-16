import { ChangeEvent, FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import TextInputArea from './TextInputArea';

// Profile の描画に使う component を import
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

// Github の Profile が見つからなかった時に使用する Alert Component
import Alert from '@mui/material/Alert';

type GitHubProfile = {
  login: string;
  name:  string;
  avatar_url: string;
};

const Profile: FC = () => {
  const [userName, setUserName] = useState('');
  const [profile, setProfile] = useState<GitHubProfile | undefined>(undefined);
  const [responseFlag, setFlag] = useState<boolean>(true); // fetch の結果を格納する flag

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onSubmit = async () => {
    // TODO API から data を fetch する
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();

    if (response.ok) {
      // 取得した data を profile に set する
      setProfile(data);
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  const onClick = () => {
    // Card が click された場合に github を別タブで開く
    window.open(`https://github.com/${userName}`, 'github');
  };

  return (
    <Stack spacing={1}>
      {/* profile の値がtruthy な場合に <Card /> を render する */}
      {responseFlag ? (profile && (
        <Card onClick={onClick}
          sx={{
            width: 300,
          }}
        >
          <CardHeader
            avatar={<Avatar src={profile.avatar_url} />}
            title={profile.name}
            subheader={profile.login}
          />
        </Card>
        )) : <Alert severity='error'>ユーザーの情報が取得できませんでした</Alert> // fetch が失敗した場合に Alert を出す
      }
      <TextInputArea value={userName} onChange={onChange} onSubmit={onSubmit} />
    </Stack>
  );
};

export default Profile;