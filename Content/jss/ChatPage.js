export const ChatPageStyles = {
  wrapper: {
    width: '100vw',
    maxWidth: '1000px',
    padding: '0 1em',
    margin: '0 auto',
    overflow: 'hidden',
    '& .header': {
      width: '100%',
      padding: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .messages': {
      height: 'calc(40vh - 30px - 2em)',
      background: 'red',
    },
    '& .chat-input': {
      height: 'calc(20vh)',
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
          height: 'calc(20vh - 1.5em)',
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
          background: 'var(--gray-2)',
          border: 'none',
          resize: 'none',
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
