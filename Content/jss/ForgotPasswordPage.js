export const ForgotPasswordPageStyles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    maxWidth: "22em",
    padding: "1em",
    margin: "0 auto",
    color: "var(--red)",
    "& a": {
      marginTop: "3em",
      color: "var(--red)",
      display: "flex",
      alignItems: "center",
      fontWeight: "800",
      "& svg": {
        marginRight: "0.5em",
      },
    },
    "& h1": {
      marginTop: "1em",
    },
    "& form": {
      marginTop: "1em",
      display: "flex",
      flexDirection: "column",
      "& button": {
        width: "10em",
        margin: {
          top: "1em",
          bottom: "1em",
          left: "auto",
          right: "auto",
        },
      },
    },
  },
};
