import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import tab from "../public/tablogo.png";
const steps = [
  {
    id: "0",
    message: "Hey Learners!",

    trigger: "1",
  },
  {
    id: "1",

    message: "Please write your username",
    trigger: "2",
  },
  {
    id: "2",

    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: " hi {previousValue}, how can I help you?",
    trigger: 4,
  },
  {
    id: "4",
    options: [
      { value: 1, label: "View Courses" },
      { value: 2, label: "Read Articles" },
    ],
    end: true,
  },
];

const theme = {
  background: "#ffff",
  headerBgColor: "#0b40bd",
  headerFontSize: "24px",
  botBubbleColor: "#fbcf08",
  headerFontColor: "white",
  botFontColor: "black",
  userBubbleColor: "#0b40bd",
  userFontColor: "white",
};

const config = {
  botAvatar:
    "data:image/png;base64,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",
  floating: true,
};

function Chat() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="Learning Ways" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default Chat;
