import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '9b1af11c-e27b-4c60-b8f9-2b5dc46142ba',
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
  );
};
export default ChatsPage;