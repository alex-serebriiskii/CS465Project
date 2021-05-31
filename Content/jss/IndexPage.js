export const IndexPageStyles = {
  wrapper: {
    "& .brand": {
      padding: {
        top: "4em",
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
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100vh",
      zIndex: "1",
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
      width: "20em",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      color: "var(--gray-3)",
      "& label": {
        margin: "0.5em 0",
      },
      "& input": {
        background: "var(--gray-2)",
        borderRadius: "5px",
        padding: "1em",
        outline: "none",
        border: "3px solid transparent",
        "&:focus": {
          border: "3px solid var(--blue)",
        },
        "&:active": {
          border: "3px solid var(--blue)",
        },
        "&.invalid": {
          border: "3px solid var(--red)",
        },
      },
      "& span": {
        color: "var(--red-1)",
        height: "1.5em",
      },
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
};
