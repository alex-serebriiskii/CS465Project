const __chat_height__ = '120px';

export const ChatPageStyles = {
  wrapper: {
    width: '100vw',
    maxWidth: '1000px',
    padding: '0 1em',
    margin: '0 auto',
    overflow: 'hidden',
    height: `calc(100% - ${__chat_height__})`,
    '& .header': {
      width: '100%',
      padding: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .messages': {
      width: '100%',
      height: 'calc(100% - 60px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: 'scroll',
      borderBottom: '1em inset transparent',
      transition: '250ms',
      '&.new': {
        borderBottom: '1em inset var(--red)',
      },
      '&.empty': {
        justifyContent: 'center',
        '& span': {
          color: 'white',
        },
      },
      '& .message': {
        width: '100%',
        padding: '0.25em',
        borderBottom: '1px solid var(--gray)',
        '& .user': {
          color: 'var(--blue-2)',
          fontWeight: '800',
        },
        '& .time': {
          color: 'var(--gray)',
          fontSize: '0.9em',
        },
        '& .text': {
          color: 'var(--gray-3)',
        },
      },
    },
    '& .chat-input': {
      height: __chat_height__,
      display: 'flex',
      position: 'fixed',
      bottom: '0',
      width: 'calc(100% - 30px)',
      maxWidth: '970px',
      '& .aux': {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '1em',
        '& button + button': {
          marginTop: '1em',
        }
      },
      '& form': {
        width: '100%',
        padding: '0 0.5em',
        '& p': {
          minHeight: '1.5em',
          color: 'var(--red)',
          fontWeight: '800',
        },
        '& textarea': {
          width: '100%',
          height: '100%',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          background: 'var(--gray-2)',
          border: 'none',
          resize: 'none',
          '-webkit-appearance': 'none',
          padding: {
            top: "0.5em",
            bottom: "3em",
            left: "0.5em",
            right: "0.5em",
          },
          fontSize: '1em',
        },
        '& button': {
          position: 'absolute',
          bottom: '0px',
          marginLeft: '-58px',
          padding: '1em',
          color: 'var(--black)',
        },
      },
    },
  },
};
