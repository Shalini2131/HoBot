import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {
   const config = {
     width: "400px",
     height: "400px",
     floating: true
   };

   const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily:'Open Sans',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

   const steps = [
      {
       id: "Greet",
       message: "Hello, I am your hobot!🙂",
       trigger: "Ask Name"
      },
      {
       id: "Ask Name",
       message: "May I know your name, please?",
       trigger: "Waiting user input for name"
      },
      {
          id: "Waiting user input for name",
          user: true,
          trigger:"Asking options to help"
      },
      {
          id:"Asking options to help",
          message: "Hi {previousValue}, Please click on what you want me to do!",
          trigger: "Displaying options"
      },
      {
          id:"Displaying options",
          options:[
              {
                  value: "Events",
                  label: "Events✨",
                  trigger: "Events-options"
              },
              {
                  value: "Food Menu",
                  label: "Food Menu 🍽",
                  trigger: "Food items"
              },
              {
                  value:"Hostel probs",
                  label: "Any repairs in room ?",
                  trigger: "todolist-add"
              }
          ]
      },
      {
            id: "Food items",
            options: [{
                    value: "tiffin",
                    label: "Tiffin",
                    trigger: "Asking for tiffins"
                },
                {
                    value: "lunch",
                    label: "Lunch",
                    trigger: "Asking for lunch"
                },
                {
                    value: "snacks",
                    label: "Snacks",
                    trigger: "Asking for snacks"
                },
                {
                    value: "dinner",
                    label: "Dinner",
                    trigger: "Asking for dinner"
                }
            ]
      },
      {
            id: "Events-options",
            options:[
                {
                    value:"this week",
                    label:"This week",
                    trigger: "Events this week"
                },
                {
                    value:"next week",
                    label: "Next week",
                    trigger:"Events next week"
                }
            ]
      },
      {
          id:"Events this week",
          message:"There are no events this week😔",
          trigger:"next"
      },
      {
          id: "Events next week",
          message: "Sankranthi celebrations 💃✨",
          trigger:"Anything else"
      },
      {
          id:"next",
          message:"Want to know for next week?",
          trigger: "Ask",
      },
      {
          id:"Ask",
          options:[
              {
                  value:"yes",
                  label:"Yeah!",
                  trigger: "Events next week"
              },
              {
                  value:"no",
                  label: "No",
                  trigger:"Anything else"
              }
          ]
      },
      {
            id: "todolist-add",
            message:"If you have any problems, kindly add them into the To-do list beside 😄",
            trigger:"Anything else"
      },
      {
            id: "Asking for tiffins",
            message: "Idli, Dosa, Uthappam, Milk🥛",
            trigger: "Anything else" 
      },
      {
          id: "Asking for lunch",
          message: "Paapad, Tomato Pappu, Bhindi fry, Rasam, Curd 😋",
          trigger: "Anything else"
      },
      {
          id: "Asking for snacks",
          message: "Aloo Samosa, Nimbu water🍸",
          trigger: "Anything else"
      },
      {
          id:"Asking for dinner",
          message: "Biryani, Chicken fry, Prawns curry, Gulaab Jamun, Ice-cream 🤤",
          trigger: "Anything else"
      },
      {
        id: "Anything else",
        options: [
            {
                value: "yes",
                label:"🔙",
                trigger: "Displaying options"
            },
            {
                value:"no",
                label: "That's it, Thanks🙂",
                trigger: "Bye"
            }
        ]
      },
      {
          id: "Bye",
          message: "Have a great day 🥰",
          end: true
      }

    ];
   
   return(
    <ThemeProvider theme={otherFontTheme}>
        <ChatBot steps={steps} {...config} />
    </ThemeProvider>
   );
  }
  export default CustomChatbot;