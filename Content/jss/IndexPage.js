import { minMedium } from "../constants.js";

export const IndexPageStyles = {
  wrapper: {
    "& .brand": {
      padding: {
        top: "3em",
        bottom: "4em",
      },
      "& .name": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& h1": {
          fontWeight: "800",
          fontSize: "2em",
          color: "var(--red)",
          margin: {
            left: "5px",
          },
        },
      },
      "& p": {
        color: "var(--gray-3)",
        fontSize: "1em",
        width: "100%",
        textAlign: "center",
      },
    },
    "& .buttons": {
      width: "100%",
      margin: {
        top: "3em",
      },
      "& > div": {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      "& > div + div": {
        margin: {
          top: "2em",
        },
      },
    },
    "& .page": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      zIndex: "1",
      overflowY: 'scroll',
      background: "var(--black)",
      display: "flex",
      flexDirection: "column",
      "& .logo": {
        cursor: "pointer",
        width: "fit-content",
        background: "none",
        border: "none",
        padding: "1em",
      },
      "& .title": {
        fontSize: "2em",
        width: "100%",
        textAlign: "center",
      },
      "& .instead": {
        fontSize: "1em",
        margin: "1em auto",
        width: "fit-content",
        textAlign: "center",
        background: "none",
        border: "none",
        textDecoration: "underline",
        cursor: "pointer",
      },
      "& .action": {
        margin: "0 auto",
      },
      "& a": {
        color: "var(--blue-2)",
        width: "fit-content",
        textAlign: "center",
        margin: "1em auto",
      },
    },
    "& .page.login": {
      "& .title": {
        color: "var(--red)",
      },
      "& .instead": {
        color: "var(--blue-2)",
      },
    },
    "& .page.signup": {
      "& .title": {
        color: "var(--blue)",
      },
      "& .instead": {
        color: "var(--red-2)",
      },
    },
    "& form": {
      width: "18em",
      margin: "0 auto",
      padding: "1em 0",
      display: "flex",
      flexDirection: "column",
      color: "var(--gray-3)",
      "& button": {
        width: "10em",
        margin: {
          top: "2em",
          bottom: "1em",
          left: "auto",
          right: "auto",
        },
      },
    },
  },
  [minMedium]: {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100vw',
      maxWidth: '1200px',
      margin: '0 auto',
      "& .buttons": {
        display: 'none',
      },
      "& .brand": {
        marginTop: '7em',
      },
      '& .pageWrapper': {
        background: 'var(--black)',
        position: "relative",
        padding: {
          top: '1em',
          bottom: '1em',
          left: 'calc(11px + 1em)',
          right: '1em',
        },
        marginTop: '5em',
        borderRadius: '10px',
        '-webkit-box-shadow': '2px 2px 4px 4px #00000019',
        'box-shadow': '2px 2px 4px 4px #00000019',
      },
      "& .page": {
        position: 'relative',
        padding: '1em',
        width: "500px",
        height: "600px",
        "& .logo": {
          display: 'none',
        },
      },
    },
  },
};
